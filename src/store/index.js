import Vuex from 'vuex'
import Vue from 'vue'
import countOptions from './count'
import personsOptions from './person'

Vue.use(Vuex)

// 创建store
export default new Vuex.Store({
  modules:{
    countOptions,
    personsOptions
  }
})
