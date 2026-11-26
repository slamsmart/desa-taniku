// Dev + prod server statis dengan SSE realtime (menggantikan plugin Vite).
// Jalankan: node server.mjs [port]  (default 3000)
import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { join, extname } from 'node:path'

const ROOT = 'dist'
const PORT = Number(process.argv[2] || process.env.PORT || 3000)
const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.woff2': 'font/woff2', '.map': 'application/json',
}

const komoditas = ['Beras', 'Jagung', 'Telur Ayam', 'Ikan Kembung', 'Cabai Merah']
const kejadian = [
  'Hujan deras terdeteksi di wilayah tambak',
  'Laporan panen raya padi masuk dari Poktan Suka Maju',
  'Wabah penyakit unggas dicegah di kandang desa',
  'Stok lumbung desa diperbarui setelah pengadaan',
]

const server = createServer(async (req, res) => {
  if (req.url.startsWith('/api/events')) {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    })
    res.write('retry: 3000\n\n')
    const timer = setInterval(() => {
      if (Math.random() < 0.6) {
        const k = komoditas[Math.floor(Math.random() * komoditas.length)]
        const delta = Math.round((Math.random() * 6 - 3) * 10) / 10
        res.write(`event: harga\ndata: ${JSON.stringify({ komoditas: k, deltaPersen: delta, waktu: new Date().toISOString() })}\n\n`)
      } else {
        res.write(`event: kejadian\ndata: ${JSON.stringify({ teks: kejadian[Math.floor(Math.random() * kejadian.length)], waktu: new Date().toISOString() })}\n\n`)
      }
    }, 5000)
    req.on('close', () => clearInterval(timer))
    return
  }

  let path = req.url.split('?')[0]
  if (path === '/') path = '/index.html'
  try {
    const file = await readFile(join(ROOT, path))
    res.writeHead(200, { 'Content-Type': MIME[extname(path)] || 'application/octet-stream' })
    res.end(file)
  } catch {
    const index = await readFile(join(ROOT, 'index.html'))
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(index)
  }
})

server.listen(PORT, '0.0.0.0', () => console.log(`Desa Taniku berjalan di http://localhost:${PORT}`))
