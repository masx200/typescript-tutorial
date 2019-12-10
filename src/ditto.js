import jQuery from "jquery";
import newconfig from "./config";
import fetchajaxgettext from "./fetchajaxgettext";
import hljs from "./highlight.min.js";
import { ApphomeVm } from "./index";
import marked from "./marked.min";
/* eslint-disable no-useless-escape */
// var MathJax = window.MathJax;
import MathJax from "./MathJax/index";
// console.log(webpackrequirepublicpath);
import { 内容调整左边偏移 } from "./render";
import webpackrequirepublicpath from "./webpack-require-public-path";

// const summaryfile = new URL("summary.md", webpackrequirepublicpath).href;
const cachemarkdown = new Map();
const summaryfile = new URL(
  newconfig.summary,

  webpackrequirepublicpath
).href;
("use strict");
// import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";
// var exports, module;
var readme加载失败 = false;
export default (() => {
  "use strict";
  //   exports =

  return (function($ /* globalThis */) {
    var ditto = {
      sidebar_file: "sidebar.md",
      index: "README.md",
      content_id: $("#content"),
      sidebar_id: $("#sidebar"),

      edit_id: $("#edit"),
      back_to_top_id: $("#back_to_top"),

      loading_id: $("#loading"),
      error_id: $("#error"),

      search_name: $("#search"),
      search_results_class: ".search_results",
      fragments_class: ".fragments",
      fragment_class: ".fragment",

      highlight_code: true,

      // display elements
      sidebar: true,
      edit_button: false,
      back_to_top_button: true,
      searchbar: true,

      // github specifics
      github_username: null,
      github_repo: null,

      // initialize function
      run: initialize
    };

    function initialize() {
      // initialize sidebar and buttons
      if (ditto.sidebar) {
        init_sidebar_section();
      }

      if (ditto.back_to_top_button) {
        // init_back_to_top_button();
      }

      if (ditto.edit_button) {
        // init_edit_button();
      }

      // intialize highligh.js
      if (ditto.highlight_code) {
        hljs.initHighlightingOnLoad();
      }

      // page router
      router();
      window.addEventListener("hashchange", router);
      // $(window).on("hashchange", router);
    }

    function init_sidebar_section() {
      var path = summaryfile;
      //   fetchajaxgettext(ditto.sidebar_file)
      fetchajaxgettext(path)
        .then(function(data) {
          ApphomeVm.mulu = marked(data);
          return new Promise(r => {
            requestAnimationFrame(() => {
              $(ApphomeVm.$refs.我的侧边栏).css("top", $("#my导航栏").height());
              $(ApphomeVm.$refs.我的侧边栏.querySelectorAll("ul")).addClass(
                "navbar-nav"
              );

              $(ApphomeVm.$refs.我的侧边栏.querySelectorAll("a")).addClass(
                `mui-btn mui-btn-primary mui-btn-outlined`
              );
              内容调整左边偏移().then(() => r());
            });
          }).then(() => {
            requestAnimationFrame(() => {
              $("#my主体").css("padding-top", $("#my导航栏").height());
              /* 预先加载sidebar当中的markdwon文件到head的link的prefetch元素,来提升加载速度 */

              //   Array(...$("#sidebar a"))
              //     .map(e => e.hash)
              //     .filter(e => e.startsWith("#"))
              //     .map(e => e.slice(1))
              //     .forEach(e => {
              //       var linkmarkdwon = document.createElement("link");
              //       linkmarkdwon.rel = "prefetch";
              //       linkmarkdwon.href = e + ".md";
              //       document.head.appendChild(linkmarkdwon);
              //     });
              // })
              Array.from(ApphomeVm.$refs.我的侧边栏.querySelectorAll("a"))

                //   Array(...$("#mynewsidelan a"))
                /* 改成summary.md文件了 ,链接不带#*/

                .map(a => {
                  //   a.href = "#" + a.href;

                  var b = new URL("#" + a.getAttribute("href"), location.href);
                  //   console.log(b);
                  a.href = b.href;
                  return b;
                })
                .map(e => e.hash)
                .filter(e => e.startsWith("#"))
                .map(e => e.slice(1))
                .forEach(e => {
                  /* The FetchEvent for "https://cdn.jsdelivr.net/gh/masx200/markdown-reader@2.1.1/docs/why_use_ditto.md" resulted in a network error response: an "opaque" response was used for a request whose type is not no-cors */
                  //   var linkmarkdwon = document.createElement("link");
                  //   linkmarkdwon.rel = "prefetch";
                  //   linkmarkdwon.href =
                  fetch(
                    // @ts-ignore
                    new URL(
                      e.endsWith(".md") ? e : e + ".md",
                      webpackrequirepublicpath
                    ),
                    {
                      credentials: "omit",
                      //   headers: { accept: "*/*" },
                      body: null,
                      method: "GET",
                      mode: "cors"
                    }
                  );

                  //   document.head.appendChild(linkmarkdwon);
                });
              //   $("#markdownerror").hide();
              ApphomeVm.showerror = false;
            });
          });
          //加载完目录部分的markdown的回调函数

          //   ditto.sidebar_id.html(marked(data));

          //   document.querySelector("#cebianlan .el-aside").innerHTML = marked(
          //     data
          //   );

          /* Vue异步的设置html */
          //   console.log(ApphomeVm);
          //   console.log(

          //   );

          //   $("#cebianlan").css("top", $("#my导航栏").height());
          //   console.log(ApphomeVm.$refs.我的侧边栏.querySelectorAll("ul"));

          //   });

          //   $("#cebianlan  ul").addClass("navbar-nav");

          //   $("#mynewsidelan  a").addClass(
          //     `mui-btn mui-btn-primary mui-btn-outlined`
          //   );

          //   if (ditto.searchbar) {
          //     // init_searchbar();
          //   }

          //由于当作bootstrap导航栏,所以给sidebar中的ul增加class为"navbar-nav"
          //   $("#sidebar  ul").addClass("navbar-nav");
          //   $("#sidebar  h1").addClass("nav-item");
          //   $("#sidebar  p").addClass("nav-item");
          //   $("#sidebar a").addClass("nav-link");
          //   $("#sidebar  h2").addClass("nav-item");
          //   $("#sidebar  li").addClass("nav-item");
          //   // $("#sidebar > a").addClass("nav-link")
          //   // $("#sidebar >ul> li").addClass("nav-item")
          //   // nav-item navbar-nav nav-link
          //   $("#sidebar  ol").addClass("navbar-nav");
          //   $("#sidebar  li").addClass("nav-item");
          //   // $("#sidebar >ol>li> a").addClass("nav-link")
          //   // $("#sidebar >ul>li> a").addClass("nav-link")
          //   // $("#sidebar >h1> a").addClass("nav-link")
          //   $("#sidebar  input").addClass("nav-link");
        })

        // }

        //     })
        // "text"
        .catch(function() {
          stop_loading();
          setTimeout(() => {
            page_getter(true);
            // location.hash = "#";
          }, 5000);
          console.error("Opps! can't find the sidebar file to display!");
          console.warn("load failed " + path);

          //   $("#markdownerror").text("加载失败 " + path);

          ApphomeVm.errorcontent = "加载失败 " + path;
          //   $("#markdownerror").show();
          ApphomeVm.showerror = true;
        });
    }

    // function init_back_to_top_button() {
    //   ditto.back_to_top_id.show();
    //   ditto.back_to_top_id.on("click", function() {
    //     $("body, html").animate(
    //       {
    //         scrollTop: 0
    //       },
    //       200
    //     );
    //   });
    // }

    // function init_edit_button() {
    //   if (ditto.base_url === null) {
    //     // alert("Error! You didn't set 'base_url' when calling ditto.run()!");
    //   } else {
    //     ditto.edit_id.show();
    //     ditto.edit_id.on("click", function() {
    //       var hash = location.hash.replace("#", "/");

    //       if (hash === "") {
    //         hash = "/" + ditto.index.replace(".md", "");
    //       }

    //       window.open(ditto.base_url + hash + ".md");
    //       // open is better than redirecting, as the previous page history
    //       // with redirect is a bit messed up
    //     });
    //   }
    // }

    // function init_searchbar() {
    //   var sidebar = ditto.sidebar_id.html();
    //   var match = "[ditto:searchbar]";

    //   // html input searchbar
    //   var search = "<input name='" + ditto.search_name.selector + "'";
    //   search = search + " type='search'";
    //   search = search + " results='10'>";

    //   // replace match code with a real html input search bar
    //   sidebar = sidebar.replace(match, search);
    //   ditto.sidebar_id.html(sidebar);

    //   // add search listener
    //   $("input[name=" + ditto.search_name.selector + "]").keydown(
    //     searchbar_listener
    //   );
    // }

    // function build_text_matches_html(fragments) {
    //   var html = "";
    //   var class_name = ditto.fragments_class.replace(".", "");

    //   html += "<ul class='" + class_name + "'>";
    //   for (var i = 0; i < fragments.length; i++) {
    //     var fragment = fragments[i].fragment.replace("/[\uE000-\uF8FF]/g", "");
    //     html += "<li class='" + ditto.fragment_class.replace(".", "") + "'>";
    //     html += "<pre><code> ";
    //     fragment = $("#hide")
    //       .text(fragment)
    //       .html();
    //     html += fragment;
    //     html += " </code></pre></li>";
    //   }
    //   html += "</ul>";

    //   return html;
    // }

    // function build_result_matches_html(matches) {
    //   var html = "";
    //   var class_name = ditto.search_results_class.replace(".", "");

    //   html += "<ul class='" + class_name + "'>";
    //   for (var i = 0; i < matches.length; i++) {
    //     var url = matches[i].path;

    //     if (url !== ditto.sidebar_file) {
    //       // var hash = "#" + url.replace(".md", "");
    //       // var path = window.location.origin + "/" + hash;

    //       // html += "<li>";
    //       html += "<li class='link'>";
    //       html += url;
    //       // html += "<a href='" + path +"'>" + url + "</a>";
    //       html += "</li>";

    //       var match = build_text_matches_html(matches[i].text_matches);
    //       html += match;
    //     }
    //   }
    //   html += "</ul>";

    //   return html;
    // }

    // function display_search_results(data) {
    //   var results_html = "<h1>Search Results</h1>";

    //   if (data.items.length) {
    //     hide_errors();
    //     results_html += build_result_matches_html(data.items);
    //   } else {
    //     show_error("Opps.. Found no matches!");
    //   }

    //   ditto.content_id.html(results_html);
    //   $(ditto.search_results_class + " .link").click(function() {
    //     var destination =
    //       "#" +
    //       $(this)
    //         .html()
    //         .replace(".md", "");
    //     location.hash = destination;
    //   });
    // }

    // function github_search(query) {
    //   if (ditto.github_username && ditto.github_repo) {
    //     // build github search api url string
    //     var github_api = "https://api.github.com/";
    //     var search = "search/code?q=";
    //     var github_repo = ditto.github_username + "/" + ditto.github_repo;
    //     var search_details = "+in:file+language:markdown+repo:";

    //     var url = github_api + search + query + search_details + github_repo;
    //     var accept_header = "application/vnd.github.v3.text-match+json";

    //     $.ajax(url, {
    //       headers: {
    //         Accept: accept_header
    //       }
    //     }).done(function(data) {
    //       display_search_results(data);
    //     });
    //   }

    //   if (ditto.github_username == null && ditto.github_repo == null) {
    //     alert("You have not set ditto.github_username and ditto.github_repo!");
    //   } else if (ditto.github_username == null) {
    //     alert("You have not set ditto.github_username!");
    //   } else if (ditto.github_repo == null) {
    //     alert("You have not set ditto.github_repo!");
    //   }
    // }

    // function searchbar_listener(event) {
    //   if (event.which === 13) {
    //     // when user presses ENTER in search bar
    //     var q = $("input[name=" + ditto.search_name.selector + "]").val();
    //     if (q !== "") {
    //       location.hash = "#search=" + q;
    //     } else {
    //       alert("Error! Empty search query!");
    //     }
    //   }
    // }

    // function replace_symbols(text) {
    //   // replace symbols with underscore
    //   return text.replace(/[&\/\\#,+=()$~%.'":*?<>{}\ \]\[]/g, "_");
    // }

    // function li_create_linkage(li_tag, header_level) {
    //   // add custom id and class attributes
    //   var html_safe_tag = replace_symbols(li_tag.text());
    //   li_tag.attr("id", html_safe_tag);
    //   li_tag.attr("class", "link");

    //   // add click listener - on click scroll to relevant header section
    //   $(ditto.content_id.selector + " li#" + li_tag.attr("id")).click(
    //     function() {
    //       // scroll to relevant section
    //       var header = $("h" + header_level + "." + li_tag.attr("id"));
    //       $("html, body").animate(
    //         {
    //           scrollTop: header.offset().top
    //         },
    //         200
    //       );

    //       // highlight the relevant section
    //       var original_color = header.css("color");
    //       header.animate(
    //         {
    //           color: "#ED1C24"
    //         },
    //         500,
    //         function() {
    //           // revert back to orig color
    //           $(this).animate(
    //             {
    //               color: original_color
    //             },
    //             2500
    //           );
    //         }
    //       );
    //     }
    //   );
    // }

    // function create_page_anchors() {
    //   // create page anchors by matching li's to headers
    //   // if there is a match, create click listeners
    //   // and scroll to relevant sections

    //   // go through header level 2 and 3
    //   for (var i = 2; i <= 4; i++) {
    //     // parse all headers
    //     var headers = [];
    //     $(ditto.content_id.selector + " h" + i).map(function() {
    //       headers.push($(this).text());
    //       $(this).addClass(replace_symbols($(this).text()));
    //     });

    //     // parse and set links between li and h2
    //     $(ditto.content_id.selector + " ul li").map(function() {
    //       for (var j = 0; j < headers.length; j++) {
    //         if (headers[j] === $(this).text()) {
    //           li_create_linkage($(this), i);
    //         }
    //       }
    //     });
    //   }
    // }

    // function youtube_url_extract(data) {
    //   var yt_regex = /(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+/g;
    //   var yt_url = String(data.match(yt_regex));
    //   yt_url = yt_url.replace(/]/g, "");
    //   return yt_url;
    // }

    // function youtube_url_to_embed(data) {
    //   return (data = data.replace(/watch\?v\=/g, "embed/"));
    // }

    // function create_youtube_embeds(data) {
    //   // replaces [ditto:youtube:<some youtube link>]
    //   // with a proper youtube embed iframe
    //   var token_regex = /\[ditto\:youtube:(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+\]/g;
    //   var yt_url = youtube_url_extract(data);
    //   var yt_embed_url = youtube_url_to_embed(yt_url);

    //   // youtube embed html
    //   var embed_html = `<div class="youtube_video">
    //             <div style="position:relative;height:0;padding-bottom:56.25%">
    //               <iframe src="<link>?ecver=2"
    //                 width="640"
    //                 height="360"
    //                 frameborder="0"
    //                 style="position:absolute;width:100%;height:100%;left:0"
    //                 allowfullscreen>
    //               </iframe>
    //             </div>
    //           </div>`;
    //   embed_html = embed_html.replace("<link>", yt_embed_url);

    //   // replace match code with youtube video
    //   data = data.replace(token_regex, embed_html);
    //   return data;
    // }

    // function normalize_paths() {
    //   // console.log($(this).attr("src"));
    //   // images
    //   ditto.content_id.find("img").map(function() {
    //     var src = $(this)
    //       .attr("src")
    //       .replace(/^\.\//, "");
    //     if (
    //       $(this)
    //         .attr("src")
    //         .slice(0, 5) !== "http"
    //     ) {
    //       var url = location.hash.replace("#", "");

    //       // split and extract base dir
    //       url = url.split("/");
    //       var base_dir = url.slice(0, url.length - 1).join("/");

    //       // normalize the path (i.e. make it absolute)
    //       if (base_dir) {
    //         $(this).attr("src", base_dir + "/" + src);
    //       } else {
    //         $(this).attr("src", src);
    //       }
    //     }
    //   });
    // }

    function show_error(err_msg) {
      ditto.error_id.html(err_msg);
      ditto.error_id.show();
    }

    function hide_errors() {
      ditto.error_id.hide();
    }

    function show_loading() {
      ditto.loading_id.show();
      /* 先不删除content当中的内容 */
      //   ditto.content_id.html("");
      // clear content

      // infinite loop until clearInterval() is called on loading
      ditto.loading_interval = setInterval(function() {
        ditto.loading_id.fadeIn(1000).fadeOut(1000);
      }, 2000);
    }

    function stop_loading() {
      clearInterval(ditto.loading_interval);
      ditto.loading_id.hide();
      $("#loadingparent").hide();
    }

    // function escape_github_badges(data) {
    //   $("img").map(function() {
    //     var ignore_list = ["travis-ci.com", "travis-ci.org", "coveralls.io"];
    //     var src = $(this).attr("src");

    //     var base_url = src.split("/");
    //     //  var protocol = base_url[0];
    //     var host = base_url[2];

    //     if ($.inArray(host, ignore_list) >= 0) {
    //       $(this).attr("class", "github_badges");
    //     }
    //   });
    //   return data;
    // }
    function guid() {
      return "xxxxxxxxyxxxxyxxxyyxxxyxxxxxxxxxxxx".replace(/[xy]/g, function(
        c
      ) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    }
    function page_getter(转到主页 = false) {
      window.scrollTo(0, 0);
      // var path = location.hash.replace("#", "./");

      // // default page if hash is empty
      // var current_page = location.pathname.split("/").pop();
      // if (current_page === "index.html") {
      //   path = location.pathname.replace("index.html", ditto.index);
      //   normalize_paths();
      // } else if (path === "") {
      //   path = window.location + ditto.index;
      //   normalize_paths();
      // } else {
      //   path = path + ".md";
      // }

      // otherwise get the markdown and render it
      //   var a = location.pathname.split("/");
      //   a[a.length - 1] = "";
      var path =
        // location.origin +
        // a.join("/")

        // +
        location.hash === ""
          ? "./" + ditto.index
          : location.hash.replace("#", "./"); /* + ".md" */

      show_loading();
      if (转到主页 === false) {
        // console.log(path)
      } else {
        path = "./" + ditto.index;

        // console.log(path)
        // normalize_paths();
      }
      path = path.endsWith(".md") ? path : path + ".md";
      path = new URL(path, webpackrequirepublicpath).toString();
      //   console.log(path);
      /* 防止重复加载文件 */

      if (
        path !==
        //  $("#markdownurlsrc").text()
        ApphomeVm.urltext
      ) {
        const marktext = cachemarkdown.get(path);
        console.log(cachemarkdown);
        if (marktext) {
          ApphomeVm.urltext = path;
          stop_loading();
          ApphomeVm.content = marktext;
        } else {
          fetchajaxgettext(path)
            .then(function(data) {
              /* 设置所有代码段都可以编辑,不知为何,网页所有部分都不能选择文字? */
              /*<style>
   * {
          -webkit-user-select: text;
          -moz-user-select: text;
          -o-user-select: text;
          user-select: text;
        }
        </style> */
              //加载完主体部分的markdown的回调函数
              $("#collapsibleNavbar").removeClass("show");
              $("#my主体").css("padding-top", $("#my导航栏").height());

              return compile_into_dom(data)
                .then(function() {
                  return new Promise(r => {
                    requestAnimationFrame(() => {
                      // rerender mathjax and reset mathjax equation counter
                      if (MathJax && MathJax.Extension["Tex/AMSmath"]) {
                        MathJax.Extension["TeX/AMSmath"].startNumber = 0;
                        MathJax.Extension["TeX/AMSmath"].labels = {};

                        var content = ApphomeVm.$refs.markdown内容; //document.getElementById("content");
                        MathJax.Hub.Queue(["Typeset", MathJax.Hub, content]);
                      }
                      r();
                    });
                  });
                })
                .then(() => {
                  return new Promise(r => {
                    requestAnimationFrame(() => {
                      /* Uncaught DOMException: Failed to execute 'querySelector' on 'Document': '#1895f0fd862578e8198037b27fe2bb1e0d9' is not a valid selector. */
                      /* 批量设置clipboard的代码复制 */
                      Array.from(jQuery("code.hljs"))
                        // ...jQuery("code.language-javascript.hljs"),
                        // ...jQuery("code.language-html")
                        .forEach(e => {
                          var codecontenguid = "clip" + guid();
                          jQuery(e)
                            // .attr("contenteditable", true)
                            .attr("id", codecontenguid)
                            .after(`<button class="btn btn-outline-primary clipbutton" data-clipboard-target="#${codecontenguid}">复制
                                        </button>`);
                        });
                      //    <img class="clipbuttonimg" src="${jQuery("#clipsvg").attr("src")}" alt="复制到剪贴板">
                      // jQuery();

                      内容调整左边偏移();

                      /* 加载成功之后,设置hash */
                      setTimeout(() => {
                        stop_loading();
                      }, 0);

                      // $("#markdownurlsrc").text(path);

                      ApphomeVm.urltext = path;
                      if (window.innerWidth < 550) {
                        //   $("#cebianlan").hide();
                        ApphomeVm.xianshicebianlan = false;
                      }
                      var contenthtml = ApphomeVm.$refs.markdown内容.innerHTML;
                      cachemarkdown.set(path, contenthtml);
                      r();
                    });
                  });
                });
            })
            .catch(function() {
              ApphomeVm.urltext = "加载失败 " + path;
              if (readme加载失败) return;
              console.error("Opps! ... File not found!\n5秒后返回主页");
              show_error("Opps! ... File not found!\n5秒后返回主页");
              stop_loading();

              if (!readme加载失败) {
                setTimeout(() => {
                  page_getter(true);
                  // location.hash = "#";
                }, 5000);
              }
              // if (path === "./" + ditto.index) {
              readme加载失败 = true;
              // }
              console.warn("load failed " + path);
              // $("#markdownurlsrc").text("加载失败 " + path);

              ApphomeVm.urltext = "加载失败 " + path;
            });
        }
      }
    }

    function escape_html(string) {
      return string.replace(/\\/g, "&#92;").replace(/\_/g, "&#95;");
    }

    function unescape_html(string) {
      return string.replace(/&amp;#92;/g, "\\").replace(/&amp;#95;/g, "_");
    }

    function compile_into_dom(data /* , cb */) {
      return new Promise(r => {
        hide_errors();

        //   data = create_youtube_embeds(data);
        data = marked(escape_html(data));
        data = unescape_html(data);
        //   document.getElementById("content").innerHTML = data;
        ApphomeVm.content = data;

        /* vue组件异步刷新! */

        requestAnimationFrame(() => {
          stop_loading();
          //   escape_github_badges(data);

          // normalize_paths();
          //   create_page_anchors();

          if (ditto.highlight_code) {
            Array.from($("pre code")).forEach(function(block) {
              hljs.highlightBlock(block);
            });
          }

          //   if (cb) {
          //     cb(data);
          //   }
          r();
        });
      });

      //   ditto.content_id.html(data);
    }

    function router() {
      var hash = location.hash;
      //   e && console.log(e);
      if (
        !(
          hash.slice(2, 8) == "search" ||
          hash.slice(1, 7) == "search" ||
          location.hash.includes(`search`)
        )
      ) {
        page_getter();
      } else {
        // if (ditto.searchbar) {
        //   //   var searchdate = location.hash.slice(
        //   //     location.hash.indexOf(`search`) + `search=`.length
        //   //   );
        //   //   github_search(hash.replace("#search=", ""));
        //   //   github_search(searchdate);
        // }
      }
    }
    // console.log(globalThis)

    // if (typeof exports === "object" && typeof module !== "undefined") {
    //   module.exports = ditto;
    // } else {
    //   //   globalThis.ditto = ditto;
    // }
    return ditto;
  })(
    jQuery
    // ("undefined" != typeof window && window) ||
    //   ("undefined" != typeof WorkerGlobalScope && WorkerGlobalScope) ||
    //   this
  );
})();
