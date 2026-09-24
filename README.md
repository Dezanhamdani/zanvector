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

## Deploy ke Vercel (gratis, tanpa domain dulu)

1. Push folder ini ke repo GitHub.
2. Buka vercel.com → **Add New Project** → pilih repo ini.
3. Framework preset: pilih **Other** (situs statis polos).
4. Build command: kosongkan. Output directory: kosongkan (root).
5. Deploy → kamu dapat URL `zanvector.vercel.app`.

## Setelah Live — Checklist SEO Dasar

- [ ] Cek `<title>` dan meta description tiap halaman (sudah diisi awal, sesuaikan lagi).
- [ ] Tambah `robots.txt` dan `sitemap.xml` di root.
- [ ] Tambah structured data (schema.org) bila diperlukan.
- [ ] Daftarkan property di Google Search Console, verifikasi, submit sitemap.

## Catatan Teknis

- Mobile-first: breakpoint utama di 640px dan 760px/960px.
- Tanpa dependency eksternal selain Google Fonts (opsional, bisa dihapus
  kalau mau 100% self-contained/offline-ready).
- Form di `/custom-vector-illustration/` masih pakai `mailto:` sederhana.
  Ganti dengan endpoint form service (mis. Formspree) atau backend sendiri
  saat siap menerima order otomatis.
