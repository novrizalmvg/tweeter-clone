import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/Login.vue'),
  },
  {
    path: "/",
    name: "Home",
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/:profileId',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
})


router.beforeEach((to, from, next) => {
  store.commit('setMobileMenuState', false)
  const isLoggedIn = store.getters.getLoginStatus
  if(isLoggedIn === false){
    if(to.name !== 'Login'){
      next({path: '/login'})
    }
    else {
      next()
    }
  }
  else next()
})

function loginGuardian(to, from, next){
  const isLoggedIn = store.getters.getLoginStatus
  if(isLoggedIn){
    next(from)
  }else{
    next()
  }
}


export default router
