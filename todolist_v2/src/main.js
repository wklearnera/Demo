import Vue from 'vue'

import Cookies from 'js-cookie'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import Element from 'element-ui'
import '@/style/element-variables.scss'

import '@/style/index.scss' // global css

import App from './App.vue'
import router from './router'

Vue.use(Element,{
    size: Cookies.get('size') || 'medium' 
})
// Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    render: h => h(App),
})