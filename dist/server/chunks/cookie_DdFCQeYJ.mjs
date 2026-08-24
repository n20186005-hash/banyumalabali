globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { d as maybeRenderHead, i as renderComponent, u as renderTemplate } from "./server_CQpCcbgy.mjs";
import { t as createComponent } from "./compiler_DesORgBE.mjs";
import { t as $$Base } from "./Base_BICgj6p8.mjs";
//#region src/pages/cookie.astro
var cookie_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Cookie,
	file: () => $$file,
	url: () => $$url
});
var $$Cookie = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Pengaturan Cookie — Panduan Banyumala",
		"description": "Kelola Cookie yang digunakan oleh Panduan Banyumala."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="px-6 pt-36 pb-20"><div class="mx-auto max-w-3xl"><p class="eyebrow text-[#5d7f5b]">Kontrol privasi</p><h1 class="font-serif text-5xl mt-3">Pengaturan Cookie</h1><p class="mt-3 text-sm text-black/55">Terakhir diperbarui: Agustus 2026</p><p class="mt-7 leading-7 text-black/70">Kami menggunakan Cookie dan penyimpanan lokal secara terbatas. Cookie analitik bersifat pilihan dan Google Analytics tidak dimuat sebelum persetujuan.</p><div class="mt-10 space-y-4"><section class="card p-6 flex gap-5 justify-between"><div><h2 class="font-semibold">Cookie yang diperlukan</h2><p class="mt-2 text-sm leading-6 text-black/60">Diperlukan untuk fungsi dasar situs dan pengelolaan pilihan privasi.</p></div><span class="text-sm font-semibold text-[#5d7f5b]">Selalu aktif</span></section><section class="card p-6 flex gap-5 justify-between"><div><h2 class="font-semibold">Cookie analitik</h2><p class="mt-2 text-sm leading-6 text-black/60">Google Analytics membantu memahami penggunaan situs secara agregat. Aktif hanya setelah persetujuan.</p></div><label class="flex items-center gap-2"><input id="analytics" type="checkbox" class="h-5 w-5"><span class="text-sm">Izinkan</span></label></section><section class="card p-6 flex gap-5 justify-between"><div><h2 class="font-semibold">Cookie preferensi</h2><p class="mt-2 text-sm leading-6 text-black/60">Menyimpan pilihan Cookie di perangkat Anda. Situs ini hanya berbahasa Indonesia dan tidak menyimpan preferensi bahasa tambahan.</p></div><span class="text-sm font-semibold text-[#5d7f5b]">Aktif</span></section><section class="card p-6 flex gap-5 justify-between"><div><h2 class="font-semibold">Cookie pemasaran</h2><p class="mt-2 text-sm leading-6 text-black/60">Situs nirlaba ini tidak memasang Cookie iklan atau personalisasi pemasaran.</p></div><span class="text-sm font-semibold">Nonaktif</span></section></div><div class="mt-8 flex flex-wrap gap-3"><button id="save" class="rounded-full bg-[#123b32] text-white px-6 py-3 font-semibold">Simpan pilihan</button><button id="reject" class="rounded-full border border-black/20 px-6 py-3 font-semibold">Tolak analitik</button></div><p id="status" class="mt-4 text-sm text-black/60" aria-live="polite"></p><script>{\`const key='banyumala-analytics';const box=document.getElementById('analytics');const status=document.getElementById('status');box.checked=localStorage.getItem(key)==='granted';document.getElementById('save').addEventListener('click',()=>{localStorage.setItem(key,box.checked?'granted':'denied');status.textContent='Pilihan tersimpan. Perubahan penuh berlaku pada pemuatan halaman berikutnya.'});document.getElementById('reject').addEventListener('click',()=>{box.checked=false;localStorage.setItem(key,'denied');status.textContent='Cookie analitik ditolak.'});\`}<\/script></div></section>` })}`;
}, "C:/Users/Administrator/Documents/GitHub/banyumalabali/src/pages/cookie.astro", void 0);
var $$file = "C:/Users/Administrator/Documents/GitHub/banyumalabali/src/pages/cookie.astro";
var $$url = "/cookie";
//#endregion
//#region \0virtual:astro:page:src/pages/cookie@_@astro
var page = () => cookie_exports;
//#endregion
export { page };
