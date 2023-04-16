import Home from "../pages/Home.vue"
import Cart from "../pages/Cart.vue"
import { createRouter,createWebHistory } from "vue-router"
const routes= [
    {
        path:"/",component:Home,name:"Home"
    },
    {
        path:"/cart",component:Cart,name:"Cart"
    },
]
const router  = createRouter({
    history:createWebHistory(),
    routes
})

export default router