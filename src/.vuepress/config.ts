import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "rui's blog",
      description: "A blog demo for rui",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "rui's blog",
      description: "rui 的博客演示",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
