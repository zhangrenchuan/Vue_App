/*
  暴露模块时, 是对象还是函数
    暴露对象可以一次暴露多个行为
    暴露函数只暴露一个行为
*/

import about from './components/about.vue'
import home from './components/home.vue'
import news from './components/news.vue'
import message from './components/message.vue'
import detail from './components/messageDetail.vue'

export default function (router) {
  router.map({
    '/about': {
      component: about
    },
    '/home': {
      component: home,
      subRoutes: { // 嵌套子路由
        '/news': {
          component: news
        },
        '/message': {
          component: message,
          subRoutes: {
            '/detail/:id': {
              component: detail
            }
          }
        }
      }
    }
  })
}
