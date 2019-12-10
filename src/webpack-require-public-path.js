// @ts-nocheck
/* eslint-disable no-undef */
// // module.exports = require.p;
// // export default import.meta;
// console.log(require);
// const __weaaaaaaaaaabpack_require__ = require;

// module.exports = new Function("r", `return r.p`)(__weaaaaaaaaaabpack_require__);
// /*   // __webpack_public_path__
//     /******/
// // __webpack_require__.p = "/"; */

//https://github.com/webpack/webpack/issues/2776#issuecomment-233208623
// console.log(__webpack_public_path__);

var webpackpublicpath = __webpack_public_path__;
var exporturl;
if (
  webpackpublicpath.startsWith("http://") ||
  webpackpublicpath.startsWith("https://")
) {
  exporturl = new URL(".", webpackpublicpath);
} else {
  exporturl = new URL(".", new URL(webpackpublicpath, location.href));
}

export default String(exporturl);
//module.exports = new URL(".", document.currentScript.src);
