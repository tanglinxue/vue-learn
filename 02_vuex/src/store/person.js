export default  {
  namespaced:true,
  actions:{
    addPerAction({commit},obj){
      commit('addPer',obj)
     }
  },
  mutations:{
    addPer(state,obj){
      state.personList.unshift(obj)
     }
  },
  state:{
    personList:[
      {
      'id':'001',
      'name':'汤林学'
      }
    ]
  },
  getters:{
    personNum(state){
      return state.personList.length
    }
  }
}
