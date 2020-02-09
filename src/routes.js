import Register from './pages/Register.vue';
import Login from './pages/Login.vue';
import Home from './pages/Home.vue'
import Vue from 'vue'

import Router from 'vue-router'
import Vuetify from 'vuetify';

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
    },
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