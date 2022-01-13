<template>
   <div class="page-header"><h2>Vue Router Demo</h2>
   <button @click="back">后退</button>
			<button @click="forward">前进</button>
			<button @click="test">测试一下go</button></div>
   
</template>

<script>
export default {
  name:'Banner',
  methods: {
			back(){
				this.$router.back()
				// console.log(this.$router)
			},
			forward(){
				this.$router.forward()
			},
			test(){
        console.log('测试')
				this.$router.go(3)
			}
		},
}
</script>

<style>

</style>
