const pkg = require('./package')

module.exports = {
    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title: 'selvesan blog',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#3B8070', failedColor: 'yellow', height: '4px', duration: 5000},
    loadingIndicator: {
        name: 'circle',
        color: 'red'
    },

    /*
    ** Global CSS will be included in every single page.
    */
    css: [],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~plugins/core-components.js',
        '~plugins/date-filter.js'
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [],

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {

        }
    },
    env: {
        apiUrl: process.env.BASE_URL || 'https://nuxt-blog-e6337.firebaseio.com'
    },
    router: {
        linkActiveClass: 'active',
        extendRoutes(routes, resolve) {
            routes.push({
                path: '*',
                component: resolve(__dirname, 'pages/index.vue')
            })
        }
    },
    transition: {
        name: 'page',
        mode: 'out-in'
    }
};
