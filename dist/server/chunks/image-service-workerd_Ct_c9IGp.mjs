globalThis.process ??= {};
globalThis.process.env ??= {};
import { a as baseService } from "./assets_D5Vb3fTj.mjs";
//#region node_modules/.pnpm/@astrojs+cloudflare@14.2.3__8e5cf7a6072ef048fb2292c0f9a6138c/node_modules/@astrojs/cloudflare/dist/entrypoints/image-service-workerd.js
var image_service_workerd_default = {
	...baseService,
	async transform(inputBuffer, transform) {
		return {
			data: inputBuffer,
			format: transform.format
		};
	}
};
//#endregion
export { image_service_workerd_default as default };
