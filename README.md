# Panduan Banyumala Buleleng

Situs informasi wisata independen dan nirlaba untuk Air Terjun Banyumala, Wanagiri, Buleleng.

## Stack
- Astro 7 + TypeScript 6 (dipilih karena `@astrojs/check` belum mendukung TypeScript 7)
- Tailwind CSS 4 melalui plugin Vite resmi
- Cloudflare Workers adapter
- pnpm 11

## Konfigurasi domain
Satu-satunya sumber domain adalah `SITE_URL` yang dibaca di `astro.config.ts`. Tanpa `SITE_URL`, build tetap berjalan, canonical absolut tidak dirender, OG image turun ke path relatif, dan integrasi sitemap tidak diaktifkan.

Contoh saat domain sudah ada:
```bash
SITE_URL=https://domain-anda.id pnpm build
```

## Perintah
```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm deploy
```

## Foto
Semua foto disimpan lokal di `public/images/`.
- Made agus devayana — Banyumala Waterfall.jpg — CC BY-SA 4.0
- Chainwit. — Bali Singaraja Banyumala Waterfall 2022 img 01/02 — CC BY-SA 4.0
