

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/web-developer/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Bn-_twZ2.js","_app/immutable/chunks/scheduler.DjT35H2x.js","_app/immutable/chunks/index.DlA3rHwv.js"];
export const stylesheets = [];
export const fonts = [];
