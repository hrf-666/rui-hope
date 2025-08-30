import {enNavbar, zhNavbar} from "../navbar/index.js";
import {enSidebar, zhSidebar} from "../sidebar/index.js";

export const localesConfig = {
    "/": {
        // navbar
        navbar: enNavbar,

        // sidebar
        sidebar: enSidebar,

        footer: "rui",

        displayFooter: true,

        blog: {
            description: "A programmer",
            intro: "/intro.html",
        },

        metaLocales: {
            editLink: "Edit this page on GitHub",
        },
    },

    /**
     * Chinese locale config
     */
    "/zh/": {
        // navbar
        navbar: zhNavbar,

        // sidebar
        sidebar: zhSidebar,

        footer: "rui",

        displayFooter: true,

        blog: {
            description: "一个程序员",
            intro: "/zh/intro.html",
        },

        // page meta
        metaLocales: {
            editLink: "在 GitHub 上编辑此页",
        },
    },
}
