import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

import { Button, Select,Switch } from 'element-ui';

Vue.use(Button);
Vue.component(Select.name, Select);
Vue.use(Switch)

// Vue.use(ElementUI);

//关闭Vue的生产提示
Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
