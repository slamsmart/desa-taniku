import { useEffect, useMemo, useRef, useState } from 'react'
import MapCanvas from './MapCanvas.jsx'
import Landing from './Landing.jsx'
import { DESA, SUMMERKAT } from './data/desa.js'

const STATUS_VAR = { Aman: 'var(--aman)', Waspada: 'var(--waspada)', Rawan: 'var(--rawan)' }

function Sparkline({ tren }) {
  const min = Math.min(...tren)
  const max = Math.max(...tren)
  const span = max - min || 1
  const up = tren[tren.length - 1] >= tren[0]
  const pts = tren
    .map((v, i) => `${(i / (tren.length - 1)) * 56},${16 - ((v - min) / span) * 14}`)
    .join(' ')
  return (
    <span className={`spark ${up ? 'up' : 'down'}`}>
      <svg width="56" height="18" aria-hidden="true">
        <polyline points={pts} fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <br />
      {up ? '▲' : '▼'} {Math.abs(Math.round(((tren[tren.length - 1] - tren[0]) / tren[0]) * 1000) / 10)}%
    </span>
  )
}

function HariKecukupan({ hari }) {
  const cls = hari >= 30 ? '' : hari >= 14 ? 'warn' : 'danger'
  return (
    <div className="kpi">
      <div className="label">Stok lumbung (hari kecukupan)</div>
      <div className={`value ${cls}`}>{hari} hari</div>
    </div>
  )
}

export default function App() {
  const [route, setRoute] = useState(window.location.pathname)
  const [selectedId, setSelectedId] = useState(DESA[0].id)
  const [koneksi, setKoneksi] = useState('menyambung') // menyambung | hidup | putus
  const [feed, setFeed] = useState([])
  const [pulseStatus, setPulseStatus] = useState(false)
  const [err, setErr] = useState(null)
  const [loading, setLoading] = useState(true)
  const [collapsed, setCollapsed] = useState(false)
  const esRef = useRef(null)

  function bukaDasbor() {
    window.history.pushState({}, '', '/dasbor')
    setRoute('/dasbor')
  }

  useEffect(() => {
    const onPop = () => setRoute(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const desa = useMemo(() => DESA.find((d) => d.id === selectedId), [selectedId])
  const tema = desa.jenis === 'pesisir' ? 'pesisir' : 'darat'

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (route !== '/dasbor') return
    function sambung() {
      const es = new EventSource('/api/events')
      esRef.current = es
      es.onopen = () => setKoneksi('hidup')
      es.onmessage = () => {}
      es.addEventListener('harga', (e) => {
        const d = JSON.parse(e.data)
        setFeed((f) =>
          [{ teks: `Harga ${d.komoditas} ${d.deltaPersen >= 0 ? '+' : ''}${d.deltaPersen}%`, waktu: d.waktu }, ...f].slice(0, 8),
        )
      })
      es.addEventListener('kejadian', (e) => {
        const d = JSON.parse(e.data)
        setFeed((f) => [{ teks: d.teks, waktu: d.waktu }, ...f].slice(0, 8))
        setPulseStatus(true)
        setTimeout(() => setPulseStatus(false), 4000)
      })
      es.onerror = () => {
        setKoneksi('putus')
        setErr('Koneksi realtime terputus.')
      }
    }
    sambung()
    return () => esRef.current?.close()
  }, [route])

  if (route !== '/dasbor') {
    return <Landing onBuka={bukaDasbor} />
  }

  function sambungUlang() {
    setErr(null)
    setKoneksi('menyambung')
    esRef.current?.close()
    const es = new EventSource('/api/events')
    esRef.current = es
    es.onopen = () => {
      setKoneksi('hidup')
      setErr(null)
    }
  }

  return (
    <div
      className="app"
      style={{ '--accent': tema === 'pesisir' ? 'var(--accent-pesisir)' : 'var(--accent-darat)' }}
    >
      <MapCanvas desaList={DESA} selectedId={selectedId} onSelect={setSelectedId} />

      {err && (
        <div className="banner" role="alert">
          <span>{err}</span>
          <button className="retry" onClick={sambungUlang}>
            Sambung ulang
          </button>
        </div>
      )}

      <button
        className={`icon-btn panel-open ${collapsed ? '' : 'hidden'}`}
        onClick={() => setCollapsed(false)}
        aria-label="Buka panel dasbor"
      >
        ☰
      </button>

      <aside className={`panel ${collapsed ? 'collapsed' : ''}`} aria-label="Panel dasbor desa">
        <header className="panel-header">
          <p className="eyebrow">Dasbor Realtime Desa</p>
          <h1>Satu peta, seluruh potensi desa</h1>
          <div className="desa-picker" role="group" aria-label="Pilih desa">
            {DESA.map((d) => (
              <button
                key={d.id}
                className="desa-chip"
                aria-pressed={d.id === selectedId}
                onClick={() => {
                  setSelectedId(d.id)
                  setCollapsed(false)
                }}
              >
                {d.nama}
              </button>
            ))}
          </div>
        </header>

        <div className="panel-body">
          {loading ? (
            <>
              <div className="skeleton" />
              <div className="skeleton" />
              <div className="skeleton" />
            </>
          ) : (
            <>
              <div className="status-row">
                <div
                  className={`status-badge ${pulseStatus ? 'pulse' : ''}`}
                  style={{ '--status-color': STATUS_VAR[desa.status] }}
                  aria-live="polite"
                >
                  <small>Status desa</small>
                  {desa.status}
                </div>
                <HariKecukupan hari={desa.hariKecukupan} />
              </div>

              <section aria-label="Produksi per subsektor">
                <h2 className="section-title">Produksi per subsektor (est vs realisasi)</h2>
                {desa.produksi.map((p) => {
                  const pct = Math.min(100, Math.round((p.realisasi / p.est) * 100))
                  return (
                    <div className="prod-row" key={p.komoditas}>
                      <div className="top">
                        <span>
                          {p.komoditas} · {p.subsektor}
                        </span>
                        <span>
                          {p.realisasi} / {p.est} {p.satuan}
                        </span>
                      </div>
                      <div
                        className="bar"
                        role="img"
                        aria-label={`${p.komoditas}: realisasi ${pct}% dari estimasi`}
                      >
                        <div className="est" />
                        <div className="real" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  )
                })}
              </section>

              <section aria-label="Harga komoditas">
                <h2 className="section-title">Harga komoditas & tren</h2>
                {desa.harga.map((h) => (
                  <div className="harga-row" key={h.nama}>
                    <div>
                      <div className="nama">{h.nama}</div>
                      <div className="sub">
                        Rp {h.harga.toLocaleString('id-ID')}/{h.satuan}
                      </div>
                    </div>
                    <Sparkline tren={h.tren} />
                  </div>
                ))}
              </section>

              <section aria-label="Laporan realtime">
                <h2 className="section-title">
                  Laporan terkini{' '}
                  <small style={{ textTransform: 'none', letterSpacing: 0 }}>
                    ({koneksi === 'hidup' ? 'SSE hidup' : koneksi === 'menyambung' ? 'menyambung…' : 'putus'})
                  </small>
                </h2>
                {feed.length === 0 ? (
                  <div className="empty">Belum ada laporan masuk. Laporan akan muncul otomatis di sini.</div>
                ) : (
                  <ul className="feed">
                    {feed.map((f, i) => (
                      <li key={i}>
                        <span>{f.teks}</span>
                        <time>
                          {new Date(f.waktu).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                        </time>
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              <p className="sumber">
                <strong>{desa.fsva}</strong> · <strong>{desa.idm}</strong> · Kecamatan {desa.kecamatan}
                <br />
                {SUMMERKAT.sumber}. {SUMMERKAT.catatan}
              </p>
            </>
          )}
        </div>
      </aside>

      <div className="legend" aria-hidden="true">
        <div className="item">
          <span className="dot" style={{ background: 'var(--aman)' }} /> Aman
        </div>
        <div className="item">
          <span className="dot" style={{ background: 'var(--waspada)' }} /> Waspada
        </div>
        <div className="item">
          <span className="dot" style={{ background: 'var(--rawan)' }} /> Rawan
        </div>
        <div className="item" style={{ color: 'var(--fg-dim)' }}>
          Tema pesisir: teal · Tema darat: hijau
        </div>
      </div>
    </div>
  )
}
