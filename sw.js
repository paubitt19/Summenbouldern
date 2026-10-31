// Offline-Unterstützung für den Summenbouldern_Rechner.
// Beim ersten Besuch werden alle Dateien gespeichert. Danach startet die App
// sofort aus dem Speicher, auch ohne Internet, und holt Updates im Hintergrund.
const CACHE = "summenbouldern-v1";
const FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon.svg",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png",
  "./fonts/bricolage-grotesque-500.woff",
  "./fonts/bricolage-grotesque-800.woff",
  "./fonts/atkinson-hyperlegible-400.woff",
  "./fonts/atkinson-hyperlegible-700.woff"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Aus dem Speicher antworten und gleichzeitig im Hintergrund aktualisieren.
self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  event.respondWith(
    caches.open(CACHE).then(async cache => {
      const key = req.mode === "navigate" ? "./index.html" : req;
      const cached = await cache.match(key, { ignoreSearch: true });
      const fresh = fetch(req).then(res => {
        if (res && res.ok) cache.put(key, res.clone());
        return res;
      }).catch(() => null);
      if (cached) { event.waitUntil(fresh); return cached; }
      return (await fresh) || new Response("Offline", { status: 503 });
    })
  );
});
