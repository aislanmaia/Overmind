import Vue from 'vue'
import App from './App.vue'
// import { overmindPlugin } from './overmind'

// Vue.use(overmindPlugin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
