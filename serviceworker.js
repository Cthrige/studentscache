const cacheName = 'cache-students';
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(['/studentscache/', '/studentscache/index.html', '/studentscache/nina.png', '/studentscache/olivia.png', '/studentscache/morten.png', '/studentscache/christian.png','/studentscache/members.json', '/studentscache/javascript.js', '/studentscache/mystyle.css']);
    })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.open(cacheName).then(cache => cache.match(event.request))
    )
  );
});