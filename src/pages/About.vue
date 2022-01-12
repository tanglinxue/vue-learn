<template>
  <div>About</div>
</template>

<script>
export default {
  name:'About',
    beforeRouteEnter (to, from, next) {
              console.log(to)
            console.log(from)
            console.log(next)
            next()
  },
  beforeRouteLeave (to, from, next) {
     console.log(to)
            console.log(from)
            console.log(next)
            next()
  }
}
</script>

<style>

</style>
