import Vue from 'vue'
import App from './App.vue'

import router from './routes'
import store from './store';
import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')