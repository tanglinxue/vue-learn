<template>
	<div class='container'>
   <Category title="美食" >
			<img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="" slot='center'>
      <a slot="footer" href="http://www.atguigu.com">更多美食</a>
		</Category>
    <Category title="游戏">	
      <template scope="{games}" slot="center">
 
          <ul >
       
				<li v-for="(g,index) in games" :key="index">{{g}}  </li>
			</ul>
      </template>
			<div class="foot" slot="footer">
				<a href="http://www.atguigu.com">单机游戏</a>
				<a href="http://www.atguigu.com">网络游戏</a>
			</div>
    </Category>
    <Category title="电影">	
    <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    <template v-slot:footer>
				<div class="foot">
					<a href="http://www.atguigu.com">经典</a>
					<a href="http://www.atguigu.com">热门</a>
					<a href="http://www.atguigu.com">推荐</a>
				</div>
				<h4>欢迎前来观影</h4>
			</template>
    </Category>
	</div>
</template>

<script>
	import Category from './components/Category'
	export default {
		name:'App',
		components:{Category},
    
	}
</script>
<style scoped>
	.container{
		display: flex;
		justify-content: space-around;
	}
</style>


