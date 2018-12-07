import Vue from 'vue'
import Router from 'vue-router'
import notFound from '@/components/404'
import home from '@/components/home'
import login from '@/components/login'

import user from '@/views/user'
import user2 from '@/views/user2'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '*',
    redirect: '/404'
  }, {
    path: '/404',
    name: 'not-found',
    component: notFound,
    meta: {
      title: '404'
    }
  }, {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      title: '登录'
    }
  }, {
    path: '/home',
    name: 'home',
    component: home,
    meta: {
      title: '主页'
    },
    children: [{
      path: '/user1',
      name: 'user-1',
      component: user,
      meta: {
        title: '用户一'
      }
    }, {
      path: '/user2',
      name: 'user-2',
      component: user2,
      meta: {
        title: '用户二'
      }
    }]
  }]
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    window.sessionStorage.removeItem('user')
    window.document.title = to.meta.title
    next()
  }
  if (!window.sessionStorage.getItem('user') && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }
})
export default router
