# ZanVector — Website Statis

Situs statis polos (HTML/CSS/JS, tanpa framework/build step) untuk brand **ZanVector**.

## Struktur

```
/
├── index.html                      → Home
├── portfolio/index.html            → /portfolio
├── services/index.html             → /services
├── custom-vector-illustration/     → /custom-vector-illustration
├── css/style.css                   → semua styling
├── js/main.js                      → toggle menu mobile
└── js/portfolio-data.js            → data karya (edit di sini)
```

## Ganti Portofolio Kamu

Buka `js/portfolio-data.js`. Setiap item punya `title`, `tag`, dan `svg`
(placeholder line-art). Untuk karya asli:

- Ganti `svg: '...'` dengan `img: '/assets/nama-file.png'`, lalu taruh
  file gambar di folder `assets/` (buat folder ini), dan ubah fungsi
  `renderCard()` di file yang sama supaya menampilkan `<img>` bila field
  `img` ada.
- Batasi 6–12 karya terbaik saja — konsisten dengan rencana awal.

## Coba di Komputer Sendiri

Buka `index.html` langsung di browser, atau jalankan server lokal:

```bash
npx serve .
```

## Deploy ke GitHub Pages

1. Di repo GitHub kamu → **Settings** → **Pages**.
2. Di **Build and deployment** → **Source**, pilih **Deploy from a branch**.
3. Pilih branch `main` (atau branch tempat kode ini berada) dan folder `/root`.
4. **Save**. Tunggu 1–2 menit, GitHub akan kasih URL seperti:
   `https://<username>.github.io/<nama-repo>/`
5. Setiap `git push` ke branch itu, situs otomatis ter-update.

Catatan penting: semua path di HTML sudah diubah jadi **relatif**
(bukan `/css/style.css` tapi `css/style.css`, dst), karena GitHub Pages
untuk project repo menaruh situs di sub-folder `/nama-repo/`, bukan di
root domain seperti Vercel. Kalau kamu copy-paste bagian HTML manapun
ke halaman baru, pastikan path tetap relatif (tanpa `/` di depan), atau
sesuaikan jumlah `../` sesuai kedalaman folder halaman itu.

## Update — Link Marketplace Ditambahkan

Di halaman `/custom-vector-illustration/`, sekarang ada kotak alternatif
"Lebih Nyaman Lewat Marketplace?" berisi link ke:
- Fiverr: `https://www.fiverr.com/dezangamdani_`
- Adobe Stock: `https://stock.adobe.com/id/contributor/212397087/Dezan`

**Cek link Fiverr-nya** — kamu sempat kasih URL `/sellers/dezangamdani_/edit`
yang itu halaman edit privat punyamu sendiri. Saya ganti ke format profil
publik standar (`fiverr.com/dezangamdani_`). Kalau salah, ganti manual di
file tersebut (cari teks "fiverr.com").

## Update — Disesuaikan dengan Insight Pinterest

Berdasarkan data Pinterest Analytics (akun @zanvector), gaya **black and
white line art** terbukti paling banyak menarik tayangan. Perubahan yang
sudah diterapkan:

- Urutan jasa di homepage dan `/services/` diubah: **Line Art** jadi
  nomor 1.
- Meta description & hero copy homepage menyebut "black and white line
  art" secara eksplisit.
- Link Pinterest (`https://id.pinterest.com/ZanDesignz/`) ditambahkan di
  footer semua halaman dan di `sameAs` structured data homepage.
  **Ganti URL ini kalau username Pinterest kamu berbeda.**

Langkah lanjutan yang masih manual (belum otomatis dari sini):
mengganti 8 placeholder di `js/portfolio-data.js` dengan karya line art
dan product illustration asli yang terbukti populer di Pinterest kamu.

## SEO — Sudah Terpasang

Situs live di: **https://dezanhamdani.github.io/zanvector/**

- [x] `<title>` & `<meta name="description">` tiap halaman.
- [x] `robots.txt` di root, mengarah ke sitemap.
- [x] `sitemap.xml` berisi 4 URL halaman.
- [x] `<link rel="canonical">` + Open Graph tags tiap halaman.
- [x] Structured data (schema.org Organization) di homepage.

## Daftarkan ke Google Search Console

1. Buka [search.google.com/search-console](https://search.google.com/search-console).
2. **Add Property** → pilih tipe **URL prefix** → masukkan
   `https://dezanhamdani.github.io/zanvector/`.
3. Verifikasi kepemilikan — cara termudah untuk GitHub Pages: metode
   **HTML tag**, tempel meta tag verifikasi yang diberikan Google ke
   `<head>` tiap halaman (atau cukup di `index.html`), commit, push.
4. Setelah terverifikasi, buka **Sitemaps** di sidebar → submit:
   `sitemap.xml`
5. Pakai **URL Inspection** untuk cek & **Request Indexing** tiap
   halaman utama supaya diproses lebih cepat oleh Google.

## Catatan Teknis

- Mobile-first: breakpoint utama di 640px dan 760px/960px.
- Tanpa dependency eksternal selain Google Fonts (opsional, bisa dihapus
  kalau mau 100% self-contained/offline-ready).
- Form di `/custom-vector-illustration/` masih pakai `mailto:` sederhana.
  Ganti dengan endpoint form service (mis. Formspree) atau backend sendiri
  saat siap menerima order otomatis.
