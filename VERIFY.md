# Verifikasi build

Pemeriksaan statis yang sudah dilakukan di lingkungan kerja:
- Semua versi langsung di `package.json` dikunci ke nomor eksak.
- `packageManager` dikunci ke `pnpm@11.22.0`.
- Node.js dikunci ke `24.19.0` melalui `engines` dan `.node-version`.
- Tidak ada `pnpm-workspace.yaml` karena proyek ini paket tunggal.
- Tidak ditemukan `example.com`, `localhost`, atau `chrome-extension://` dalam sumber proyek.
- Foto utama disimpan lokal; Google Maps adalah embed pihak ketiga yang disengaja.
- Parameter bahasa Google Maps sudah diubah ke Bahasa Indonesia (`id`).

## Kendala lingkungan
Lingkungan eksekusi saat pembuatan tidak dapat me-resolve `registry.npmjs.org` (`EAI_AGAIN`). Akibatnya, Corepack tidak dapat mengunduh pnpm dan langkah instalasi bersih tidak dapat dijalankan di sandbox ini. Karena itu `pnpm-lock.yaml` belum dapat dihasilkan secara jujur dan proyek ini **belum dinyatakan lolos verifikasi CI penuh**.

Begitu akses registry tersedia, jalankan:
```bash
rm -rf node_modules
corepack enable
corepack prepare pnpm@11.22.0 --activate
pnpm install
# commit pnpm-lock.yaml yang dihasilkan
rm -rf node_modules
CI=1 corepack pnpm install --frozen-lockfile
corepack pnpm check
corepack pnpm build

grep -RInE 'example\\.com|localhost|chrome-extension://' dist && exit 1 || true
```

Jika `SITE_URL` belum diisi, sitemap memang tidak dibuat. Setelah domain final ditetapkan, jalankan build dengan `SITE_URL=https://domain-final` lalu pastikan sitemap hanya memuat domain tersebut dan tidak memiliki lastmod buatan.
