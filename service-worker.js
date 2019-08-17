/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "https://cdn.jsdelivr.net/gh/masx200/typescript-tutorial@1.0.0/precache-manifest.337bad9280758232357db8d5493602f2.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*\.(?:js|html|\/)$/, new workbox.strategies.NetworkFirst(), 'GET');
workbox.routing.registerRoute(/.*\.(?:xml|json|md|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg|gif)$/, new workbox.strategies.CacheFirst({ "cacheName":"image-cache", plugins: [new workbox.expiration.Plugin({ maxEntries: 10, purgeOnQuotaError: false })] }), 'GET');
