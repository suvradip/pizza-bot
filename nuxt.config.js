require('dotenv').config();
const PORT = process.env.PORT || 3000;

module.exports = {
   mode: 'universal',
   /*
    ** Headers of the page
    */
   head: {
      title: 'Pizza store',
      meta: [
         { charset: 'utf-8' },
         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
         {
            hid: 'description',
            name: 'description',
            content: process.env.npm_package_description || '',
         },
      ],
      link: [
         { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
         {
            rel: 'stylesheet',
            href: '/css/bootstrap.min.css',
         },
         {
            rel: 'stylesheet',
            href: '/css/font-awesome.min.css',
         },
      ],
   },
   /*
    ** Customize the progress-bar color
    */
   loading: { color: '#fff' },
   /*
    ** Global CSS
    */
   css: ['@/assets/css/main.scss'],
   /*
    ** Plugins to load before mounting the App
    */
   plugins: [],
   /*
    ** Nuxt.js dev-modules
    */
   buildModules: [
      // Doc: https://github.com/nuxt-community/eslint-module
      '@nuxtjs/eslint-module',
   ],
   /*
    ** Nuxt.js modules
    */
   modules: [
      // Doc: https://axios.nuxtjs.org/usage
      '@nuxtjs/axios',
      '@nuxtjs/pwa',
      // Doc: https://github.com/nuxt-community/dotenv-module
      '@nuxtjs/dotenv',
   ],

   bootstrapVue: {
      componentPlugins: ['ToastPlugin'],
   },

   /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
   axios: {
      browserBaseURL: `/api/`,
      baseURL: `http://localhost:${PORT}/api/`,
   },
   /*
    ** Build configuration
    */
   build: {
      /*
       ** You can extend webpack config here
       */
      extend(config, ctx) {},
   },
};
