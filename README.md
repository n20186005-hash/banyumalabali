# Panduan independen Banyumala

This repository retains its existing Indonesian language and four page families: home, privacy, terms and cookie settings. Astro generates static HTML with a dedicated noindex 404 page. The site origin is fixed to the verified public domain; no environment variable is required for canonical links or sitemap discovery. Cloudflare ASSETS runs behind the Worker for HTTP/www redirects and genuine404 responses.

Run `pnpm check` and `pnpm build` before the deployment dry run. The baseline repository tracks generated `dist`; include the full refreshed output and every new referenced asset in the commit. Generated `.astro` and `.wrangler` state is local and ignored.

The three photographs were matched to Commons originals: Made agus devayana, Banyumala Waterfall (2016), and Chainwit., Banyumala2022 img01/img02. All are CC BY-SA4.0. Source and licence links, dates and resizedWebP/layoutcrop disclosures accompany the photographs; archival photos do not establish current access, facilities or safe swimming. Adaptations retain the same licence. Original text/code rights are separate.

Analytics requires explicit opt-in. Legacy choices are not automatically migrated. Refusal disables analytics before attempting storage, with a tab veto where session storage works; a failed permanent write never triggers a reload. Status messages distinguish persistent, tab and page-only results. The old banyumala- service worker/cache namespace is retired without touching unrelated caches. No accounts, contact form, email submission or bookings are provided.
