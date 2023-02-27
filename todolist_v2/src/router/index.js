import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'

/* 
    插件机制  vue加载 router插件 全全局添加$router 和 $route
    $router 是 vue router的实例对象 提供页面跳转能力  this.$router 访问  通过 
            push（页面跳转到新路由，并将新路由添加到浏览器历史记录） 
            replace（页面跳转到新路由 但将当前路由替换为新路由 浏览器历史记录中失去当前路由） go back 来实现页面跳转
            go (页面在浏览器历史记录中 向前或者向后移动若干步 接受整数n 向后为负数)
            back （同理移动 和go相反）
    $route  是当前路由的信息集合 可以通过他获取当前路由的参数
*/ 
Vue.use(Router)

export const constantRoutes = [
    {
        path:'/redirct',
        component:Layout,
        hidden:true,
        children:[
            {
                path:'/redirct/:path(.*)',
                component:()=>import('@/views/redirect/index')
            }
        ]
    }
]
/**
 *  history 以来HTML的history功能 没有#号更美观 来跳转路由 这时需要服务器提供相应的配置支持（不过目前框架提供，不需要手动配置）
 *  hash 通过将#后边的路径进行hash处理 在本地寻找文件下寻找路由 不美观 但是不会出现服务器配置的404错误 不过一般也需要自己配置一个404页面
 */
const createRouter = () => new Router({
    mode:'history',
    scrollBehavior: ()=>({ y:100 }),
    routes
})