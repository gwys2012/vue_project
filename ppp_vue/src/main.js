import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from "vue-router"
import routes from './routes.js'
import App from './App.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(ElementUI)
Vue.use(VueRouter)

NProgress.configure({showSpinner: false})
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
})
router.beforeEach((to, from, next) => {
    //NProgress.done();
    next()
    /*if (to.path == '/login') {
        sessionStorage.removeItem('user');
    }
    let user = JSON.parse(sessionStorage.getItem('user'));
    if (!user && to.path != '/login') {
        next({path: '/login'})
    } else {
        next()
    }*/
})

router.afterEach(transition => {
  //NProgress.start();
})
/*
Vue.http.interceptors.push((request, next) => {
  NProgress.start();

  next((response)=>{
    NProgress.done();
  })
})*/

new Vue({
  /*el: '#app',*/
  router: router,
  render: h => h(App)
}).$mount('#app')


