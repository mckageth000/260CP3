import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import info from './info.js'

let data = {
  summaries: info,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
