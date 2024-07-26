export default {
  head: {
    title: 'car-center',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    '~/assets/style/main.css',
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue/dist/bootstrap-vue.css',
  ],

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],

  modules: [
    '@nuxtjs/tailwindcss',
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/google-fonts',
  ],

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  googleFonts: {
    families: {
      Roboto: [400, 700],
      Kanit: [400, 700],
    },
  },

  axios: {
    baseURL: '/',
  },

  content: {},

  build: {},
}
