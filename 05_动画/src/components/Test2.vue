<template>
  <div>
    <button @click='isShow=!isShow'>显示/隐藏</button>
    <!-- <h1 v-show="isShow" class='come'>你好啊</h1> -->
    <transition-group name='helo' appear>
        <h1 v-show="isShow" key='1'>你好啊2</h1>
        <h1 v-show="isShow" key='2'>你好啊3</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name:'Test2',
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
  .helo-enter,.helo-leave-to{
    transform: translateX(-100%);
  }
  .helo-enter-active,.helo-leave-active{
 transition: .5s linear;
  }
  .helo-enter-to,.helo-leave{
    transform: translateX(0);
  }


</style>
