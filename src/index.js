import "./样式.css";
import "webpack-react-vue-spa-awesome-config/ie11babelpolyfill.js";
("use strict");
import "./我的侧边栏.css";

import "webpack-react-vue-spa-awesome-config/registerserviceworker.js";
import "./ditto.css";
import "./hidewidthless500.css";
import "./index.css";
// import $ from "jquery";
// alert("hello world");
/*import React from "react";
import { render } from "react-dom";

function 主页() {
  return <div>hello world</div>;
}

render(<主页 />, document.getElementById("root"));
*/
document.getElementById("root").innerHTML = `<div>
<h1>loading</h1>
<span class="mui-spinner mui-spinner-custom">

</span></div>
`;
// $("head").append(`<script type="text/x-mathjax-config">
//     MathJax.Hub.Config({tex2jax:{inlineMath:[["$","$"]],processRefs:!0},TeX:{equationNumbers:{autoNumber:"all",formatID:function(n){return"("+n+")"},formatURL:function(n){return null}}}});
//   </script>`);
// $.getScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js"
// ).then(() => {
//   console.log(window.MathJax);

// var MathJax = window.MathJax;
import modulemathjax from "./MathJax/index";
(MathJax => {
  // console.log(module);
  // var MathJax = module.default;
  MathJax.Hub.Config({
    tex2jax: { inlineMath: [["$", "$"]], processRefs: !0 },
    TeX: {
      equationNumbers: {
        autoNumber: "all",
        formatID: function(n) {
          return "(" + n + ")";
        },
        formatURL: function() {
          return null;
        }
      }
    }
  });
})(modulemathjax);

import "./render";
// .then(() => {
//   // console.log("加载render");
// });
// });

// import("bootstrap");
// .then(m => console.log(m));

// import ClipboardJS from "./clipboard.min.js";

// // then(m => {
// //   console.log(m);
// //   let ClipboardJS = m.default;
// new ClipboardJS(".btn").on("success", function(e) {
//   if (!e.text) {
//     console.log("复制内容空");
//   } else {
//     //   console.info("Action:", e.action);
//     console.info("Text:", e.text);
//   }

//   e.clearSelection();
// });
// });

import ClipboardJS from "./clipboard.js";

(ClipboardJS => {
  // console.log(m);
  // let ClipboardJS = m.default;
  // const nclp =
  new ClipboardJS(".btn").on("success", function(e) {
    if (!e.text) {
      console.log("复制内容空");
    } else {
      //   console.info("Action:", e.action);
      console.info("Text:", e.text);
    }

    e.clearSelection();
  });
  // console.log(nclp);
})(ClipboardJS);
import app from "./app-home.vue";
import vue from "vue/dist/vue.esm";
vue.config.devtools = true;
// console.log(App);
const ApphomeVm = new vue({ el: document.getElementById("root"), ...app });
// console.log(ApphomeVm);
export { ApphomeVm };
