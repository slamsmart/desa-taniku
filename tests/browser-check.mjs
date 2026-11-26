// Skenario browser 1280 & 390 dijalankan single-process (runner Playwright
// memakai child_process.fork yang diblokir sandbox ini).
import { chromium } from 'playwright-core'

const BASE = 'http://localhost:3000'
const results = []

async function run(width, height, label) {
  const browser = await chromium.launch({ channel: 'chrome', headless: true })
  const page = await browser.newPage({ viewport: { width, height } })
  const errors = []
  page.on('pageerror', (e) => errors.push(String(e)))
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))

  await page.goto(BASE)
  await page.getByRole('heading', { name: 'Satu peta, seluruh potensi desa' }).waitFor()
  await page.getByText('Status desa').waitFor({ timeout: 10000 })
  results.push(`${label} ✓ heading + panel tampil`)

  for (const teks of ['Produksi per subsektor (est vs realisasi)', 'Harga komoditas & tren', 'FSVA 2024', 'IDM 2024', 'Belum ada laporan masuk']) {
    await page.getByText(teks).first().waitFor({ timeout: 10000 })
  }
  results.push(`${label} ✓ semua section + empty state terlihat`)

  // Interaksi utama: ganti desa → konten berubah
  await page.getByRole('button', { name: 'Desa Darat Makmur' }).click()
  await page.getByText('Sapi potong').waitFor({ timeout: 5000 })
  await page.getByText('IDM 2024: Desa Maju').waitFor()
  await page.getByRole('button', { name: 'Desa Pesisir Indah' }).click()
  await page.getByText('Keramba nila').waitFor({ timeout: 5000 })
  await page.getByText('Waspada').first().waitFor()
  results.push(`${label} ✓ interaksi ganti desa (darat→pesisir) berfungsi`)

  // Feed SSE
  await page.locator('.feed li').first().waitFor({ timeout: 20000 })
  await page.getByText('SSE hidup').waitFor()
  results.push(`${label} ✓ SSE feed hidup, laporan realtime tampil`)

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
  results.push(`${label} ${overflow <= 1 ? '✓' : '✗ OVERFLOW ' + overflow + 'px'} overflow horizontal: ${overflow}px`)

  await page.screenshot({ path: `screenshots/${label}-dashboard.png`, fullPage: false })
  if (errors.length) results.push(`${label} ✗ console errors: ${errors.slice(0, 3).join(' | ')}`)
  else results.push(`${label} ✓ tanpa error console`)

  await browser.close()
}

await run(1280, 800, 'desktop-1280')
await run(390, 844, 'mobile-390')
console.log(results.join('\n'))
