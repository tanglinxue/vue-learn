import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

const originalPush = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router =  new VueRouter({
  routes:[
    {
      name:'tanglinxue',
      path:'/about',
      component:About,
      meta:{
        peiqi:1
      }
    },
    {
      mame:'ziyu',
      path:'/home',
      component:Home,
      children:[
        {
          path:'news',
          component:News
        },
        {
          path:'message',
          component:Message,
          children:[
            {
              name:'laoda',
              path:'detail/:id/:title',
              component:Detail,
               props:true
              // props:{
              //   a:1,b:'hello'
              // }
              // props({query}){
      
              //   return {
              //     id:query.id,
              //     title:query.title
              //   }
              // }
            }
          ]
        }
      ]
    }
  ]
})

router.beforeEach((to,from,next)=>{
  // console.log(to)
  // console.log(from)
  // console.log(localStorage.name)
  if(to.meta.peiqi === 1 ){
    if(localStorage.name === 'tang'){
      next()
    }
  }else{
    next()
  }
})

router.afterEach((to,from)=>{
  console.log(to)
  console.log(from)
})

export default router
