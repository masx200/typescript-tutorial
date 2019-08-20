"use strict";
import { ApphomeVm } from "./index";
// console.log("加载render");
// import ClipboardJS from "./clipboard.min.js";

import $ from "jquery";

//import "./RegisteraServiceWorkerFile.js";
import ditto from "./ditto";
// console.log(ditto);
// import "./prefetchmd";

import newconfig from "./config";

var oldconfig = {
  doctitle: "markdown-reader",
  subtitle: "Lightweight Markdown Documentation System",
  github_username: "masx200",
  github_repo: "markdown-reader"
};
var config = { ...oldconfig, ...newconfig };
var doctitle = config.doctitle || "Markdown Reader";
var subtitle = config.subtitle || "Lightweight Markdown Documentation System";
var github_username = config.github_username;
var github_repo = config.github_repo;

ditto.index = config.index;
export function 挂载初始() {
  $(() => {
    // const clipboard = new ClipboardJS(".btn");

    // clipboard.on("success", function(e) {
    //   if (!e.text) {
    //     console.log("复制内容空");
    //   } else {
    //     //   console.info("Action:", e.action);
    //     //   console.info("Text:", e.text);
    //   }

    //   e.clearSelection();
    // });

    (() => {
      document.title = doctitle + " " + subtitle;
      // $("#title").text(doctitle);
      ApphomeVm.mytitle = doctitle;
      $("#my主体").css("padding-top", $("#my导航栏").height());
      (function() {
        // essential settings
        //   (ditto.index = "README.md"),
        (ditto.sidebar_file = "sidebar.md"),
          // optional settings if you want github search
          (ditto.github_username = github_username);
        // <------- EDIT ME!!
        ditto.github_repo = github_repo;
        // <------- EDIT ME!!
        // ditto.highlight_code = false; // <------- EDIT ME!!
        ditto.highlight_code = true;
        // where the docs are actually stored on github - so you can edit
        // ditto.base_url = "https://github.com/chutsu/ditto/edit/gh-pages";

        // run
        ditto.run();
      })();
      // $("#sidebar > ul").addClass("navbar-nav")
      function onhashchange() {
        scrollTo(0, 0);
        //   $("#collapsibleNavbar").removeClass("show");

        $("#my主体").css("padding-top", $("#my导航栏").height());
        if (window.innerWidth < 550) {
          //   $("#cebianlan").hide();
          ApphomeVm.xianshicebianlan = false;
        }
        //   if (location.hash === "" || location.hash === "#") {
        //     location.hash = "#README";
        //   }
      }
      window.addEventListener("hashchange", onhashchange);
      // new ClipboardJS(".btn");
      // if(location.hash===""  )  {location.hash="#README"}
    })();
  });
}

// then(m => {
//   console.log(m);
//   let ClipboardJS = m.default;
// import { ApphomeVm } from "./index";
// $("#cebianlantoggle").click(() => {
//   $("#cebianlan").toggle();
//   //   console.log($("#content").offset(), $("#cebianlan").outerWidth());
//   内容调整左边偏移();
// });
export function 内容调整左边偏移() {
  requestAnimationFrame(() => {
    if (window.innerWidth > 550) {
      var 左边偏移量 =
        $("#cebianlan")[0].offsetWidth - $("#contentcontainer").offset().left;
      //   if (左边偏移量 < 15) 左边偏移量 = 15;
      左边偏移量 = Math.max(左边偏移量, 20);
      // setTimeout(() => {
      $("#contentcontainer").css({
        "padding-left": 左边偏移量 + 20
      });
      //   $("#markdownurlsrc").css({
      //     left: 左边偏移量 + 20
      //   });
      // }, 0);
    } else {
      //   $("#markdownurlsrc").css({
      //     left: 20
      //   });
      $("#contentcontainer").css({
        "padding-left": 20
      });
    }
  });
}
window.addEventListener("resize", () => {
  内容调整左边偏移();

  //   $("#my主体").css("padding-top", $("#my导航栏").height());
});
