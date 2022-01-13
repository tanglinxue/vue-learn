import Vue from 'vue'
import App from './App.vue'
import store from './store'
//关闭Vue的生产提示
Vue.config.productionTip = false





new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
