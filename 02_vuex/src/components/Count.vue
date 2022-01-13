
<template>
	<div>
    <h1>当前求和为：{{sum}}</h1>
     <h1>我在{{school}}学习{{subject}}</h1>
		<h1>当前求和10倍为：{{sum10}}</h1>
     <ul>
			<li v-for="p in personList" :key="p.id">{{p.name}}</li>
		</ul>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="jia(n)">+</button>
		<button @click="jianjian(n)">-</button>
		<button @click="jiaOdd(n)">当前求和为奇数再加</button>
		<button @click="jiaWait(n)">等一等再加</button>
	</div>
</template>
<script>
  import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
	export default {
		name:'Count',
		data() {
			return {
				n:1, //用户选择的数字
			}
		},
    computed:{
      // ...mapState({
      //   sum:'sum',
      //   school:'school',
      //   subject:'subject'
      // }),
       ...mapState('countOptions',['sum','school','subject','personList']),
       ...mapState('personsOptions',['personList']),
       ...mapGetters('countOptions',['sum10'])
    },

		methods: {
      ...mapMutations('countOptions',['jia','jianjian']),
      ...mapActions('countOptions',['jiaOdd','jiaWait'])
		},
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>
