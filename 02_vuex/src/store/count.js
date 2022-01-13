export default {
  namespaced:true,
  actions:{
    jiaOdd({commit,state},value){
      if(state.sum%2){
        commit('jia',value)
      }
    },
    jiaWait({commit},value){
      setTimeout(()=>{
        commit('jia',value)
      },500)
    },
  },
  mutations:{
    jia(state,value){
      state.sum = state.sum+value
    },
    jianjian(state,value){
      state.sum = state.sum-value
    },
  },
  state:{
    sum:0,
    school:'尚硅谷',
    subject:'前端',
  },
  getters:{
    sum10(state){
      return state.sum*10
    }
  }
}
