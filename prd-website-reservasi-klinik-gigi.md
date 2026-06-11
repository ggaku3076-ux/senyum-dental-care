# prd website reservasi klinik gigi

## 1. ringkasan produk

produk ini adalah website 1 halaman untuk klinik gigi lokal kecil-menengah yang bertujuan membantu calon pasien memahami layanan klinik, membangun kepercayaan, melihat lokasi/jadwal, lalu melakukan reservasi melalui whatsapp.

website ini bukan sistem klinik lengkap. versi awal difokuskan sebagai halaman profil, informasi layanan, dan pengarah booking pasien.

## 2. latar belakang masalah

banyak klinik gigi lokal sudah punya instagram dan google maps, tetapi informasi penting masih tersebar. calon pasien sering harus bertanya ulang melalui whatsapp untuk hal dasar seperti harga, layanan, jadwal dokter, lokasi, dan cara booking.

masalah utama yang ingin diselesaikan:

- calon pasien sulit memahami layanan klinik dengan cepat
- admin sering menjawab pertanyaan berulang
- instagram tidak selalu cukup untuk menjelaskan layanan detail
- calon pasien butuh trust tinggi sebelum memilih dokter gigi
- klinik belum punya halaman profesional yang bisa dibagikan di bio, google maps, dan iklan
- proses booking masih terlalu bergantung pada chat manual tanpa alur yang jelas

## 3. target pengguna

### pengguna utama

calon pasien klinik gigi, terutama:

- orang yang mencari scaling, tambal gigi, cabut gigi, behel, bleaching, veneer, atau implan
- orang yang mencari klinik gigi terdekat
- orang yang ingin tahu harga mulai sebelum bertanya ke admin
- orang yang ingin booking jadwal melalui whatsapp

### pengguna bisnis

pemilik klinik, dokter gigi, atau admin klinik yang ingin:

- meningkatkan kepercayaan calon pasien
- mengurangi pertanyaan berulang di whatsapp
- menampilkan layanan secara lebih rapi
- membuat proses reservasi lebih mudah
- terlihat lebih profesional dibanding kompetitor lokal

## 4. tujuan produk

website harus membantu klinik mendapatkan lebih banyak chat/reservasi berkualitas dari calon pasien.

indikator keberhasilan:

- calon pasien bisa memahami layanan utama dalam kurang dari 60 detik
- tombol whatsapp mudah ditemukan di semua bagian penting
- informasi harga mulai, lokasi, jadwal, dan layanan terlihat jelas
- admin menerima pertanyaan yang lebih siap, bukan pertanyaan dasar berulang
- website bisa dipasang di link bio instagram, google maps, dan materi promosi

## 5. positioning produk

nama penawaran:

```text
website reservasi pasien untuk klinik gigi
```

bukan dijual sebagai:

```text
jasa website biasa
```

nilai utama:

```text
membantu calon pasien cepat percaya, paham layanan, dan langsung booking melalui whatsapp.
```

## 6. ruang lingkup mvp

### termasuk dalam mvp

- website 1 halaman responsive
- hero section dengan headline, subheadline, dan tombol booking whatsapp
- daftar layanan klinik
- harga mulai dari atau estimasi harga
- profil dokter / tim klinik
- jadwal praktik
- foto klinik
- testimoni pasien
- lokasi google maps
- faq
- tombol whatsapp sticky
- form sederhana opsional menggunakan google form, tally, atau formspree
- deploy online
- basic seo lokal

### tidak termasuk dalam mvp

- login admin
- database pasien
- dashboard klinik
- sistem rekam medis
- payment gateway
- sistem antrian otomatis
- integrasi bpjs
- multi-role user
- aplikasi mobile
- booking calendar otomatis kompleks

## 7. fitur utama

### 7.1 hero section

fungsi:

- langsung menjelaskan klinik, lokasi, dan manfaat utama
- mengarahkan pengguna ke booking whatsapp

konten wajib:

- headline
- subheadline
- rating/testimoni singkat jika ada
- tombol utama: booking via whatsapp
- tombol kedua: lihat layanan
- foto dokter/klinik

contoh copy:

```text
klinik gigi terpercaya di [nama kota]
perawatan gigi nyaman untuk scaling, tambal, cabut, behel, bleaching, dan konsultasi dokter gigi.
```

### 7.2 layanan klinik

fungsi:

- membantu calon pasien memilih layanan yang sesuai
- mengurangi pertanyaan dasar ke admin

layanan awal:

- konsultasi dokter gigi
- scaling / pembersihan karang gigi
- tambal gigi
- cabut gigi
- behel
- bleaching / whitening
- veneer
- implan gigi
- perawatan gigi anak

setiap layanan berisi:

- nama layanan
- manfaat singkat
- estimasi durasi jika ada
- harga mulai dari jika boleh ditampilkan
- tombol tanya layanan via whatsapp

### 7.3 harga mulai dari

fungsi:

- memberi gambaran biaya tanpa harus menampilkan harga final yang terlalu mengikat

format aman:

```text
scaling mulai dari rpxxx.xxx
behel mulai dari rp x.xxx.xxx
konsultasi mulai dari rp xx.xxx
```

catatan:

harga final tetap dikonfirmasi setelah pemeriksaan dokter.

### 7.4 profil dokter

fungsi:

- membangun trust
- menunjukkan bahwa klinik ditangani profesional

konten:

- nama dokter
- foto
- spesialisasi/keahlian
- jadwal praktik
- pengalaman singkat

### 7.5 jadwal praktik

fungsi:

- membantu calon pasien tahu kapan bisa datang

konten:

- hari
- jam buka
- jadwal dokter jika tersedia
- catatan booking dulu sebelum datang

### 7.6 testimoni pasien

fungsi:

- meningkatkan kepercayaan calon pasien

konten:

- 3 sampai 6 testimoni
- nama/inisial pasien
- layanan yang diambil
- screenshot opsional jika diizinkan

### 7.7 lokasi dan kontak

fungsi:

- membuat calon pasien yakin kliniknya nyata dan mudah ditemukan

konten:

- alamat lengkap
- google maps embed
- nomor whatsapp
- jam operasional
- link instagram

### 7.8 faq

fungsi:

- mengurangi pertanyaan berulang

pertanyaan awal:

- apakah harus booking dulu?
- apakah bisa konsultasi dulu?
- berapa harga scaling?
- apakah bisa untuk anak-anak?
- apakah sakit saat perawatan?
- metode pembayaran apa saja?
- apakah tersedia promo?

### 7.9 tombol whatsapp sticky

fungsi:

- menjaga aksi utama selalu terlihat

perilaku:

- muncul di mobile dan desktop
- teks tombol jelas: booking sekarang
- link membuka whatsapp dengan template pesan otomatis

contoh template pesan:

```text
halo admin, saya ingin booking konsultasi/perawatan gigi. boleh dibantu info jadwal yang tersedia?
```

## 8. alur pengguna

### flow utama calon pasien

1. calon pasien membuka website dari instagram, google maps, atau link promosi
2. pengguna melihat headline, lokasi, dan tombol booking
3. pengguna scroll ke layanan
4. pengguna membaca harga mulai dan faq
5. pengguna melihat testimoni dan foto klinik
6. pengguna klik tombol whatsapp
7. whatsapp terbuka dengan pesan template
8. admin melanjutkan percakapan dan menentukan jadwal

### flow cepat

1. pengguna masuk website
2. klik tombol booking whatsapp di hero
3. langsung chat admin

## 9. kebutuhan konten dari klien

klien perlu menyediakan:

- nama klinik
- alamat lengkap
- nomor whatsapp
- jam operasional
- daftar layanan
- harga mulai dari, jika boleh ditampilkan
- foto klinik
- foto dokter/tim
- testimoni pasien
- link instagram
- link google maps
- promo aktif jika ada

jika klien belum punya konten lengkap, versi awal bisa memakai placeholder yang nanti diganti sebelum final.

## 10. design direction

arah visual:

- bersih
- modern
- profesional
- ramah
- tidak terlalu kaku seperti rumah sakit besar
- fokus pada trust dan kenyamanan pasien

warna yang direkomendasikan:

- putih sebagai dasar
- biru muda atau hijau mint untuk rasa bersih dan medis
- navy/teal untuk teks penting
- abu lembut untuk background section
- aksen hijau whatsapp untuk cta

font:

- sans-serif modern
- mudah dibaca di mobile
- ukuran teks cukup besar untuk pengguna umum

style komponen:

- card layanan dengan icon sederhana
- tombol besar dan jelas
- section spacing lega
- foto dengan sudut rounded
- badge trust seperti rating, dokter berpengalaman, lokasi strategis

## 11. kebutuhan teknis

stack rekomendasi untuk mvp:

- html
- css
- javascript sederhana
- google maps embed
- whatsapp deep link
- google form / tally / formspree opsional
- deploy ke netlify, vercel, atau cloudflare pages

alasan:

- tidak membutuhkan backend kompleks
- cepat dibuat
- mudah dimaintain
- cocok untuk skill tahap awal
- risiko project kecil

## 12. kebutuhan non-fungsional

website harus:

- mobile-first
- loading cepat
- mudah dibuka di jaringan seluler
- tombol whatsapp bekerja
- layout tidak pecah di layar kecil
- seo dasar tersedia
- metadata share whatsapp bagus
- mudah diedit kontennya

minimal performa:

- halaman utama terasa ringan
- gambar dikompres
- tidak memakai library berat jika tidak perlu

## 13. seo lokal

keyword utama:

- klinik gigi [kota]
- dokter gigi [kota]
- scaling gigi [kota]
- behel gigi [kota]
- tambal gigi [kota]
- cabut gigi [kota]

seo dasar:

- title mengandung klinik gigi + kota
- meta description jelas
- heading h1 hanya satu
- alt text pada gambar
- alamat dan jam buka terlihat
- link ke google maps

contoh title:

```text
klinik gigi [nama klinik] di [kota] | booking dokter gigi via whatsapp
```

contoh meta description:

```text
booking perawatan gigi di [nama klinik], [kota]. tersedia scaling, tambal gigi, cabut gigi, behel, bleaching, dan konsultasi dokter gigi.
```

## 14. metrik keberhasilan

metrik utama:

- jumlah klik tombol whatsapp
- jumlah chat masuk dari website
- jumlah booking dari website
- pertanyaan berulang yang berkurang

metrik tambahan:

- jumlah pengunjung website
- sumber traffic
- section yang paling sering diklik
- conversion rate dari pengunjung ke chat whatsapp

## 15. acceptance criteria

website dianggap selesai jika:

- semua section mvp tersedia
- responsive di mobile dan desktop
- tombol whatsapp membuka chat dengan template pesan
- google maps tampil benar
- informasi layanan, jadwal, lokasi, dan kontak tersedia
- gambar sudah terkompres dan tidak membuat loading berat
- metadata title dan description sudah diisi
- link deploy bisa dibuka publik
- tidak ada section kosong/placeholder di versi final

## 16. risiko dan mitigasi

### risiko: klien minta sistem booking otomatis

mitigasi:

jelaskan bahwa mvp adalah website reservasi via whatsapp. sistem booking otomatis bisa menjadi fase 2.

### risiko: klien belum punya foto bagus

mitigasi:

gunakan layout yang tetap rapi dengan foto seadanya, lalu sarankan pengambilan foto klinik sederhana.

### risiko: harga layanan berubah-ubah

mitigasi:

gunakan format harga mulai dari dan tambahkan catatan bahwa harga final mengikuti pemeriksaan dokter.

### risiko: scope melebar

mitigasi:

kontrak awal harus membatasi fitur. semua fitur di luar mvp masuk revisi tambahan atau fase 2.

## 17. paket penawaran awal

nama paket:

```text
paket website reservasi klinik gigi
```

isi paket:

- website 1 halaman
- mobile responsive
- copywriting dasar
- desain profesional
- integrasi whatsapp
- google maps
- faq
- deploy online
- 1 kali revisi besar
- 2 kali revisi kecil

harga awal yang disarankan:

```text
rp499.000 - rp799.000
```

untuk klien pertama:

```text
dp rp150.000 - rp250.000
pelunasan setelah preview final disetujui
```

## 18. fase pengembangan berikutnya

fase 2 opsional:

- form booking lebih lengkap
- halaman layanan detail
- blog edukasi gigi untuk seo
- tracking klik whatsapp
- integrasi google analytics
- halaman promo
- multi-page website

fase 3 opsional:

- dashboard admin
- database pasien ringan
- sistem jadwal otomatis
- reminder whatsapp/email
- payment gateway

## 19. timeline pengerjaan mvp

estimasi realistis:

### hari 1

- kumpulkan data klien
- susun copywriting
- buat struktur section
- pilih visual direction

### hari 2

- buat desain dan layout frontend
- masukkan konten utama
- integrasi whatsapp dan maps

### hari 3

- responsive check
- optimasi gambar
- testing tombol
- deploy
- kirim preview ke klien

## 20. pertanyaan klarifikasi untuk klien

sebelum mulai, tanyakan:

- nama klinik apa?
- lokasinya di kota mana?
- layanan utama apa saja?
- layanan paling ingin dipromosikan apa?
- nomor whatsapp booking berapa?
- apakah harga boleh ditampilkan?
- ada jadwal dokter tetap?
- ada foto klinik dan dokter?
- ada testimoni pasien?
- ada promo bulan ini?
- ingin gaya visual clean medis, premium, atau ramah keluarga?

## 21. definisi versi sukses

versi pertama sukses jika website bisa menjawab 4 hal utama calon pasien:

```text
klinik ini melayani apa?
apakah terlihat terpercaya?
lokasinya di mana?
bagaimana cara booking?
```

jika 4 hal ini jelas, website sudah layak dipakai untuk penawaran pertama ke klinik gigi lokal.
