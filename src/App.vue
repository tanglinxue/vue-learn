<template>
  <div id="app">
   <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <Banner/>
        <About/>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- <a class="list-group-item" href="./about.html">About</a>
          <a class="list-group-item active" href="./home.html">Home</a> -->
          <router-link class="list-group-item" active-class="active" :to='{name:"tanglinxue"}'>About</router-link>
          <router-link class="list-group-item" active-class="active" to='/home'>Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import About from './pages/About.vue'
export default {
  name: 'App',
  components:{
    Banner,
    About
  }
}
</script>

<style>

</style>
