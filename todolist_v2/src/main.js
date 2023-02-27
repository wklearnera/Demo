import Vue from 'vue'
import App from './App.vue'
// import router from './router'
// import myCompent from './components/demoTest.vue'


Vue.config.productionTip = false
    // 定义全局组件
    // Vue.component('myCompent', myCompent)
new Vue({
    render: h => h(App),
}).$mount('#app')