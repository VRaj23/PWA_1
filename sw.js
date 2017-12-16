const staticAssets=[
	'./',
	'./styles.css',
	'./app.js'
];
self.addEventListener('install', async event=>{
	const cache = await caches.open('pwa-static');
	cache.addAll(staticAssets);
	console.log('install');
});

self.addEventListener('fetch', event=>{
	const request = event.request;
	event.respondWith(cacheFirst(request));
});

async function cacheFirst(req){
	const cachedResponse = await caches.match(req);
	return cachedResponse || fetch(req);
}









