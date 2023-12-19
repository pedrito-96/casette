import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";
import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";

export default defineNuxtConfig({
  build: {
    transpile: ["vue-i18n"],
  },
  vite: {
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), "./locales/*.json"),
        ],
      }),
    ],
  },
  app: {
    head: {
      title: "Casette",
    },
  },
  i18n: {
    // locales: [
    //   {
    //     code: "en",
    //     name: "English",
    //   },
    //   {
    //     code: "it",
    //     name: "Italiano",
    //   },
    // ],
    locales: ["en", "it"],
    defaultLocale: "it",
    strategy: "prefix",
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-lodash",
    "nuxt-headlessui",
    "nuxt-swiper",
    "@nuxt/image",
    "@nuxtjs/i18n",
  ],
  css: ["@/assets/scss/main.scss"],

  tailwindcss: {
    cssPath: "@/assets/scss/main.scss",
    viewer: false,
  },

  /**
   * Nuxt Lodash config
   * @see https://nuxt.com/modules/lodash
   */
  lodash: {
    prefix: "_",
    upperAfterPrefix: false,
  },

  /**
   * Nuxt Headless UI config
   * @see https://nuxt.com/modules/headlessui
   */
  headlessui: {
    prefix: "Headless",
  },

  devtools: {
    enabled: true,
  },
});
