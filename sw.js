// ============================================
// SERVICE WORKER - Artist Schedule Manager Pro
// Strategy: App Shell caching + Network-first for APIs
// ============================================

const CACHE_NAME = 'artist-schedule-v1';
const APP_SHELL_CACHE = [
    '/lichtrinh/',
    '/lichtrinh/index.html',
    '/lichtrinh/manifest.json',
];

const FONT_CACHE_NAME = 'fonts-v1';

// ============================================
// INSTALL - Cache App Shell
// ============================================
self.addEventListener('install', (event) => {
    console.log('[SW] Installing Service Worker...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[SW] Caching App Shell');
                return cache.addAll(APP_SHELL_CACHE);
            })
            .catch((err) => {
                console.log('[SW] Cache failed (normal in dev):', err);
            })
    );
    // Activate immediately
    self.skipWaiting();
});

// ============================================
// ACTIVATE - Clean old caches
// ============================================
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating Service Worker...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME && name !== FONT_CACHE_NAME)
                    .map((name) => {
                        console.log('[SW] Deleting old cache:', name);
                        return caches.delete(name);
                    })
            );
        })
    );
    // Take control of all pages immediately
    self.clients.claim();
});

// ============================================
// FETCH - Smart caching strategy
// ============================================
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Skip non-GET requests
    if (event.request.method !== 'GET') return;

    // Skip Google API calls - always network
    if (url.hostname.includes('googleapis.com') ||
        url.hostname.includes('accounts.google.com') ||
        url.hostname.includes('generativelanguage.googleapis.com')) {
        return;
    }

    // Google Fonts - Cache first (fonts rarely change)
    if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
        event.respondWith(
            caches.open(FONT_CACHE_NAME).then((cache) => {
                return cache.match(event.request).then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    return fetch(event.request).then((networkResponse) => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                });
            })
        );
        return;
    }

    // App Shell - Network first, fallback to cache
    event.respondWith(
        fetch(event.request)
            .then((networkResponse) => {
                // Cache successful responses
                if (networkResponse && networkResponse.status === 200) {
                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                }
                return networkResponse;
            })
            .catch(() => {
                // Offline - serve from cache
                return caches.match(event.request).then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    // If the request is for a page, return the cached index
                    if (event.request.mode === 'navigate') {
                        return caches.match('/lichtrinh/index.html');
                    }
                });
            })
    );
});
