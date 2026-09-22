globalThis.process ??= {};
globalThis.process.env ??= {};
import { d as maybeRenderHead, f as renderHead, i as renderComponent, p as addAttribute, s as renderSlot, u as renderTemplate, x as createAstro } from "./server_DnbemVnc.mjs";
import { t as createComponent } from "./compiler_mg1th9Od.mjs";
//#region src/components/Logo.astro
createAstro("https://banyumalabali.com");
var $$Logo = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Logo;
	const { compact = false } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<a href="/" class="inline-flex items-center gap-3 no-underline" aria-label="Banyumala Guide"><svg viewBox="0 0 64 64" class="h-10 w-10" aria-hidden="true"><path d="M32 4C21 18 13 26 13 38a19 19 0 0 0 38 0C51 26 43 18 32 4Z" fill="#123b32"></path><path d="M25 22c-2 9-3 18 7 25 9-7 8-16 6-25-2 7-4 13-6 16-2-3-5-9-7-16Z" fill="#d9ead5"></path><path d="M18 43c8 1 15 5 20 12" stroke="#a8c39b" stroke-width="3" stroke-linecap="round"></path></svg>${!compact && renderTemplate`<span class="leading-none"><strong class="block font-serif text-lg">Banyumala</strong><small class="text-[10px] tracking-[.22em] uppercase">Panduan Alam</small></span>`}</a>`;
}, "H:/GitHub/banyumalabali/src/components/Logo.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<footer class="bg-[#0f2d27] text-[#edf3e8] px-6 py-12"><div class="mx-auto max-w-6xl grid gap-8 md:grid-cols-[1.2fr_.8fr]"><div>${renderComponent($$result, "Logo", $$Logo, {})}<p class="mt-5 max-w-2xl text-sm leading-7 text-white/75">Situs ini merupakan proyek panduan informasi wisatawan independen dan nirlaba, tanpa afiliasi dengan instansi pemerintah maupun organisasi resmi.</p></div><nav class="grid gap-2 text-sm md:justify-self-end"><a href="/privasi/">Kebijakan Privasi</a><a href="/ketentuan/">Ketentuan Layanan</a><a href="/cookie/">Pengaturan Cookie</a></nav></div><div class="mx-auto max-w-6xl mt-8 border-t border-white/15 pt-6 text-xs leading-6 text-white/65"><p>Informasi destinasi dirangkum dengan membandingkan publikasi Pemerintah Kabupaten Buleleng, Dinas Pariwisata Kabupaten Buleleng, dan sumber pariwisata publik Indonesia. Tidak memuat rekomendasi komersial.</p><p>Hak cipta foto tetap milik fotografer masing-masing. Foto utama: Made agus devayana; foto tambahan: Chainwit. — Wikimedia Commons, CC BY-SA 4.0.</p><p class="mt-2">Informasi resmi pariwisata: <a href="https://visitnorthbali.com" target="_blank" rel="noopener noreferrer">Visit North Bali</a>.</p><p class="mt-3">© 2026 Panduan Banyumala Buleleng. Hak cipta dilindungi.</p></div></footer>`;
}, "H:/GitHub/banyumalabali/src/components/Footer.astro", void 0);
//#endregion
//#region src/layouts/Base.astro
createAstro("https://banyumalabali.com");
var $$Base = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Base;
	const { title, description } = Astro.props;
	const origin = (Astro.site ?? new URL("https://banyumalabali.com")).origin;
	const canonical = new URL(Astro.url.pathname, origin).toString();
	const ogImage = new URL("/images/banyumala-hero.jpg", origin).toString();
	return renderTemplate`<html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonical, "href")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="og:image:alt" content="Air Terjun Banyumala di Wanagiri, Buleleng, Bali"><meta property="og:url"${addAttribute(canonical, "content")}><meta name="theme-color" content="#123b32"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="application-name" content="Panduan Banyumala"><link rel="manifest" href="/site.webmanifest"><link rel="icon" href="/icons/favicon.svg" type="image/svg+xml"><link rel="icon" href="/icons/favicon-32.png" sizes="32x32"><link rel="icon" href="/icons/favicon-16.png" sizes="16x16"><link rel="apple-touch-icon" href="/icons/apple-touch-icon.png"><script>{\`(function(){if(localStorage.getItem('banyumala-analytics')==='granted'){window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};window.gtag=gtag;gtag('js',new Date());gtag('config','G-HXM22WWPKP',{anonymize_ip:true});var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=G-HXM22WWPKP';document.head.appendChild(s)}})();\`}<\/script><script>{\`if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js').catch(function(){})})}\`}<\/script>${renderHead($$result)}</head><body><header class="fixed z-50 top-0 inset-x-0 p-4"><div class="mx-auto max-w-6xl rounded-full bg-[#f6f4ed]/90 backdrop-blur px-5 py-3 flex items-center justify-between shadow-sm">${renderComponent($$result, "Logo", $$Logo, { "compact": false })}<nav class="hidden md:flex gap-6 text-sm"><a href="/#cerita">Cerita</a><a href="/#rencana">Rencana kunjungan</a><a href="/#akses">Akses</a><a href="/#faq">FAQ</a></nav></div></header><main>${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "H:/GitHub/banyumalabali/src/layouts/Base.astro", void 0);
//#endregion
export { $$Base as t };
