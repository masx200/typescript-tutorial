<script>
import { 挂载初始 } from "./render";
import $ from "jquery";
import { 内容调整左边偏移 } from "./render";
export default {
    mounted() {
        $("#my主体").css("padding-top", $("#my导航栏").height());
        内容调整左边偏移();
        挂载初始();
    },
    data: () => ({
        mytitle: "",
        showerror: false,
        errorcontent: "",
        content: "",
        mulu: "",
        urltext: "",
        xianshicebianlan: true,
    }),
    methods: {
        togglecebian() {
            this.xianshicebianlan = !this.xianshicebianlan;
            内容调整左边偏移();
        },
    },
};
</script>
<template>
    <div id="root">
        <div
            id="my导航栏"
            class="container-fluid fixed-top"
            style="padding-right: 0; padding-left: 0"
        >
            <nav
                class="navbar navbar-expand-sm bg-light navbar-light"
                style="padding-right: 0; padding-left: 0"
            >
                <div>
                    <a
                        class="
                            navbar-brand navbar-brand
                            mui-btn mui-btn-primary mui-btn-outlined
                        "
                        href="#README"
                        id="title"
                        v-text="mytitle"
                        style="top: 0"
                        >Markdon Reader</a
                    >
                    <button
                        class="mui-btn mui-btn-primary mui-btn-outlined"
                        type="button"
                        id="cebianlantoggle"
                        v-on:click="togglecebian"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <!--
          <a
            class="navbar-brand navbar-brand mui-btn mui-btn-primary mui-btn-outlined"
            href="https://masx200.github.io/index.html"
            >masx200的
            <hr id="hidewidthless500" />
            github主页
          </a>
          -->

                    <!--
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          -->
                </div>
                <!--   <ul class="navbar-nav">
          <li class="nav-item">
          
          <a class="nav-link mui-btn mui-btn-primary mui-btn-outlined" href="#README" id="title"></a>
        -->
                <!--   </li>
        </ul>
        -->
                <!--

        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <div id="sidebar" class="navbar-nav"></div>
        </div>
       
        -->
            </nav>
        </div>

        <div class="container-fluid">
            <div
                ref="我的侧边栏"
                id="cebianlan"
                class="el-container"
                style="border: 1px solid white; position: fixed"
                v-show="xianshicebianlan"
            >
                <aside
                    v-html="mulu"
                    id="mynewsidelan"
                    class="el-aside"
                    style="background-color: white"
                ></aside>
            </div>
        </div>
        <div id="my主体" class="container">
            <div id="loadingparent">
                <div id="loading">
                    <h1>Loading ...</h1>
                </div>
            </div>
            <div>
                <div id="contentcontainer">
                    <h5 class id="markdownurlsrc" v-text="urltext"></h5>
                    <h5
                        class
                        id="markdownerror"
                        v-if="showerror"
                        v-text="errorcontent"
                    ></h5>
                    <div id="content" v-html="content" ref="markdown内容"></div>
                </div>
            </div>
            <div id="hide"></div>
            <div style="display: none">
                <div id="back_to_top">top</div>
            </div>

            <div>
                <h1 id="error"></h1>
            </div>
        </div>
    </div>
</template>
