export default defineNuxtConfig({
  build: {
    transpile: [/echarts/],
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  modules: ["@nuxtjs/tailwindcss"],
  devtools: { enabled: true },
});
