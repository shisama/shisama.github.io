var CACHE_NAME = 'shisama.github.io-v1';
var urlsToCache = [
  '/',
  '/static/js/sw.js',
  '/img/**.*'
];

self.addEventListener('install', function(event) {
  // インストール手順を実行する
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});