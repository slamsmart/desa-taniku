import { DESA } from './data/desa.js'

export default function Landing({ onBuka }) {
  return (
    <div className="landing">
      <div className="landing-card">
        <p className="eyebrow">Dasbor Realtime Desa</p>
        <h1>Satu peta, seluruh potensi desa</h1>
        <p className="landing-body">
          Panel intelijen desa menampilkan produksi per subsektor, stok lumbung dalam hari
          kecukupan, harga komoditas dengan tren, dan lapisan FSVA/IDM — semua berlabel sumber
          dan tanggal.
        </p>
        <button className="cta" onClick={onBuka}>
          Buka Dasbor Desa
        </button>
        <ul className="landing-items">
          <li>Peta desa dengan lapisan status kerawanan dan batas kecamatan</li>
          <li>Kartu Aman/Waspada/Rawan berdenyut saat ada laporan kejadian baru lewat SSE</li>
          <li>Tema pesisir teal untuk desa perikanan, tema hijau darat untuk desa tanaman pangan</li>
        </ul>
        <div className="desa-strip" aria-label="Desa pilot">
          {DESA.map((d) => (
            <span key={d.id} className={`chip ${d.jenis}`}>
              {d.nama} · {d.status}
            </span>
          ))}
        </div>
        <p className="sumber">
          Sumber data pilot: BPS, Bapanas (Panel Harga), Kementan, dan IDM Kemendes — berlabel
          sumber dan tahun pada dasbor.
        </p>
      </div>
    </div>
  )
}
