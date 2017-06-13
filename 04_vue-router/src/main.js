import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './components/app.vue'
import routeConfig from './routeConfig'

// 声明使用router插件
Vue.use(VueRouter)

// 1. 创建路由器对象
var router = new VueRouter({
  linkActiveClass: 'active', // 指定当前路由链接的样式名
  history: true // 地址栏去掉 `#!`
})

// 2. 映射路由 配置对象 (注册路由)
routeConfig(router)

// 3. 启动应用
router.start(app, '#app')

// 4. 初始请求指令路由
router.go('/about')
