import { test, expect } from '@playwright/test'

const desaNama = ['Desa Pesisir Baru', 'Desa Pesisir Indah', 'Desa Darat Makmur']

for (const project of ['desktop', 'mobile']) {
  test.describe(`dasbor ${project}`, () => {
    test('memuat peta, panel, dan KPI dengan teks terlihat', async ({ page }, testInfo) => {
      await page.goto('/')
      await expect(page.getByRole('heading', { name: 'Satu peta, seluruh potensi desa' })).toBeVisible()
      await expect(page.getByText('Dasbor Realtime Desa')).toBeVisible()

      // Skeleton loading → konten
      await expect(page.getByText('Status desa')).toBeVisible({ timeout: 10000 })
      await expect(page.getByText('Produksi per subsektor (est vs realisasi)')).toBeVisible()
      await expect(page.getByText('Harga komoditas & tren')).toBeVisible()
      await expect(page.getByText(/FSVA 2024/)).toBeVisible()
      await expect(page.getByText(/IDM 2024/)).toBeVisible()

      // Tidak ada overflow horizontal
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      )
      expect(overflow).toBeLessThanOrEqual(1)
    })

    test('interaksi utama: pilih desa lain → panel & tema berubah', async ({ page }) => {
      await page.goto('/')
      await expect(page.getByText('Status desa')).toBeVisible({ timeout: 10000 })

      await page.getByRole('button', { name: 'Desa Darat Makmur' }).click()
      await expect(page.getByText('Sapi potong')).toBeVisible()
      await expect(page.getByText('IDM 2024: Desa Maju')).toBeVisible()
      await expect(page.getByText('58 hari')).toBeVisible()

      await page.getByRole('button', { name: 'Desa Pesisir Indah' }).click()
      await expect(page.getByText('Keramba nila')).toBeVisible()
      await expect(page.getByText('Waspada')).toBeVisible()
    })

    test('feed realtime SSE masuk (atau empty state lalu item)', async ({ page }) => {
      await page.goto('/')
      await expect(page.getByText('Status desa')).toBeVisible({ timeout: 10000 })
      // Server kirim tiap 5 detik; tunggu item feed muncul
      await expect(page.locator('.feed li').first()).toBeVisible({ timeout: 20000 })
      await expect(page.getByText('SSE hidup')).toBeVisible()
    })

    test('empty state tersedia', async ({ page }) => {
      await page.goto('/')
      await expect(page.getByText('Belum ada laporan masuk')).toBeVisible({ timeout: 10000 })
    })
  })
}
