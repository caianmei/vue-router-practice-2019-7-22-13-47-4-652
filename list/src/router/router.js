import Vue from 'vue'
import vueRouter from 'vue-router'
import Welcome from '../components/Welcome'
import HomePage from '../components/HomePage'
import My from '../components/My'
import ToDoList from '../components/ToDoList'

Vue.use(vueRouter)

const routes = [
    { path: '/', component: Welcome },
    { path: '/home', component: HomePage },
    { path: '/my', component: My },
    { path: '/list', component: ToDoList },
    // {
    //     path: '/play/:name', component: Play,
    //     children: [
    //       {
    //         path: 'dota',
    //         component: Play
    //       },
    //       {
    //         path: 'java',
    //         component: Play
    //       }
    //     ]
    //   },
    // { path: '/game', redirect: '/play' },
    // { path: '/study', component: Study},
    // { path: '/todo/:id', component: ToDo}
  ]

const router = new vueRouter({
  routes // (缩写) 相当于 routes: routes
})


export default router