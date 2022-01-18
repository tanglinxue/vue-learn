<template>
  <div>
    <button @click='isShow=!isShow'>显示/隐藏</button>
    <h1 v-show="isShow" class='come'>你好啊</h1>
    <transition name='helo' appear>
        <h1 v-show="isShow">你好啊</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name:'Test',
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

  .helo-enter-active{
    animation: atigu .5s linear;
  }
  .helo-leave-active{
    animation: atigu .5s linear reverse;
  }

  @keyframes atigu{
    from{
      transform: translateX(-100%);
    }
    to{
       transform: translateX(0);
    }
  }
</style>
