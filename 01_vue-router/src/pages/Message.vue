<template>
  <div>
    <ul>
      <li v-for='item in messageList' :key='item.id'>
        <!-- <router-link :to="`/home/message/detail?id=${item.id}&title=${item.title}`">{{item.title}}</router-link> -->

        <!-- <router-link :to="{
          name:'laoda',
          params:{
            id:item.id,
            title:item.title
          }
        }">{{item.title}}</router-link> -->


         <router-link :to="{
          name:'laoda',
          query:{
            id:item.id,
            title:item.title
          }
        }"  replace>{{item.title}}</router-link>

        <button @click="pushShow(item)">push查看</button>
				<button @click="replaceShow(item)">replace查看</button>

         <!-- <router-link :to="`/home/message/detail/${item.id}/${item.title}`">{{item.title}}</router-link> -->
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
			return {
				messageList:[
					{id:'001',title:'消息001'},
					{id:'002',title:'消息002'},
					{id:'003',title:'消息003'}
				]
			}
	},
  methods:{
    pushShow(item){
      console.log(this.$router)
      this.$router.push({
        name:'laoda',
        params:{
          id:item.id,
          title:item.title
        }
      })
    },
    replaceShow(item){
       this.$router.replace({
        name:'laoda',
        params:{
          id:item.id,
          title:item.title
        }
      })
    }
  },
   beforeDestroy(){
    console.log('messge 被销毁')
  }
};
</script>

<style></style>
