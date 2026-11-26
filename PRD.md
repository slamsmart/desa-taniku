# PRD: Desa Taniku

**Platform Digital Ketahanan Pangan Desa**
Versi 1.1 | Disusun untuk Lomba Desa Digital 2026 (Tema: Ketahanan Pangan)

> **Perubahan v1.1:** (1) cakupan diperluas ke tiga subsektor pangan: **pertanian, peternakan, perikanan**; (2) ditambah **Modul F: Peta Tematik & Potensi Desa**; (3) **setiap desa mendapat akun login** untuk melihat dan memperbarui data potensinya sendiri; (4) MVP, peran, data, dan roadmap disesuaikan.

---

## 1. Ringkasan Produk

**Desa Taniku** adalah platform yang membantu desa memantau, mengelola, dan memperkuat ketahanan pangannya di tiga subsektor: **pertanian, peternakan, dan perikanan**. Platform menyatukan data produksi, informasi pasar, pemantauan cadangan pangan, peringatan dini kerawanan, dan **peta tematik potensi antar-desa** dalam satu sistem sederhana. Setiap desa memiliki **akun login** untuk melihat dan memperbarui data potensi desanya, sehingga desa lain, BUMDes, dan pemerintah daerah dapat menemukan potensi tersebut lewat peta dan pencarian.

**Visi:** Setiap desa mampu mengetahui kondisi pangannya secara real-time dan mengambil keputusan berbasis data.

**Misi:**
- Mendigitalkan pencatatan produksi dan stok pangan desa.
- Memberi petani akses informasi yang tepat waktu.
- Memperpendek rantai pasok dari petani ke konsumen.
- Mendeteksi risiko kerawanan pangan sebelum menjadi krisis.
- Memetakan potensi pangan (pertanian, peternakan, perikanan) setiap desa dan menghubungkan desa surplus dengan desa yang membutuhkan.
- Memberi setiap desa kendali atas data potensinya sendiri.

---

## 2. Latar Belakang dan Permasalahan

Permasalahan berikut adalah kondisi umum di desa-desa Indonesia. Angka dan data pendukung perlu divalidasi dengan sumber resmi (BPS, Badan Pangan Nasional, Kementan, IDM Kemendes) sebelum dicantumkan dalam proposal.

| # | Permasalahan | Dampak | Solusi di Desa Taniku |
|---|---|---|---|
| 1 | **Data produksi pangan tidak real-time.** Luas tanam, panen, dan stok tidak tercatat digital. | Perangkat desa dan pemerintah sulit memantau dan merencanakan pangan. | Modul **Dashboard & Pencatatan Pangan Desa** |
| 2 | **Petani minim informasi tepat waktu.** Cuaca, hama, kalender tanam, dan harga pasar sulit diakses. | Gagal panen, salah waktu tanam, dan keputusan jual yang merugikan. | Modul **Asisten Tani** |
| 3 | **Rantai pasok panjang.** Harga rendah di petani, tinggi di konsumen karena tengkulak dan distribusi tidak efisien. | Pendapatan petani rendah, harga pangan tinggi bagi warga. | Modul **Pasar Desa (Marketplace Lokal)** |
| 4 | **Kerawanan pangan tidak terdeteksi dini.** Gagal panen, banjir, atau kekeringan lambat teridentifikasi. | Respons terlambat, warga rentan kekurangan pangan. | Modul **Peringatan Dini Kerawanan Pangan** |
| 5 | **Lumbung pangan dan pekarangan tidak terkelola.** Cadangan pangan dan lahan pekarangan belum terdata. | Cadangan tidak dimanfaatkan optimal, bantuan tidak tepat sasaran. | Modul **Lumbung & Pekarangan Pangan** |
| 6 | **Potensi pangan desa tidak terpetakan dan tidak terhubung antar-desa.** Potensi pertanian, peternakan, dan perikanan hanya diketahui lokal. | Desa surplus tidak ketemu pembeli/desa defisit, perencanaan wilayah tidak berbasis data. | Modul **Peta Tematik & Potensi Desa** |

> Permasalahan 1-5 berlaku pada **ketiga subsektor** (pertanian, peternakan, perikanan). Contoh: data produksi mencakup panen padi, produksi telur/susu/daging, dan panen ikan; kerawanan mencakup gagal panen, wabah penyakit hewan, dan ikan mati massal. Permasalahan 6 ditambahkan pada v1.1.

---

## 3. Tujuan dan Metrik Keberhasilan

### 3.1 Tujuan Produk
1. Mendigitalkan data pangan desa dalam satu sumber data terpusat.
2. Mengurangi keterlambatan deteksi risiko pangan.
3. Meningkatkan akses petani terhadap informasi dan pasar.
4. Meningkatkan pemanfaatan cadangan pangan dan lahan pekarangan.
5. Memetakan potensi pangan seluruh desa pengguna dan memudahkan pencarian potensi desa lain.
6. Menjadikan data potensi dikelola mandiri oleh desa masing-masing.

### 3.2 Metrik Keberhasilan (target MVP pilot, 3 bulan)

| Tujuan | Metrik | Target |
|---|---|---|
| Digitalisasi data | Persentase petani terdaftar yang mencatat tanam/panen | ≥ 60% dari petani terdaftar |
| Akses informasi | Pengguna aktif mingguan (WAU) membuka Asisten Tani | ≥ 50% pengguna terdaftar |
| Pasar langsung | Jumlah transaksi/pesanan lewat Pasar Desa | ≥ 50 transaksi/bulan per desa |
| Deteksi dini | Waktu dari kejadian risiko hingga peringatan terkirim | < 24 jam |
| Lumbung | Persentase lumbung/pekarangan yang terdata | ≥ 80% dari yang teridentifikasi |
| Potensi desa | Persentase desa dengan profil potensi lengkap dan diperbarui ≤ 90 hari | ≥ 70% desa pilot |
| Subsektor | Desa yang mencatat data minimal 2 subsektor | ≥ 50% desa pilot |
| Peta & pencarian | Pencarian potensi desa dan kontak kerja sama antar-desa | ≥ 30 pencarian dan ≥ 5 kontak/bulan |
| Kepuasan | Skor kepuasan pengguna (CSAT) | ≥ 4 dari 5 |

---

## 4. Target Pengguna (Persona)

### 4.1 Pak Slamet, Petani (pengguna utama)
- Usia 45 tahun, lulusan SMP, memakai Android entry-level, sinyal tidak stabil.
- **Kebutuhan:** catat tanam/panen dengan mudah, tahu cuaca dan harga, jual hasil tanpa tengkulak.
- **Hambatan:** literasi digital rendah, kuota terbatas.

### 4.2 Bu Rina, Perangkat Desa / Admin Desa
- Usia 38 tahun, mengelola administrasi desa.
- **Kebutuhan:** rekap data pangan desa, laporan untuk kecamatan/kabupaten, pantau desa rentan.
- **Hambatan:** pencatatan manual di buku dan spreadsheet terpisah.

### 4.3 Mas Dimas, Pengurus BUMDes / Lumbung
- Usia 30 tahun, mengelola unit usaha pangan desa.
- **Kebutuhan:** kelola stok cadangan, beli hasil petani, salurkan ke pasar atau program gizi.

### 4.4 Ibu Wati, Konsumen / Warga
- Rumah tangga yang membeli pangan lokal.
- **Kebutuhan:** beli pangan segar langsung dari petani desa dengan harga wajar.

### 4.5 Pengguna Sekunder
- Dinas pertanian, peternakan, perikanan, dan ketahanan pangan kabupaten (melihat rekap, peta kerentanan dan potensi).
- Penyuluh pertanian/peternakan/perikanan lapangan (membantu pendataan, edukasi, verifikasi data).
- Pelaku usaha, BUMDes desa lain, dan peneliti (mencari potensi desa untuk kemitraan).
- Pengunjung publik (melihat peta dan profil desa yang dibuka untuk umum).

> **Catatan istilah:** "petani" dalam dokumen ini mencakup petani, peternak, dan pembudidaya ikan/nelayan.

---

## 5. Ruang Lingkup

### 5.1 Dalam Lingkup MVP
Enam modul inti (A-F) yang memetakan ke permasalahan 1-6, dalam bentuk paling sederhana (lihat Bagian 7), mencakup tiga subsektor.

### 5.2 Di Luar Lingkup MVP (Fase Berikutnya)
- Diagnosis hama berbasis foto (AI).
- Integrasi drone dan sensor IoT.
- Pembayaran digital terintegrasi penuh (payment gateway).
- Logistik/kurir terintegrasi.
- Integrasi API resmi pemerintah (Sistem Informasi Desa, SIPD, dll.).
- Aplikasi iOS.
- Sensor IoT kolam/kandang.

### 5.3 Cakupan Subsektor Pangan

Setiap desa dapat mengisi potensi pada satu atau lebih subsektor. Data inti MVP dibuat sederhana dan seragam agar mudah dibandingkan antar-desa.

| Subsektor | Contoh komoditas | Data potensi yang dicatat (MVP) | Data lanjutan (fase berikutnya) |
|---|---|---|---|
| **Pertanian** | Padi, jagung, kedelai, umbi, cabai, bawang, sayur, buah | Komoditas unggulan, luas lahan, luas tanam, produksi (ton/tahun), irigasi, kelompok tani | Produktivitas per musim, alat mesin pertanian, benih/pupuk |
| **Peternakan** | Sapi, kambing, domba, ayam, itik, telur, susu | Jenis ternak, populasi, produksi (daging/telur/susu), jumlah kandang, kelompok ternak | Kesehatan hewan, vaksinasi, pakan, bibit |
| **Perikanan** | Lele, nila, gurame, udang, ikan tangkap | Jenis usaha (kolam/tambak/keramba/tangkap), jenis ikan, luas kolam/area, produksi (ton/tahun), pokdakan | Benih, pakan, kualitas air, cold storage |

Tiap desa juga mengisi **aset dan kelembagaan** (BUMDes, kelompok tani/ternak/ikan, KWT, lumbung, pengolahan hasil), **kapasitas surplus/defisit**, serta **kontak** pengelola.

---

## 6. Fitur dan Prioritas

Prioritas memakai **MoSCoW**: Must (wajib MVP), Should (sebaiknya, jika waktu cukup), Could (fase lanjut).

### Modul A: Pencatatan & Dashboard Pangan Desa (Permasalahan 1)

| ID | Fitur | Prioritas |
|---|---|---|
| A1 | Registrasi dan profil produsen (petani, peternak, pembudidaya ikan/nelayan; kelompok, lokasi usaha) | Must |
| A2 | Pencatatan aset produksi: lahan pertanian, kandang/ternak, kolam/tambak/area tangkap (luas/jumlah, komoditas, lokasi) | Must |
| A3 | Pencatatan produksi: tanam dan panen, populasi dan produksi ternak (telur/susu/daging), tebar dan panen ikan (tanggal, komoditas, jumlah) | Must |
| A4 | Dashboard desa per subsektor: luas tanam, populasi ternak, luas kolam, estimasi dan realisasi produksi, stok per komoditas | Must |
| A5 | Ekspor laporan ringkas (PDF/CSV) | Should |
| A6 | Rekap tingkat kecamatan/kabupaten | Could |

### Modul B: Asisten Tani (Permasalahan 2)

| ID | Fitur | Prioritas |
|---|---|---|
| B1 | Prakiraan cuaca lokasi desa (sumber: BMKG) | Must |
| B2 | Kalender tanam (pertanian) dan jadwal budidaya dasar (peternakan: pakan/vaksinasi; perikanan: tebar/panen) | Must |
| B3 | Harga pasar komoditas (input manual admin/pengurus, tahap awal) | Must |
| B4 | Notifikasi cuaca ekstrem dan pengingat tanam/panen | Should |
| B5 | Tips budidaya dan penanganan hama/penyakit tanaman, ternak, dan ikan (konten statis) | Should |
| B6 | Diagnosis hama/penyakit tanaman, ternak, dan ikan lewat foto | Could |

### Modul C: Pasar Desa (Permasalahan 3)

| ID | Fitur | Prioritas |
|---|---|---|
| C1 | Produsen/BUMDes memposting produk pertanian, peternakan, dan perikanan (nama, harga, jumlah, satuan, foto) | Must |
| C2 | Katalog produk desa, pencarian dan filter | Must |
| C3 | Pemesanan dan konfirmasi via chat/WhatsApp (tanpa pembayaran in-app) | Must |
| C4 | Status pesanan (baru, dikonfirmasi, selesai) | Should |
| C5 | Rating dan ulasan penjual | Could |
| C6 | Pembayaran digital terintegrasi | Could |

### Modul D: Peringatan Dini Kerawanan Pangan (Permasalahan 4)

| ID | Fitur | Prioritas |
|---|---|---|
| D1 | Laporan kejadian oleh warga/petani (gagal panen, banjir, kekeringan, hama, wabah penyakit hewan, ikan mati massal) dengan foto dan lokasi | Must |
| D2 | Indikator risiko sederhana berbasis aturan (rule-based): stok cadangan rendah, produksi (panen/telur/ikan) turun, laporan kejadian meningkat | Must |
| D3 | Status desa: Aman / Waspada / Rawan, tampil di dashboard | Must |
| D4 | Notifikasi peringatan ke admin desa (push/WhatsApp) | Should |
| D5 | Peta sebaran kejadian | Should |
| D6 | Prediksi risiko berbasis machine learning | Could |

### Modul E: Lumbung & Pekarangan Pangan (Permasalahan 5)

| ID | Fitur | Prioritas |
|---|---|---|
| E1 | Data lumbung pangan desa (lokasi, kapasitas, stok masuk/keluar) | Must |
| E2 | Pendataan pekarangan pangan warga (lokasi, luas, tanaman, ternak kecil, kolam mini) | Must |
| E3 | Ringkasan cadangan pangan desa (berapa hari/kebutuhan warga tercukupi) | Should |
| E4 | Peta lumbung dan pekarangan | Should |
| E5 | Pencatatan penyaluran bantuan pangan | Could |

### Modul F: Peta Tematik & Potensi Desa (Permasalahan 6)

**Sumber data potensi:** (a) **otomatis**, diagregasi dari pencatatan Modul A dan E; (b) **manual**, diisi admin desa untuk aset, kapasitas, kelembagaan, dan kontak. Setiap data diberi label sumber dan tanggal pembaruan.

| ID | Fitur | Prioritas |
|---|---|---|
| F1 | **Profil Potensi Desa** per subsektor (pertanian, peternakan, perikanan): komoditas unggulan, produksi, aset, kelembagaan, estimasi surplus/defisit, kontak | Must |
| F2 | **Akun login tiap desa** (Admin Desa + operator) untuk melihat dan **memperbarui** data potensi desanya sendiri, dengan riwayat perubahan | Must |
| F3 | **Peta tematik** dengan layer: status kerawanan, potensi per subsektor, surplus/defisit, lumbung, sebaran kejadian | Must |
| F4 | **Pencarian potensi desa**: kata kunci, filter subsektor, komoditas, wilayah, radius, dan kapasitas/surplus | Must |
| F5 | **Halaman profil publik desa** (ringkasan potensi dan kontak sesuai pengaturan visibilitas) | Must |
| F6 | **Pengaturan visibilitas data** per kelompok data (Publik / Pengguna Terdaftar / Privat) | Must |
| F7 | Indikator kelengkapan data dan tanggal pembaruan terakhir per desa | Should |
| F8 | Status verifikasi data (Mandiri / Terverifikasi oleh penyuluh atau kecamatan) | Should |
| F9 | Tombol "Hubungi" / "Ajukan Kerja Sama" antar-desa (via WhatsApp) | Should |
| F10 | Rekomendasi pencocokan otomatis desa surplus ke desa defisit/waspada | Could |
| F11 | Perbandingan antar-desa dan unduh rekap | Could |
| F12 | Rekap kecamatan/kabupaten dan integrasi data FSVA/IDM | Could |

### Fitur Lintas Modul

| ID | Fitur | Prioritas |
|---|---|---|
| X1 | Autentikasi (nomor HP + OTP/PIN) dan peran (Petani, Admin Desa, Pengurus BUMDes, Warga) | Must |
| X2 | **Mode offline:** input data disimpan lokal dan disinkronkan saat ada sinyal | Must |
| X3 | Antarmuka sederhana berbahasa Indonesia, ikon besar | Must |
| X4 | Bantuan/tutorial singkat di dalam aplikasi | Should |
| X5 | Integrasi bot WhatsApp untuk input cepat | Could |

---

## 7. Definisi MVP

### 7.1 Prinsip MVP
> Cukup kecil untuk dibangun dan diuji cepat, cukup lengkap untuk membuktikan bahwa data pangan desa bisa terkumpul, dipantau, dan ditindaklanjuti.

### 7.2 Cakupan MVP (semua fitur berprioritas **Must**)

| Modul | Fitur MVP |
|---|---|
| A. Pencatatan & Dashboard | A1, A2, A3, A4 |
| B. Asisten Tani | B1, B2, B3 |
| C. Pasar Desa | C1, C2, C3 |
| D. Peringatan Dini | D1, D2, D3 |
| E. Lumbung & Pekarangan | E1, E2 |
| F. Peta Tematik & Potensi Desa | F1, F2, F3, F4, F5, F6 |
| Lintas modul | X1, X2, X3 |

### 7.3 Kriteria Selesai MVP (Definition of Done)
- [ ] Pengguna dapat mendaftar dan masuk dengan peran yang sesuai.
- [ ] Petani dapat mencatat lahan, tanam, dan panen, termasuk saat offline.
- [ ] Dashboard desa menampilkan data agregat yang akurat.
- [ ] Prakiraan cuaca dan kalender tanam tampil untuk lokasi desa.
- [ ] Petani dapat memposting produk dan pembeli dapat memesan via WhatsApp.
- [ ] Warga dapat melaporkan kejadian dan status desa berubah sesuai aturan risiko.
- [ ] Admin dapat mencatat stok lumbung dan pekarangan.
- [ ] Setiap desa pilot memiliki akun admin, dapat login, melihat, dan memperbarui profil potensi di tiga subsektor.
- [ ] Peta tematik menampilkan minimal layer status kerawanan dan potensi per subsektor untuk desa pilot.
- [ ] Pencarian potensi desa berfungsi (subsektor, komoditas, wilayah) dan hanya menampilkan data sesuai pengaturan visibilitas.
- [ ] Riwayat perubahan data potensi tercatat.
- [ ] Uji coba dengan minimal 3 desa pilot dan 20 pengguna nyata.
- [ ] Tidak ada bug kritis pada alur utama.

### 7.4 Rencana Pilot
- **Lokasi:** minimal 3 desa pilot yang saling berdekatan dan mewakili subsektor berbeda (agar peta dan pencarian antar-desa bermakna).
- **Peserta:** 20-30 produsen (petani/peternak/pembudidaya ikan), admin dan operator tiap desa, 1-3 pengurus BUMDes.
- **Durasi:** 4-8 minggu.
- **Hasil yang dipelajari:** kemudahan pakai, kelengkapan data, kebutuhan fitur berikutnya.

---

## 8. User Stories dan Kriteria Penerimaan

### Modul A
- **A3:** *Sebagai petani, saya ingin mencatat panen saya agar hasil produksi desa terlihat.*
  - Form dapat diisi dalam ≤ 5 langkah.
  - Data tersimpan walau tanpa sinyal dan tersinkron otomatis.
- **A4:** *Sebagai admin desa, saya ingin melihat total produksi desa agar bisa menyusun laporan.*
  - Dashboard menampilkan total tanam, panen, dan stok per komoditas, serta filter periode.

### Modul B
- **B1/B2:** *Sebagai petani, saya ingin tahu cuaca dan waktu tanam terbaik agar tidak gagal panen.*
  - Prakiraan minimal 3 hari tampil di beranda.
  - Kalender tanam menampilkan rekomendasi per komoditas.
- **B3:** *Sebagai petani, saya ingin tahu harga pasar agar tidak dirugikan tengkulak.*
  - Harga terbaru tampil beserta tanggal pembaruan.

### Modul C
- **C1:** *Sebagai petani, saya ingin menawarkan hasil panen langsung ke pembeli.*
  - Posting produk selesai dalam ≤ 1 menit dengan foto, harga, dan jumlah.
- **C3:** *Sebagai warga, saya ingin memesan pangan lokal dengan mudah.*
  - Tombol "Pesan" membuka WhatsApp penjual dengan pesan terisi otomatis.

### Modul D
- **D1:** *Sebagai warga, saya ingin melaporkan gagal panen/bencana agar segera ditangani.*
  - Laporan dapat dikirim dengan foto dan lokasi dalam ≤ 4 langkah.
- **D2/D3:** *Sebagai admin desa, saya ingin tahu kapan desa saya berstatus waspada.*
  - Status berubah otomatis sesuai aturan (lihat Bagian 9.3).

### Modul E
- **E1:** *Sebagai pengurus lumbung, saya ingin mencatat stok masuk/keluar agar cadangan terpantau.*
  - Stok saat ini dihitung otomatis dari transaksi masuk/keluar.
- **E2:** *Sebagai admin desa, saya ingin mendata pekarangan pangan agar bisa dimanfaatkan.*
  - Data pekarangan memuat lokasi, luas, dan jenis tanaman/ternak/ikan.

### Modul F
- **F1/F2:** *Sebagai admin desa, saya ingin login dan memperbarui data potensi pertanian, peternakan, dan perikanan desa saya agar potensi desa terlihat akurat.*
  - Admin dapat menambah/mengubah data potensi tiap subsektor.
  - Setiap perubahan tercatat (siapa dan kapan) dan tanggal "terakhir diperbarui" tampil.
  - Admin hanya dapat mengubah data desanya sendiri.
- **F3:** *Sebagai kepala desa atau dinas, saya ingin melihat peta potensi dan kerawanan agar bisa menentukan prioritas.*
  - Pengguna dapat memilih layer dan subsektor; warna mengikuti legenda.
  - Klik desa menampilkan ringkasan potensi dan status.
- **F4:** *Sebagai pengurus BUMDes, saya ingin mencari desa penghasil komoditas tertentu agar bisa membeli atau bermitra.*
  - Filter subsektor, komoditas, wilayah, dan radius; hasil tampil sebagai daftar dan titik di peta.
  - Hasil dapat diurutkan menurut jarak atau jumlah produksi.
- **F6:** *Sebagai admin desa, saya ingin mengatur data mana yang terlihat publik agar data desa tidak disalahgunakan.*
  - Setiap kelompok data punya pilihan visibilitas; pengaturan awal bersifat aman (terbatas).

---

## 9. Persyaratan Fungsional Utama

### 9.1 Peran dan Hak Akses

| Peran | Hak Akses |
|---|---|
| Petani/Peternak/Pembudidaya Ikan | CRUD data aset dan produksi sendiri, posting produk, lapor kejadian, lihat info budidaya |
| Warga | Lihat katalog, pesan produk, lapor kejadian |
| Pengurus BUMDes/Lumbung | Kelola stok lumbung, posting produk BUMDes |
| Admin Desa (akun desa) | Lihat seluruh data desanya, kelola pengguna dan operator, input harga pasar, tindak lanjut laporan, lihat status kerawanan, **melihat dan memperbarui profil potensi desa**, atur visibilitas data, cari potensi desa lain |
| Operator Desa | Membantu admin menginput dan memperbarui data potensi (tanpa akses pengaturan akun dan visibilitas) |
| Penyuluh/Kecamatan | Melihat data desa binaan, memverifikasi data potensi |
| Pemda/Dinas | Melihat peta dan rekap wilayah (data agregat dan yang dibuka desa) |
| Pengunjung Publik | Melihat peta dan profil desa yang berstatus publik |
| Super Admin | Kelola desa dan konfigurasi sistem |

### 9.2 Aturan Offline
- Data input disimpan di penyimpanan lokal perangkat.
- Sinkronisasi otomatis saat koneksi tersedia; konflik diselesaikan dengan aturan "pembaruan terbaru menang" dan ditandai untuk ditinjau admin.

### 9.3 Aturan Risiko Kerawanan (Rule-Based, dapat diatur admin)

| Indikator | Waspada | Rawan |
|---|---|---|
| Cadangan lumbung dibanding kebutuhan | < 30 hari | < 14 hari |
| Penurunan panen dibanding periode sama sebelumnya | > 20% | > 40% |
| Jumlah laporan kejadian dalam 7 hari | ≥ 3 | ≥ 8 |

> Ambang batas di atas adalah nilai awal yang perlu divalidasi bersama ahli/dinas terkait dan dapat dikonfigurasi.

### 9.4 Notifikasi
- Push notification (atau WhatsApp pada fase lanjut) untuk peringatan cuaca ekstrem, perubahan status desa, dan pesanan baru.
- Pengingat ke admin desa bila data potensi belum diperbarui lebih dari 90 hari.

### 9.5 Akun dan Verifikasi Desa
1. Desa mendaftar dengan kode desa dan surat tugas/keterangan dari kepala desa.
2. Super Admin memverifikasi, lalu membuat akun **Admin Desa** (1 admin utama + operator).
3. Login memakai nomor HP + OTP/PIN; admin utama dapat menambah atau mencabut operator.
4. Setiap perubahan data potensi dicatat dalam **riwayat perubahan** (audit log).
5. Data dapat berstatus **Mandiri** (diisi desa) atau **Terverifikasi** (dikonfirmasi penyuluh/kecamatan).

### 9.6 Visibilitas Data Potensi Desa

| Jenis Data | Pengunjung Publik | Pengguna Terdaftar | Admin Desa Bersangkutan | Pemda/Dinas |
|---|---|---|---|---|
| Profil desa, komoditas unggulan, deskripsi potensi | Ya | Ya | Ya (ubah) | Ya |
| Estimasi produksi agregat per subsektor dan surplus/defisit | Opsional (diatur desa) | Ya | Ya (ubah) | Ya |
| Status kerawanan (warna di peta) | Ya | Ya | Ya | Ya |
| Penyebab kerawanan dan stok lumbung rinci | Tidak | Tidak | Ya | Ya |
| Kontak BUMDes/admin | Opsional (diatur desa) | Ya | Ya (ubah) | Ya |
| Data individu petani/peternak dan lokasi lahan/kandang/kolam | Tidak | Tidak | Ya (desanya saja) | Tidak (hanya agregat) |

Peta antar-desa **hanya menampilkan data agregat tingkat desa**; data pribadi tidak pernah ditampilkan.

---

## 10. Persyaratan Non-Fungsional

| Kategori | Persyaratan |
|---|---|
| Performa | Halaman utama dimuat < 3 detik pada jaringan 3G |
| Ketersediaan | Fitur input inti tetap berfungsi offline |
| Kompatibilitas | Android 8+ (prioritas), perangkat RAM 2 GB |
| Ukuran aplikasi | < 30 MB jika berbentuk aplikasi; PWA sebagai alternatif ringan |
| Keamanan | Enkripsi data saat transit (HTTPS), hash PIN, kontrol akses berbasis peran |
| Privasi | Patuh UU Pelindungan Data Pribadi (UU PDP); lokasi lahan hanya terlihat oleh admin desa kecuali pemilik mengizinkan |
| Aksesibilitas | Bahasa Indonesia sederhana, ikon besar, kontras tinggi, opsi teks besar |
| Skalabilitas | Arsitektur multi-desa (multi-tenant) sejak awal |
| Pemeliharaan | Pencadangan data harian |
| Kinerja peta | Peta tematik memuat < 5 detik untuk ratusan desa (vector tile, cache layer) |
| Audit | Riwayat perubahan data potensi tersimpan dan tidak dapat dihapus oleh operator |
| Kualitas data | Validasi rentang nilai (misal produksi tidak negatif) dan peringatan data usang |

---

## 11. Alur Pengguna Utama

**Alur 1: Petani mencatat panen dan menjual**
1. Masuk → Beranda → "Catat Panen"
2. Pilih lahan dan komoditas → isi jumlah dan tanggal → Simpan
3. Pilih "Jual Hasil Panen" → isi harga dan foto → Posting
4. Pembeli memesan → petani menerima WhatsApp → transaksi selesai

**Alur 2: Warga melapor gagal panen/bencana**
1. Beranda → "Lapor Kejadian"
2. Pilih jenis kejadian → ambil foto → lokasi otomatis → Kirim
3. Admin desa menerima notifikasi → menindaklanjuti → status laporan diperbarui

**Alur 3: Admin memantau ketahanan pangan**
1. Dashboard → lihat produksi, stok lumbung, status kerawanan
2. Jika status "Waspada/Rawan" → lihat penyebab → ambil tindakan (distribusi cadangan, laporkan ke kecamatan)
3. Ekspor laporan

**Alur 4: Admin desa memperbarui potensi desa**
1. Login akun desa → menu "Potensi Desa"
2. Pilih subsektor (pertanian/peternakan/perikanan) → perbarui komoditas unggulan, produksi, aset, kontak (sebagian terisi otomatis dari catatan warga)
3. Atur visibilitas data → Simpan
4. Profil desa tampil di peta dan pencarian sesuai pengaturan; tanggal "terakhir diperbarui" ikut berubah

**Alur 5: Mencari potensi desa lain**
1. Buka "Peta Potensi" → pilih layer (mis. peternakan) atau ketik kata kunci ("telur", "lele", "jagung")
2. Atur filter wilayah/radius dan surplus minimal → lihat hasil di peta dan daftar
3. Buka profil desa → klik "Hubungi" untuk menghubungi BUMDes/admin desa via WhatsApp

---

## 12. Arsitektur dan Teknologi (Usulan)

| Lapisan | Usulan | Alasan |
|---|---|---|
| Klien | **PWA / Flutter** (Android) | Ringan, mendukung offline |
| Penyimpanan lokal | IndexedDB / SQLite | Mode offline |
| Backend | Node.js (NestJS/Express) atau Laravel | Cepat dikembangkan |
| Basis data | PostgreSQL (+ PostGIS untuk peta) | Data relasional dan geospasial |
| Penyimpanan file | Object storage (S3-compatible) | Foto produk dan laporan |
| Autentikasi | OTP SMS/WhatsApp atau PIN | Cocok untuk pengguna awam |
| Peta | OpenStreetMap + MapLibre GL / Leaflet | Gratis, mendukung peta tematik (choropleth) dan layer |
| Batas wilayah desa | GeoJSON batas desa (BIG/Kemendagri/BPS), disimpan di PostGIS | Dasar pewarnaan peta |
| Pencarian | PostgreSQL full-text + PostGIS (radius) | Cari potensi dan jarak antar-desa |
| Cuaca | API BMKG (data terbuka) | Sumber resmi |
| Notifikasi | Firebase Cloud Messaging | Push gratis |
| Hosting | VPS/Cloud lokal | Biaya terjangkau |

### Model Data Inti

```
Desa(id, kode_desa, nama, kecamatan, kabupaten, provinsi, koordinat, batas_wilayah[polygon], status_verifikasi)
Pengguna(id, desa_id, nama, no_hp, peran, kelompok_tani)
Lahan(id, pengguna_id, luas_m2, komoditas_utama, koordinat)
CatatanTanam(id, lahan_id, komoditas, tgl_tanam, est_panen)
CatatanPanen(id, lahan_id, komoditas, tgl_panen, jumlah_kg)
HargaPasar(id, desa_id, komoditas, harga_per_kg, tanggal)
Produk(id, penjual_id, komoditas, harga, stok_kg, foto, status)
Pesanan(id, produk_id, pembeli_id, jumlah, status, tanggal)
LaporanKejadian(id, pelapor_id, jenis, deskripsi, foto, koordinat, status, tanggal)
Lumbung(id, desa_id, nama, kapasitas_kg, koordinat)
TransaksiLumbung(id, lumbung_id, komoditas, jumlah_kg, tipe[masuk/keluar], tanggal)
Pekarangan(id, pengguna_id, luas_m2, tanaman, koordinat)
StatusKerawanan(id, desa_id, status, penyebab, dihitung_pada)

-- Peternakan dan perikanan (v1.1)
AsetProduksi(id, pengguna_id, jenis[lahan|kandang|kolam|tambak|area_tangkap], ukuran, satuan, koordinat)
CatatanTernak(id, aset_id, jenis_ternak, populasi, produksi, satuan_produksi, tanggal)
CatatanPerikanan(id, aset_id, jenis_ikan, tgl_tebar, tgl_panen, jumlah_kg)

-- Potensi desa dan peta (v1.1)
KomoditasMaster(id, subsektor[pertanian|peternakan|perikanan], nama, satuan)
PotensiDesa(id, desa_id, subsektor, komoditas_id, produksi_per_tahun, satuan, surplus_defisit, aset_ringkas, sumber[otomatis|manual], status_verifikasi, diperbarui_pada, diperbarui_oleh)
KelembagaanDesa(id, desa_id, jenis[bumdes|poktan|kwt|pokdakan|lumbung|pengolahan], nama, kontak)
VisibilitasData(id, desa_id, kelompok_data, level[publik|terdaftar|privat])
RiwayatPerubahan(id, entitas, entitas_id, pengguna_id, nilai_lama, nilai_baru, waktu)
KerjaSama(id, desa_pengaju_id, desa_tujuan_id, komoditas_id, pesan, status, tanggal)
```

---

## 13. Sumber Data dan Validasi

| Kebutuhan | Sumber |
|---|---|
| Cuaca dan peringatan iklim | BMKG |
| Statistik pertanian dan pangan | BPS, Kementan |
| Data peternakan dan kesehatan hewan | Kementan (Ditjen Peternakan dan Kesehatan Hewan), Dinas Peternakan |
| Data perikanan dan budidaya | Kementerian Kelautan dan Perikanan (KKP), Dinas Perikanan |
| Batas wilayah desa (peta) | BIG, Kemendagri, BPS (cek ketersediaan dan lisensi) |
| Harga pangan dan cadangan | Badan Pangan Nasional (Bapanas), PIHPS |
| Peta kerentanan pangan | Food Security and Vulnerability Atlas (FSVA) |
| Kondisi desa | Indeks Desa Membangun (IDM), Kemendes PDTT |
| Data lokal | Input langsung petani dan perangkat desa |

---

## 14. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Literasi digital rendah | Adopsi rendah | UI sederhana, pelatihan, pendampingan PPL |
| Sinyal buruk | Data tidak terinput | Mode offline dan sinkronisasi |
| Data tidak akurat/tidak lengkap | Dashboard menyesatkan | Validasi input, peninjauan admin, indikator kelengkapan data |
| Admin desa tidak aktif | Peringatan tidak ditindaklanjuti | Pengingat otomatis, eskalasi ke kecamatan |
| Harga pasar tidak terbarui | Informasi usang | Penanda tanggal pembaruan, pengingat ke admin |
| Privasi data lahan | Kepercayaan menurun | Kontrol akses, persetujuan eksplisit, kepatuhan UU PDP |
| Keberlanjutan biaya | Aplikasi berhenti | Kemitraan dengan BUMDes dan dana desa, hosting hemat biaya |
| Peta kosong karena sedikit desa mengisi (cold start) | Fitur peta tidak berguna | Mulai dari klaster desa pilot berdekatan, prapengisian dari data BPS/dinas, target kelengkapan per desa |
| Data potensi tidak diperbarui atau dilebih-lebihkan | Keputusan salah, kepercayaan turun | Label sumber dan tanggal, status verifikasi, pengingat 90 hari, verifikasi penyuluh |
| Penyalahgunaan data potensi/kontak (spam, penipuan kerja sama) | Desa dirugikan | Visibilitas bertingkat, kontak hanya untuk pengguna terdaftar, fitur lapor penyalahgunaan |
| Desa enggan berbagi data | Peta tidak lengkap | Kendali penuh desa atas visibilitas, edukasi manfaat, persetujuan resmi kepala desa |
| Batas wilayah desa tidak tersedia/tidak akurat | Peta choropleth tidak bisa dibuat | Fallback ke titik koordinat pusat desa pada MVP |

---

## 15. Rencana Rilis (Roadmap)

### Fase 0: Konsep Lomba (jangka sangat pendek)
Mengingat batas pendaftaran Lomba Desa Digital **30 November 2026**, prioritaskan:
- Proposal dan PRD ini.
- Prototipe/mockup klik (Figma) untuk alur 1-3.
- Video demo singkat.
- Bila memungkinkan, MVP ringan (dashboard, catat produksi, lapor kejadian, peta potensi dengan data contoh).

### Fase 1: MVP (± 6-8 minggu setelah pendaftaran)
Seluruh fitur Must (Bagian 7), pilot minimal 3 desa dengan akun login tiap desa.

### Fase 2: Penyempurnaan (± 2-3 bulan)
Fitur Should: notifikasi, laporan PDF, status pesanan, ringkasan cadangan, indikator kelengkapan data (F7), verifikasi data (F8), dan tombol kerja sama antar-desa (F9).

### Fase 3: Ekspansi (± 6-12 bulan)
Fitur Could: pencocokan surplus-defisit (F10), perbandingan antar-desa (F11), rekap kabupaten dan integrasi FSVA/IDM (F12), AI diagnosis hama/penyakit, prediksi risiko, pembayaran digital, integrasi bot WhatsApp, rekap kabupaten, perluasan ke banyak desa.

---

## 16. Rencana Pengujian

| Jenis | Cakupan |
|---|---|
| Uji fungsional | Seluruh user story Must |
| Uji offline | Input tanpa sinyal, sinkronisasi, penanganan konflik |
| Uji kegunaan | 5-10 petani nyata, ukur waktu dan hambatan menyelesaikan tugas |
| Uji perangkat | Android 8-14, RAM 2-4 GB |
| Uji keamanan | Hak akses antar peran, perlindungan data, admin desa tidak dapat mengubah data desa lain |
| Uji peta dan pencarian | Akurasi layer, filter, radius, visibilitas data sesuai pengaturan, kinerja pada banyak desa |
| Uji penerimaan (UAT) | Admin desa dan pengurus BUMDes di desa pilot |

---

## 17. Pertanyaan Terbuka

1. Desa pilot mana yang akan dipakai (minimal 3, sebaiknya berdekatan dan beda subsektor)?
2. Komoditas utama apa yang menjadi fokus awal (padi, jagung, hortikultura)?
3. Apakah pembayaran in-app diperlukan pada fase awal atau cukup via WhatsApp?
4. Siapa yang bertanggung jawab memperbarui harga pasar (admin desa, BUMDes, atau integrasi otomatis)?
5. Apakah aplikasi akan dikembangkan sebagai PWA atau aplikasi native?
6. Bagaimana model keberlanjutan biaya (dana desa, BUMDes, kemitraan pemerintah daerah)?
7. Siapa yang memverifikasi data potensi (penyuluh, kecamatan, dinas)?
8. Apakah data batas wilayah desa (poligon) tersedia dan boleh dipakai?
9. Bagaimana prosedur verifikasi pembuatan akun desa (surat tugas, tanda tangan kepala desa)?
10. Subsektor mana yang diprioritaskan pada pilot jika waktu terbatas?

---

## 18. Lampiran: Glosarium

| Istilah | Arti |
|---|---|
| BUMDes | Badan Usaha Milik Desa |
| PPL | Penyuluh Pertanian Lapangan |
| IDM | Indeks Desa Membangun |
| FSVA | Peta Ketahanan dan Kerentanan Pangan |
| Bapanas | Badan Pangan Nasional |
| PWA | Progressive Web App |
| MVP | Minimum Viable Product |
| OTP | One-Time Password |
| Subsektor | Pertanian, peternakan, perikanan |
| Choropleth | Peta yang wilayahnya diwarnai sesuai nilai indikator |
| GeoJSON | Format data geografis (titik, garis, poligon) |
| PostGIS | Ekstensi PostgreSQL untuk data geospasial |
| KWT | Kelompok Wanita Tani |
| Poktan / Pokdakan | Kelompok Tani / Kelompok Pembudidaya Ikan |
| KKP | Kementerian Kelautan dan Perikanan |
| Layer | Lapisan data yang dapat ditampilkan/disembunyikan di peta |
