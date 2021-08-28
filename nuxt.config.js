const seo = {
  site_url: 'https://www.yuurrific.com/',
  site_name: 'Yuurrific',
  title: 'Yuyu - Yuurrific',
  description:
    'Front-End developer/Indie maker. I share my journey building products and tutorials for developers. Focus on Nuxt, Vue, CSS, and more!',
  image: 'https://www.yuurrific.com/og-default.png',
  locale: 'en',
  lang: 'en'
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: seo.title,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: seo.description },

      // Facebook
      { hid: 'og:title', property: 'og:title', content: seo.title },
      {
        hid: 'og:description',
        property: 'og:description',
        content: seo.description
      },
      { hid: 'og:image', property: 'og:image', content: seo.image },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:site_name', property: 'og:site_name', content: seo.site_name },
      { hid: 'og:url', property: 'og:url', content: seo.site_url },
      { hid: 'og:locale', property: 'og:locale', content: seo.locale },

      // Twitter
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: seo.title
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: seo.description
      },
      { hid: 'twitter:image', property: 'twitter:image', content: seo.image },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image'
      },
      { hid: 'twitter:url', property: 'twitter:url', content: seo.site_url },
      {
        hid: 'purpleads',
        name: 'purpleads-verification',
        content: '71d0c6a8ce2109f220af68c0'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/typeeighty/image/upload/'
    }
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/netlify-files'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  netlifyFiles: {
    existingFilesDirectory: './netlify/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
