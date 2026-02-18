// Service Worker for Artist Schedule Pro PWA
const CACHE_NAME = 'artist-schedule-pro-v1';

// Get the base path from the service worker's location
const BASE_PATH = self.location.pathname.replace(/\/sw\.js$/, '');

const urlsToCache = [
    BASE_PATH + '/',
    BASE_PATH + '/index.html',
    BASE_PATH + '/manifest.json',
    BASE_PATH + '/icon-192.svg',
    BASE_PATH + '/icon-512.svg'
];

// Install event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache at:', BASE_PATH);
                return cache.addAll(urlsToCache).catch(err => {
                    console.warn('Cache addAll failed:', err);
                    // Continue even if some files can't be cached
                });
            })
    );
});

// Fetch event
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached version or fetch from network
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
