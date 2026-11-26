// Data contoh pilot — meniru struktur data resmi (BPS, Bapanas Panel Harga, FSVA, IDM).
// Setiap entitas membawa label sumber + tahun; saat kunci API tersedia,
// layanan ingest sisi server akan menggantikan nilai ini tanpa mengubah skema.

export const DESA = [
  {
    id: 'pesisir-baru',
    nama: 'Desa Pesisir Baru',
    jenis: 'pesisir',
    status: 'Aman',
    hariKecukupan: 42,
    fsva: 'FSVA 2024: Pangan Aman',
    idm: 'IDM 2024: Desa Mandiri',
    kecamatan: 'Kec. Talisayan',
    pusat: [118.53, -1.42],
    poligon: [
      [118.48, -1.38],
      [118.58, -1.38],
      [118.58, -1.47],
      [118.48, -1.47],
    ],
    produksi: [
      { subsektor: 'Perikanan', komoditas: 'Tangkapan laut', est: 320, realisasi: 354, satuan: 'ton/tahun' },
      { subsektor: 'Perikanan', komoditas: 'Tambak bandeng', est: 180, realisasi: 165, satuan: 'ton/tahun' },
      { subsektor: 'Pertanian', komoditas: 'Padi sawah', est: 240, realisasi: 228, satuan: 'ton GKG/tahun' },
    ],
    harga: [
      { nama: 'Ikan Kembung', harga: 38000, satuan: 'kg', tren: [35, 36, 37, 36, 38, 38] },
      { nama: 'Beras', harga: 12400, satuan: 'kg', tren: [12, 12.2, 12.4, 12.3, 12.4, 12.4] },
      { nama: 'Garam', harga: 4500, satuan: 'kg', tren: [4, 4.2, 4.5, 4.5, 4.6, 4.5] },
    ],
  },
  {
    id: 'pesisir-indah',
    nama: 'Desa Pesisir Indah',
    jenis: 'pesisir',
    status: 'Waspada',
    hariKecukupan: 21,
    fsva: 'FSVA 2024: Bayi Stunting Rendah',
    idm: 'IDM 2024: Desa Berkembang',
    kecamatan: 'Kec. Talisayan',
    pusat: [118.62, -1.44],
    poligon: [
      [118.58, -1.4],
      [118.67, -1.4],
      [118.67, -1.48],
      [118.58, -1.48],
    ],
    produksi: [
      { subsektor: 'Perikanan', komoditas: 'Keramba nila', est: 95, realisasi: 71, satuan: 'ton/tahun' },
      { subsektor: 'Peternakan', komoditas: 'Telur ayam', est: 60, realisasi: 58, satuan: 'ton/tahun' },
      { subsektor: 'Pertanian', komoditas: 'Jagung', est: 150, realisasi: 132, satuan: 'ton kering/tahun' },
    ],
    harga: [
      { nama: 'Ikan Nila', harga: 31000, satuan: 'kg', tren: [29, 30, 30, 31, 31, 31] },
      { nama: 'Telur Ayam', harga: 28500, satuan: 'kg', tren: [26, 27, 27.5, 28, 28.5, 28.5] },
      { nama: 'Jagung', harga: 5800, satuan: 'kg', tren: [5.5, 5.6, 5.7, 5.8, 5.8, 5.8] },
    ],
  },
  {
    id: 'darat-makmur',
    nama: 'Desa Darat Makmur',
    jenis: 'darat',
    status: 'Aman',
    hariKecukupan: 58,
    fsva: 'FSVA 2024: Pangan Aman',
    idm: 'IDM 2024: Desa Maju',
    kecamatan: 'Kec. Tabalong',
    pusat: [115.45, -2.05],
    poligon: [
      [115.4, -2.0],
      [115.5, -2.0],
      [115.5, -2.1],
      [115.4, -2.1],
    ],
    produksi: [
      { subsektor: 'Pertanian', komoditas: 'Padi sawah', est: 520, realisasi: 548, satuan: 'ton GKG/tahun' },
      { subsektor: 'Pertanian', komoditas: 'Jagung', est: 260, realisasi: 241, satuan: 'ton kering/tahun' },
      { subsektor: 'Peternakan', komoditas: 'Sapi potong', est: 180, realisasi: 190, satuan: 'ekor' },
    ],
    harga: [
      { nama: 'Beras', harga: 11900, satuan: 'kg', tren: [11.5, 11.6, 11.8, 11.9, 11.9, 11.9] },
      { nama: 'Jagung', harga: 5600, satuan: 'kg', tren: [5.2, 5.3, 5.5, 5.6, 5.6, 5.6] },
      { nama: 'Cabai Merah', harga: 46000, satuan: 'kg', tren: [38, 40, 42, 44, 45, 46] },
    ],
  },
]

// Poligon di atas adalah garis contoh untuk pilot, bukan batas resmi desa.
export const SUMMERKAT = {
  sumber: 'Data contoh pilot — struktur mengikuti BPS, Bapanas Panel Harga, FSVA, dan IDM',
  catatan: 'Poligon berupa titik/garis contoh; batas resmi desa akan dipakai saat data GeoJSON tersedia.',
}
