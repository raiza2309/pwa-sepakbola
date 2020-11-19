importScripts('/third-party/workbox-v5.1.4/workbox-sw.js');

workbox.setConfig({
    modulePathPrefix: '/third-party/workbox-v5.1.4/'
});

workbox.loadModule('workbox-precaching');
workbox.loadModule('workbox-routing');
workbox.loadModule('workbox-strategies');

const staleWhileRevalidate = new workbox.strategies.StaleWhileRevalidate();

if (workbox)
    console.log(`Workbox berhasil dimuat`);
else
    console.log(`Workbox gagal dimuat`);

workbox.precaching.precacheAndRoute([
    { url: "/", revision: '1'},
    { url: "/index.html", revision: '1'},
    { url: "/clubs.html", revision: '1'},
    { url: "/detail-club.html", revision: '1'},
    { url: "/myfavorite.html", revision: '1'},
    { url: "/css/style.css", revision: '1'},
    { url: "/css/materialize.min.css", revision: '1'},
    { url: "/js/materialize.min.js", revision: '1'},
    { url: "/js/nav.js", revision: '1'},
    { url: "/js/api.js", revision: '1'},
    { url: "/js/sw.js", revision: '1'},
    { url: "/js/idb.js", revision: '1'},
    { url: "/js/db.js", revision: '1'},
    { url: "/service-worker.js", revision: '1'},
    { url: "/manifest.json", revision: '1'},
    { url: "/assets/img/Football Logo 192px.webp", revision: '1'},
    { url: "/assets/img/Football Logo 256px.webp", revision: '1'},
    { url: "/assets/img/Football Logo 384px.webp", revision: '1'},
    { url: "/assets/img/Football Logo 512px.webp", revision: '1'},
    { url: "/assets/img/Default Logo.webp", revision: '1'},
    { url: "/assets/img/Premier League.webp", revision: '1'},
    { url: "/assets/img/Serie A.webp", revision: '1'},
    { url: "/assets/img/Primera Division.webp", revision: '1'},
    { url: "/assets/img/Ligue 1.webp", revision: '1'},
    { url: "/assets/img/UCL.webp", revision: '1'},
    { url: "/assets/data/competitions.json", revision: '1'},
    { url: "https://fonts.googleapis.com/icon?family=Material+Icons", revision: '1'}
], {
    // Ignore all URL parameters.
    ignoreURLParametersMatching: [/.*/]
})

workbox.routing.registerRoute(
    /^https:\/\/api\.football\-data\.org\/v2\/teams/,
    new workbox.strategies.NetworkFirst({
        cacheName: 'tim',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
        ],
    })
);

workbox.routing.registerRoute(
    /^https:\/\/api\.football\-data\.org\/v2/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'daftar-tim',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
        ],
    })
);

self.addEventListener('push', function(event) {
    var body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = 'Push message no payload';
    }
    var options = {
        body: body,
        icon: "/assets/img/Football Logo 192px.webp",
        badge: "/assets/img/Football Logo 192px.webp",
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };
    event.waitUntil(
        self.registration.showNotification('Informasi Sepak Bola', options)
    );
});