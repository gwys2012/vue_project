import Login from './pages/Login.vue'
import NotFound from './pages/404.vue'
import Home from './pages/Home.vue'
import Main from './pages/Main.vue'
import HMain from './pages/hsj/HMain.vue'
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
    name: '',
    component: NotFound,
    hidden: true
  },
  {
    path: '/',
    component: Home,
    name: '文章管理',
    iconCls: 'el-icon-message',//图标样式class
    children: [
        { path: '/main', component: Main, name: '主页' }
        /*,
        { path: '/table', component: Table, name: '文章发布' },
        { path: '/form', component: Form, name: '轮播图管理' }*/
    ]
  },
  {
    path: '/',
    component: Home,
    name: 'Hsj',
    iconCls: 'el-icon-message',//图标样式class
    children: [
        { path: '/HMain', component: Main, name: 'hsj主页' }
        /*,
        { path: '/table', component: Table, name: '文章发布' },
        { path: '/form', component: Form, name: '轮播图管理' }*/
    ]
  },
  {
    path: '/',
    component: Home,
    name: 'Hnn',
    iconCls: 'el-icon-message',//图标样式class
    children: [
        { path: '/test', component: Test, name: 'hnn主页' }
        /*,
        { path: '/table', component: Table, name: '文章发布' },
        { path: '/form', component: Form, name: '轮播图管理' }*/
    ]
  }
]

export default routes
