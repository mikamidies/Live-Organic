export default {
  head: {
    title: "BlissBerry",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  loading: "@/components/loading.vue",

  css: ["ant-design-vue/dist/antd.css", "@/assets/css/main.css"],

  plugins: ["@/plugins/aos.client.js", "@/plugins/antd-ui"],

  components: true,

  buildModules: [],

  modules: ["@nuxtjs/axios"],

  axios: {
    baseURL: "/",
  },

  build: {
    babel: {
      compact: true,
    },
    standalone: true,
    extend(config, ctx) {
      config.externals = [
        {
          encoding: "encoding",
        },
      ];
    },
  },
};
