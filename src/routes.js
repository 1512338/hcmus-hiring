import Register from './pages/Register.vue';
import Login from './pages/Login.vue';
import Vue from 'vue'

import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/login',
        component: Login
      },
      {
        path: '/register',
        component: Register
      }
    ]
  })