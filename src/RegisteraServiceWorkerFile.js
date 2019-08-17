"use strict";
(() => {
  /* 注册google的workbox的serviceworker */
  if ("production" === process.env.NODE_ENV) {
    // try {
    "serviceWorker" in navigator &&
      window.addEventListener("load", function() {
        navigator.serviceWorker.register("service-worker.js").catch(() => {});
      });
    // } catch (e) {
    //   /*  */
    // }
  }
})();
