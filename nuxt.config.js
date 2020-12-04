import colors from 'vuetify/es5/util/colors'
export default {
  //目标是服务器
  target:'server',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate:'%s',
    title: 'Web1.0.2-抄一抄',
    htmlAttrs:{
      lang:'zh-cn',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', 
      name: 'description',
       content: process.env.npm_package_description||'',
       }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel:'stylesheet',
        href:
              'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap',

      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['./assets/global.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
      '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
      '@nuxtjs/axios',
      'nuxt-vuex-localstorage',
      'cookie-universal-nuxt',
  ],
  axios:{
    credentials:true,
  },
  vuetify:{
    customVariables:['~/assets/variable.scss'],
  
  theme:{
    dark:false,
    themes:{
      dark:{
        primary:'#69c667',
        accent:colors.grey.darken3,
        secondary:colors.amber.darken3,
        info:colors.teal.lighten1,
        waring:colors.amber.base,
        error:colors.deepOrange.accent4,
        success:colors.green.accent3,
      },
      light:{
        primary:'#69c667',
        accent:colors.grey.darken3,
        secondary:colors.amber.darken3,
        info:colors.teal.lighten1,
        waring:colors.amber.base,
        error:'#FF7043',
        sucess:colors.green.accents,
      },
    },

  },
  treeShake:true,
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  server:{
    host:'0.0.0.0',
  }
}
