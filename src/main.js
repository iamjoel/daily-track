require('@/assets/vendor/rem')

import Vue from 'vue';

// https://github.com/museui/muse-ui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.css'
Vue.use(MuseUI)

Vue.config.productionTip = false

require('@/filters')

import store from '@/store'

import router from './router'

import App from './App.vue'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})
