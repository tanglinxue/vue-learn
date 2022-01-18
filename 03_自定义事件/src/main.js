import Vue from 'vue'
import App from './App.vue'
//引入插件
import plugins from './plugin'
//关闭Vue的生产提示
Vue.config.productionTip = false



//应用（使用）插件
Vue.use(plugins,1,2,3)

new Vue({
  el:'#app',
	render: h => h(App),
	// mounted() {
	// 	setTimeout(()=>{
	// 		this.$destroy()
	// 	},3000)
	// }
})
