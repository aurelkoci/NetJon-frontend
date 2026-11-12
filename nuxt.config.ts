// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxt/scripts", "@nuxtjs/seo"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
   app: {
    baseURL: '/',
  },
  nitro: {
    preset: 'static'
  },
   site: {
    url: "https://netjon.com",
    name: "Netjon",
  },
  robots: {
    robotsTxt: true, 
  },
});
