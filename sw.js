const cacheName = 'nutricart-v1';
const staticAssets = [
  './',
  './index.html',
  './styles.css', // aapki CSS file ka naam
  './script.js',  // aapki JS file ka naam
  './icon-192.png'
];

self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
