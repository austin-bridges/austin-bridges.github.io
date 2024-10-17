

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Bg1UDNOm.js","_app/immutable/chunks/scheduler.DjT35H2x.js","_app/immutable/chunks/index.DlA3rHwv.js"];
export const stylesheets = [];
export const fonts = [];
