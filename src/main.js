// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Navbar, TabItem } from 'mint-ui'
import 'lib-flexible'
import App from './App'
import router from './router'
import './mock/mockServer/mockServer'
import store from './vuex/store'


Vue.config.productionTip = false

Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
