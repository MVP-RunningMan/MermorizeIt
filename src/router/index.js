import VueRouter from 'vue-router'

import WordPart from '../pages/WordPart.vue'

import UserLogin from '../pages/UserLogin.vue'

import WordShow from '../pages/WordShow.vue'

import SetPlans from '../pages/SetPlans.vue'

import TodaySummary from '../pages/TodaySummary.vue'


const router = new VueRouter({
    routes: [
        {
            path:'/',
            component:WordPart
        },
        {
            path:"/userLogin",   
            component:UserLogin
        },
        {
            path:'/wordpart',
            component:WordPart,
            meta:{
                requireAuth : true
            },
            children:[
                {
                    path:'wordshow',
                    meta:{
                        requireAuth : true
                    },
                    component:WordShow
                    
                },
                {
                    path:'setplans',
                    meta:{
                        requireAuth : true
                    },
                    component:SetPlans
                },
                {
                    path:'todaysummary',
                    meta:{
                        requireAuth : true
                    },
                    component:TodaySummary
                }
            ],
        }
    ],
})    

export default router