export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","splatter-web.jpg","web-machine.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.DkmXxTZK.js","app":"_app/immutable/entry/app.BoSARaU-.js","imports":["_app/immutable/entry/start.DkmXxTZK.js","_app/immutable/chunks/scheduler.DjT35H2x.js","_app/immutable/entry/app.BoSARaU-.js","_app/immutable/chunks/scheduler.DjT35H2x.js","_app/immutable/chunks/index.DlA3rHwv.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
