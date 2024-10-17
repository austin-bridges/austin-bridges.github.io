

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BL1fjDN-.js","_app/immutable/chunks/scheduler.DjT35H2x.js","_app/immutable/chunks/index.DlA3rHwv.js"];
export const stylesheets = [];
export const fonts = [];
