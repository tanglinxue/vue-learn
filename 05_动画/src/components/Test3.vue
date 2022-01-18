<template>
  <div>
    <button @click='isShow=!isShow'>显示/隐藏</button>
    <!-- <h1 v-show="isShow" class='come'>你好啊</h1> -->
    <transition-group 
    name="animate__animated animate__bounce animate__delay-2s" 
			enter-active-class="animate__swing"
			leave-active-class="animate__backOutUp">
        <h1 v-show="isShow" key='1'>你好啊2</h1>
        <h1 v-show="isShow" key='2'>你好啊3</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name:'Test3',
  data(){
    return {
    isShow:true
    }
  }
}
</script>

<style scoped>
  h1{
    background: orange;
   
  }



</style>
