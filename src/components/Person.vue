<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color:red">Count组件求和为：{{sum}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
		<button @click="add">添加</button>
    <button @click="add2">添加2</button>
    <ul>
			<li v-for="p in personList" :key="p.id">{{p.name}}</li>
		</ul>
    {{personNum}}
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  data(){
    return {
      name:''
    }
  },
  methods:{
    add(){
      const name = this.name
      const id = nanoid()
      const obj = {
        name,
        id
      }
      this.$store.commit('personsOptions/addPer',obj)
      this.name = ''
    },
    add2(){
      const name = this.name
      const id = nanoid()
      const obj = {
        name,
        id
      }
      this.$store.dispatch('personsOptions/addPerAction',obj)
      this.name = ''
    }
  },
  computed:{
    personList(){
      return this.$store.state.personsOptions.personList
    },
    sum(){
      return this.$store.state.countOptions.sum
    },
    personNum(){
      console.log(this.$store)
      return this.$store.getters['personsOptions/personNum']
    }
  }
}
</script>

<style>

</style>
