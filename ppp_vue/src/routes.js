import Login from './pages/Login.vue'
import NotFound from './pages/404.vue'
import Test from './pages/hnn/test.vue'


// 创建一个路由器实例
// 并且配置路由规则
let routes = [
  {
    path: '/login',
    component: Login,
    name: '',
    hidden: true
  },
  {
    path: '/404',
    component: NotFound
  },
  {
    path: '/test',
    component: Test
  }
]

export default routes
