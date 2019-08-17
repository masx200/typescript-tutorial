importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

// if (workbox) {
//   console.log(`Yay! Workbox is loaded 🎉`);
// } else {
//   console.log(`Boo! Workbox didn't load 😬`);
// }
// // workbox.routing.registerRoute(
// // //   /\.js$/,
// //     new RegExp(".*.js"),
// //   new workbox.strategies.NetworkFirst({ cacheName: "js-cache" })
// // );
// workbox.routing.registerRoute(
//   /* 任意网址的js文件 */
//   new RegExp(".*.js"),
//   new workbox.strategies.NetworkFirst({ cacheName: "js-cache" })
// );
// workbox.routing.registerRoute(
//   new RegExp(".*.html"),
//   new workbox.strategies.NetworkFirst({ cacheName: "html-cache" })
// );
// workbox.routing.registerRoute(
//   new RegExp(".*/$"),
//   new workbox.strategies.NetworkFirst({ cacheName: "html-cache" })
// );
// workbox.routing.registerRoute(
//   // Cache CSS files.
//   //   /.*\.css$/,
//   new RegExp(".*.css"),
//   // Use cache but update in the background.
//   new workbox.strategies.StaleWhileRevalidate({
//     // Use a custom cache name.
//     cacheName: "css-cache"
//   })
// );
// workbox.routing.registerRoute(
//   // Cache CSS files.
//   /.*\.md$/,
//   //   new RegExp('.*\.css'),
//   // Use cache but update in the background.
//   new workbox.strategies.StaleWhileRevalidate({
//     // Use a custom cache name.
//     cacheName: "md-cache"
//   })
// );
// workbox.routing.registerRoute(
//   // Cache CSS files.
//   /* 仅限当前域名下的xml文件 */
//   /\.xml$/,
//   // Use cache but update in the background.
//   new workbox.strategies.StaleWhileRevalidate({
//     // Use a custom cache name.
//     cacheName: "xml-cache"
//   })
// );
// workbox.routing.registerRoute(
//   // Cache image files.
//   /\.(?:png|jpg|jpeg|svg|gif)$/,
//   // Use the cache if it's available.
//   new workbox.strategies.CacheFirst({
//     // Use a custom cache name.
//     cacheName: "image-cache",
//     plugins: [
//       new workbox.expiration.Plugin({
//         // Cache only 20 images.
//         maxEntries: 20,
//         // Cache for a maximum of a week.
//         maxAgeSeconds: 7 * 24 * 60 * 60
//       })
//     ]
//   })
// );

workbox.routing.registerRoute(
  /.*\.(?:js|html|\/)$/,
  new workbox.strategies.NetworkFirst(),
  "GET"
);
workbox.routing.registerRoute(
  /.*\.(?:xml|json|md|css)$/,
  new workbox.strategies.StaleWhileRevalidate(),
  "GET"
);
workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "image-cache",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 10,
        purgeOnQuotaError: false
      })
    ]
  }),
  "GET"
);
