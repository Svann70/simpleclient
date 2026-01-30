# LAPORAN PROJECT PHYSILEARN
## Platform Belajar Fisika Interaktif

**Dibuat oleh:** [Nama Siswa]  
**Kelas:** [Kelas]  
**Sekolah:** SMAN 4 Depok  
**Tahun:** 2026

---

# DAFTAR ISI

1. [BAB 1: PENDAHULUAN](#bab-1-pendahuluan)
2. [BAB 2: PERANCANGAN PROGRAM](#bab-2-perancangan-program)
3. [BAB 3: IMPLEMENTASI PENGEMBANGAN PROGRAM](#bab-3-implementasi-pengembangan-program)
4. [BAB 4: KESIMPULAN DAN SARAN](#bab-4-kesimpulan-dan-saran)
5. [BAB 5: PENUTUP](#bab-5-penutup)
6. [DAFTAR PUSTAKA](#daftar-pustaka)
7. [LAMPIRAN](#lampiran)

---

# BAB 1: PENDAHULUAN

## 1.1 Latar Belakang Masalah

Fisika merupakan salah satu mata pelajaran yang sering dianggap sulit oleh banyak siswa. Rumus-rumus yang banyak, konsep yang abstrak, dan cara penyampaian yang kurang menarik sering membuat siswa kehilangan minat untuk belajar fisika.

Di era digital seperti sekarang, hampir semua siswa memiliki akses ke handphone atau komputer. Sayangnya, perangkat ini lebih sering digunakan untuk bermain game atau sosial media daripada untuk belajar. Padahal, teknologi bisa dimanfaatkan untuk membuat proses belajar menjadi lebih menyenangkan.

Melihat kondisi ini, muncul ide untuk membuat sebuah website pembelajaran fisika yang interaktif dan menarik. Website ini diberi nama "PhysiLearn" yang merupakan gabungan dari kata "Physics" (Fisika) dan "Learn" (Belajar). Diharapkan dengan tampilan yang menarik dan cara penyampaian yang tidak membosankan, siswa bisa lebih semangat dalam mempelajari fisika.

## 1.2 Rumusan Masalah

Berdasarkan latar belakang di atas, rumusan masalah yang dapat diambil adalah:

1. Bagaimana cara membuat website pembelajaran fisika yang menarik dan mudah digunakan?
2. Bagaimana cara menyajikan materi fisika agar tidak membosankan?
3. Bagaimana cara menguji pemahaman siswa melalui quiz interaktif?

## 1.3 Analisis Calon Pengguna

Website PhysiLearn ini ditujukan untuk:

| Pengguna | Kebutuhan |
|----------|-----------|
| Siswa SMP/SMA | Belajar materi fisika dasar dengan cara yang menyenangkan |
| Guru Fisika | Sebagai media bantu dalam mengajar |
| Siapa saja | Yang ingin belajar fisika dari dasar |

Karakteristik pengguna:
- Berusia 12-18 tahun (mayoritas)
- Sudah terbiasa menggunakan handphone/komputer
- Menyukai tampilan yang colorful dan tidak membosankan
- Lebih suka belajar dengan cara yang interaktif

## 1.4 Batasan Masalah

Agar project ini tidak terlalu luas, maka dibuat batasan sebagai berikut:

1. Materi yang disediakan hanya 3 topik: Gerak Lurus, Hukum Newton, dan Usaha & Energi
2. Quiz berisi 5 soal pilihan ganda per topik
3. Website tidak memerlukan login atau daftar akun
4. Website bisa diakses secara offline (tanpa internet) setelah dibuka pertama kali
5. Tidak ada fitur untuk menyimpan nilai atau progress belajar

## 1.5 Tujuan Pembangunan Aplikasi

Tujuan dibuatnya PhysiLearn adalah:

1. **Tujuan Utama:** Membuat website pembelajaran fisika yang interaktif dan menyenangkan
2. **Tujuan Khusus:**
   - Menyediakan materi fisika yang mudah dipahami
   - Menyediakan quiz untuk menguji pemahaman
   - Membuat tampilan yang menarik agar siswa tidak bosan
   - Memberikan pengalaman belajar yang berbeda dari buku biasa

## 1.6 Manfaat

Manfaat dari project PhysiLearn:

**Bagi Siswa:**
- Bisa belajar fisika kapan saja dan di mana saja
- Materi disajikan dengan cara yang tidak membosankan
- Ada quiz untuk mengecek apakah sudah paham atau belum
- Gratis dan mudah diakses

**Bagi Guru:**
- Bisa dijadikan referensi media pembelajaran
- Membantu menjelaskan konsep fisika dengan cara yang berbeda

**Bagi Pembuat:**
- Menambah pengalaman dalam membuat website
- Belajar mengaplikasikan ilmu pemrograman untuk hal yang bermanfaat

## 1.7 Definisi Operasional

Beberapa istilah yang digunakan dalam laporan ini:

| Istilah | Penjelasan |
|---------|------------|
| Website | Halaman yang bisa diakses melalui browser (Chrome, Firefox, dll) |
| HTML | Bahasa untuk membuat struktur halaman website |
| CSS | Bahasa untuk mempercantik tampilan website |
| JavaScript | Bahasa untuk membuat website bisa berinteraksi dengan pengguna |
| Quiz | Kumpulan soal untuk menguji pemahaman |
| Interaktif | Bisa saling berinteraksi, tidak hanya membaca |
| Responsive | Tampilan yang bisa menyesuaikan dengan ukuran layar |

---

# BAB 2: PERANCANGAN PROGRAM

## 2.1 Flowchart/Pseudocode

### Alur Penggunaan Website

```
                            MULAI
                              │
                              ▼
                    ┌─────────────────┐
                    │  Halaman Utama  │
                    │   (index.html)  │
                    └────────┬────────┘
                             │
                    ┌────────┴────────┐
                    │                 │
                    ▼                 ▼
              ┌───────────┐     ┌───────────┐
              │  Materi   │     │   Quiz    │
              │  Belajar  │     │ Langsung  │
              └─────┬─────┘     └─────┬─────┘
                    │                 │
                    ▼                 │
              ┌───────────┐           │
              │  Pilih    │           │
              │  Topik    │           │
              └─────┬─────┘           │
                    │                 │
        ┌───────────┼───────────┐     │
        │           │           │     │
        ▼           ▼           ▼     │
    ┌───────┐   ┌───────┐   ┌───────┐ │
    │ Gerak │   │Newton │   │Energi │ │
    │ Lurus │──▶│       │──▶│       │ │
    └───────┘   └───────┘   └───┬───┘ │
                                │     │
                                ▼     │
                          ┌───────────┘
                          │
                          ▼
                    ┌───────────┐
                    │   Quiz    │
                    │  Mulai    │
                    └─────┬─────┘
                          │
                          ▼
                    ┌───────────┐
                    │ Kerjakan  │
                    │ 5 Soal    │
                    └─────┬─────┘
                          │
                          ▼
                    ┌───────────┐
                    │  Lihat    │
                    │  Hasil    │
                    └─────┬─────┘
                          │
                    ┌─────┴─────┐
                    │           │
                    ▼           ▼
              ┌─────────┐ ┌─────────┐
              │  Ulang  │ │ Kembali │
              │  Quiz   │ │ ke Menu │
              └─────────┘ └─────────┘
```

### Penjelasan Alur:

1. **Dari Halaman Utama**, pengguna bisa memilih:
   - "Mulai Belajar" → masuk ke daftar materi
   - "Tantangan Quiz" → langsung ke quiz

2. **Jika memilih Materi:**
   - Pilih salah satu topik (Gerak Lurus / Newton / Energi)
   - Baca materi, ada tombol "Selanjutnya" untuk ke materi berikut
   - Di materi terakhir (Energi), ada tombol "Mulai Quiz"

3. **Di halaman Quiz:**
   - Kerjakan 5 soal pilihan ganda
   - Lihat hasil dan review jawaban
   - Bisa ulang quiz atau kembali ke menu

## 2.2 Proses Bisnis (Business Process)

PhysiLearn memiliki 2 fitur utama:

### A. Fitur Belajar Materi
1. Pengguna memilih menu "Mulai Belajar"
2. Pengguna memilih topik yang ingin dipelajari
3. Sistem menampilkan materi lengkap dengan rumus dan contoh soal
4. Pengguna bisa berpindah ke materi lain atau kembali ke menu

### B. Fitur Quiz
1. Pengguna memilih menu "Tantangan Quiz"
2. Pengguna membaca aturan dan memulai quiz
3. Sistem menampilkan soal satu per satu
4. Pengguna menjawab semua soal
5. Sistem menghitung skor dan menampilkan hasil
6. Pengguna bisa melihat jawaban yang benar dan salah

## 2.3 Daftar Fitur

| No | Fitur | Keterangan |
|----|-------|------------|
| 1 | Halaman Utama | Tampilan awal dengan mascot PhysiBot dan menu navigasi |
| 2 | Materi Gerak Lurus | Penjelasan tentang GLB dan GLBB beserta rumus |
| 3 | Materi Hukum Newton | Penjelasan Hukum I, II, III Newton |
| 4 | Materi Usaha & Energi | Penjelasan tentang usaha, energi kinetik, dan potensial |
| 5 | Quiz Interaktif | 5 soal pilihan ganda dengan feedback langsung |
| 6 | Hasil Quiz | Menampilkan skor dan review jawaban |
| 7 | Mascot Interaktif | Karakter PhysiBot yang matanya mengikuti kursor |
| 8 | Responsive Design | Tampilan menyesuaikan di HP maupun komputer |

## 2.4 Perancangan Antarmuka (UI/UX Design)

### Konsep Desain

PhysiLearn menggunakan konsep desain yang terinspirasi dari aplikasi belajar bahasa "Duolingo". Alasan pemilihan konsep ini:

1. **Warna-warna cerah** - Membuat tampilan tidak membosankan
2. **Karakter mascot** - Membuat website terasa lebih "hidup" dan friendly
3. **Tombol yang jelas** - Pengguna tidak bingung harus klik apa
4. **Animasi halus** - Memberikan kesan modern dan profesional

### Palet Warna

| Warna | Kode | Penggunaan |
|-------|------|------------|
| Hijau | #58cc02 | Tombol utama, jawaban benar |
| Biru | #1cb0f6 | Aksen, quiz |
| Kuning | #ffc800 | Highlight, badge |
| Merah | #ff4b4b | Jawaban salah |
| Biru Tua | #235390 | Background |

### Struktur Halaman

```
┌─────────────────────────────────────┐
│           HALAMAN UTAMA             │
├─────────────────────────────────────┤
│         [Mascot PhysiBot]           │
│           "PhysiLearn"              │
│     Belajar Fisika Jadi Seru!       │
├─────────────────────────────────────┤
│  📚 3 Materi  │  🎯 5 Quiz  │ ⭐ Fun │
├─────────────────────────────────────┤
│    ┌─────────────────────────┐      │
│    │     Mulai Belajar       │      │
│    └─────────────────────────┘      │
│    ┌─────────────────────────┐      │
│    │    Tantangan Quiz       │      │
│    └─────────────────────────┘      │
├─────────────────────────────────────┤
│          Fun Fact Box               │
├─────────────────────────────────────┤
│            Footer                   │
└─────────────────────────────────────┘
```

## 2.5 Perancangan Basis Data (Database)

PhysiLearn **tidak menggunakan database** karena:

1. Website ini bersifat statis (tidak menyimpan data pengguna)
2. Semua materi dan soal quiz sudah ditulis langsung di dalam kode
3. Tidak ada fitur login atau registrasi
4. Lebih sederhana dan mudah dikelola

Data yang tersimpan di dalam kode:
- Konten materi pembelajaran
- Soal-soal quiz beserta jawaban yang benar
- Penjelasan untuk setiap jawaban

---

# BAB 3: IMPLEMENTASI PENGEMBANGAN PROGRAM

## 3.1 Implementasi Antarmuka

### Struktur File Project

```
PhysiLearn/
│
├── index.html          → Halaman utama
├── style.css           → File untuk tampilan/desain
├── quiz-script.js      → Kode untuk fitur quiz
│
├── materi.html         → Daftar pilihan materi
├── materi-gerak.html   → Materi Gerak Lurus
├── materi-newton.html  → Materi Hukum Newton
├── materi-energi.html  → Materi Usaha & Energi
│
├── quiz.html           → Halaman awal quiz
└── quiz1.html          → Halaman mengerjakan quiz
```

### Penjelasan Setiap Halaman

**1. Halaman Utama (index.html)**
- Menampilkan mascot PhysiBot yang interaktif
- Terdapat 2 tombol utama: Belajar dan Quiz
- Ada statistik singkat tentang konten website
- Menampilkan fun fact tentang fisika

**2. Halaman Materi (materi.html)**
- Menampilkan 3 pilihan topik materi
- Setiap topik memiliki icon dan deskripsi singkat
- Desain card yang bisa diklik

**3. Halaman Materi Detail (materi-gerak.html, dll)**
- Header dengan icon topik
- Penjelasan konsep dalam box-box terpisah
- Rumus ditampilkan dalam kotak berwarna
- Contoh soal dengan langkah penyelesaian
- Tombol navigasi ke materi sebelum/sesudah

**4. Halaman Quiz (quiz.html & quiz1.html)**
- Menampilkan aturan main sebelum mulai
- Progress bar yang menunjukkan sudah soal ke berapa
- Pilihan jawaban yang bisa diklik
- Hasil skor di akhir quiz
- Review jawaban benar dan salah

### Teknologi yang Digunakan

| Teknologi | Fungsi | Contoh Penggunaan |
|-----------|--------|-------------------|
| HTML | Membuat struktur halaman | Membuat tombol, teks, gambar |
| CSS | Mempercantik tampilan | Memberi warna, animasi, layout |
| JavaScript | Membuat interaksi | Mata mascot mengikuti kursor, quiz |
| SVG | Membuat icon | Icon buku, target, petir |
| Google Fonts | Menggunakan font khusus | Font "Nunito" |

## 3.2 Implementasi Database

Seperti yang sudah dijelaskan sebelumnya, PhysiLearn tidak menggunakan database. Semua data tersimpan langsung di dalam file HTML dan JavaScript.

**Contoh penyimpanan soal quiz di quiz-script.js:**

```
Soal 1: "Apa rumus GLB?"
Pilihan: A, B, C, D
Jawaban Benar: B
Penjelasan: "GLB menggunakan rumus s = v × t karena..."
```

## 3.3 Pengujian

### Pengujian Fungsional

| No | Yang Diuji | Hasil |
|----|------------|-------|
| 1 | Tombol "Mulai Belajar" bisa diklik | ✓ Berhasil |
| 2 | Tombol "Tantangan Quiz" bisa diklik | ✓ Berhasil |
| 3 | Halaman materi bisa dibuka | ✓ Berhasil |
| 4 | Navigasi antar materi berfungsi | ✓ Berhasil |
| 5 | Quiz bisa dikerjakan | ✓ Berhasil |
| 6 | Skor dihitung dengan benar | ✓ Berhasil |
| 7 | Review jawaban muncul | ✓ Berhasil |
| 8 | Mata mascot mengikuti kursor | ✓ Berhasil |
| 9 | Animasi berjalan lancar | ✓ Berhasil |
| 10 | Tombol kembali berfungsi | ✓ Berhasil |

### Pengujian Tampilan

| No | Perangkat | Hasil |
|----|-----------|-------|
| 1 | Laptop/PC | ✓ Tampilan bagus |
| 2 | Tablet | ✓ Tampilan menyesuaikan |
| 3 | Handphone | ✓ Tampilan menyesuaikan |

### Pengujian Browser

| No | Browser | Hasil |
|----|---------|-------|
| 1 | Google Chrome | ✓ Normal |
| 2 | Mozilla Firefox | ✓ Normal |
| 3 | Microsoft Edge | ✓ Normal |
| 4 | Safari | ✓ Normal |

---

# BAB 4: KESIMPULAN DAN SARAN

## 4.1 Kesimpulan

Berdasarkan pembuatan project PhysiLearn ini, dapat diambil kesimpulan sebagai berikut:

1. **Website pembelajaran fisika yang interaktif berhasil dibuat** dengan menggunakan HTML, CSS, dan JavaScript. Website ini memiliki tampilan yang menarik dan mudah digunakan.

2. **Materi fisika berhasil disajikan dengan cara yang tidak membosankan** melalui penggunaan warna-warna cerah, icon-icon menarik, dan pembagian materi dalam box-box yang rapi.

3. **Fitur quiz interaktif berhasil dibuat** dimana pengguna bisa langsung mengerjakan soal, melihat skor, dan mereview jawaban mana yang benar dan salah.

4. **Penggunaan mascot PhysiBot** memberikan kesan yang friendly dan membuat website terasa lebih "hidup". Fitur mata yang mengikuti kursor menambah kesan interaktif.

5. **Website bersifat responsive** sehingga bisa diakses dengan baik di berbagai perangkat, baik komputer maupun handphone.

## 4.2 Saran

Untuk pengembangan lebih lanjut, berikut beberapa saran yang bisa dilakukan:

1. **Menambah lebih banyak materi** - Saat ini baru ada 3 topik, bisa ditambah dengan topik fisika lainnya seperti Gelombang, Listrik, atau Optik.

2. **Menambah jumlah soal quiz** - Soal bisa dibuat lebih banyak dan diacak agar pengguna tidak hafal jawabannya.

3. **Menambah fitur simpan progress** - Agar pengguna bisa melanjutkan belajar di lain waktu tanpa harus mengulang dari awal.

4. **Menambah fitur leaderboard** - Agar ada unsur kompetisi antar pengguna.

5. **Menambah animasi pembelajaran** - Seperti animasi benda bergerak untuk materi Gerak Lurus, agar lebih mudah dipahami.

6. **Membuat versi aplikasi mobile** - Agar lebih mudah diakses dan bisa digunakan tanpa browser.

---

# BAB 5: PENUTUP

## 5.1 Penutup

Puji syukur kepada Tuhan Yang Maha Esa atas terselesaikannya project PhysiLearn ini. Project ini dibuat dengan harapan bisa membantu teman-teman dalam belajar fisika dengan cara yang lebih menyenangkan.

Tentu saja project ini masih jauh dari sempurna. Masih banyak kekurangan dan hal-hal yang bisa diperbaiki. Kritik dan saran yang membangun sangat diharapkan untuk pengembangan project ini ke depannya.

Terima kasih kepada semua pihak yang telah membantu dalam pembuatan project ini, terutama:
- Guru pembimbing yang telah memberikan arahan
- Teman-teman yang telah membantu testing
- Keluarga yang selalu memberikan dukungan

Semoga project PhysiLearn ini bisa bermanfaat bagi siapa saja yang menggunakannya.

---

# DAFTAR PUSTAKA

1. Kanginan, Marthen. (2016). *Fisika untuk SMA/MA Kelas X*. Jakarta: Erlangga.

2. Giancoli, Douglas C. (2014). *Physics: Principles with Applications*. Pearson.

3. W3Schools. (2024). *HTML, CSS, JavaScript Tutorial*. https://www.w3schools.com

4. MDN Web Docs. (2024). *Web Development Documentation*. https://developer.mozilla.org

5. Duolingo. (2024). *Design Inspiration*. https://www.duolingo.com

---

# LAMPIRAN

## Lampiran 1: Screenshot Tampilan Website

### A. Halaman Utama
```
[Screenshot halaman utama dengan mascot PhysiBot]
```

### B. Halaman Materi
```
[Screenshot daftar pilihan materi]
```

### C. Halaman Materi Detail
```
[Screenshot contoh halaman materi Gerak Lurus]
```

### D. Halaman Quiz
```
[Screenshot halaman quiz]
```

### E. Halaman Hasil Quiz
```
[Screenshot hasil quiz dengan review jawaban]
```

## Lampiran 2: Cara Menjalankan Website

1. **Buka folder project** yang berisi file-file PhysiLearn

2. **Klik dua kali file `index.html`** - Website akan terbuka di browser

3. **Atau bisa juga dengan cara:**
   - Klik kanan pada file `index.html`
   - Pilih "Open with"
   - Pilih browser yang diinginkan (Chrome, Firefox, dll)

4. **Website siap digunakan!**

## Lampiran 3: Kode Program

### File HTML Utama (index.html)
```
[Lihat file index.html di folder project]
```

### File CSS (style.css)
```
[Lihat file style.css di folder project]
```

### File JavaScript Quiz (quiz-script.js)
```
[Lihat file quiz-script.js di folder project]
```

---

**Catatan:** 
- Screenshot bisa ditambahkan dengan cara print screen halaman website
- Kode program lengkap bisa dilihat langsung di file masing-masing
- Untuk mencetak laporan ini, simpan sebagai PDF

---

*Dokumen ini dibuat untuk project mata pelajaran Informatika*  
*SMAN 4 Depok - 2026*
