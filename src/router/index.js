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
        peiqi:1,
        title:'唐'
      }
    },
    {
      mame:'ziyu',
      path:'/home',
      component:Home,
      meta:{
        title:'你好'
      },
      children:[
        {
          path:'news',
          component:News,
          meta:{
            peiqi:1
          }
          // beforeEnter: (to, from, next) => {
          //   console.log(to)
          //   console.log(from)
          //   console.log(next)
          //     if(to.meta.peiqi === 1 ){
          //       if(localStorage.name === 'tang'){
          //         next()
          //       }
          //     }else{
          //       next()
          //     }
          // }
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

// router.beforeEach((to,from,next)=>{

//   if(to.meta.peiqi === 1 ){
//     if(localStorage.name === 'tang'){
//       next()
//     }
//   }else{
//     next()
//   }
// })

// router.afterEach((to,from)=>{
//   console.log(to)
//   console.log(from)
//   document.title=to.meta.title || '硅谷'
// })

export default router
