<template>
  <div>
     <ul>
        <li :style="{ opacity }">欢迎学习Vue</li>
        <li>news001<input type="text"></li>
        <li>news002<input type="text"></li>
        <li>news003<input type="text"></li>
      </ul>
  </div>
</template>

<script>
export default {
  name:'News2',
   data() {
    return {
      opacity: 1,
    };
  },
  deactivated(){
    console.log('news 被销毁')
    clearInterval(this.timer)
  },
  activated(){
    console.log('News组件被激活了')
    this.timer = setInterval(() => {
      // console.log('@')
      this.opacity -= 0.01
      if(this.opacity <= 0) this.opacity = 1
    },16)
  }
}
</script>

<style>

</style>
