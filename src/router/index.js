import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import About from '@/views/About.vue'
import Auth from '@/views/Auth.vue'
import Layout from '@/layout/Layout.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/', redirect: '/about' },
        { path: '/login', name: 'login', component: Login },

        {
            path: '/',
            component: Layout,
            children: [
                { path: '/about', name: 'about', component: () => import('@/views/About') },
                { path: '/auth', name:'auth', component: () => import('@/views/Auth') },
                
                { path: '/EpIssueGMKT', name: 'EpIssueGMKT', component: () => import('@/views/EpIssueGMKT') },
                { path: '/EpIssueIACC', name: 'EpIssueIACC', component: () => import('@/views/EpIssueIACC') },
                { path: '/PcsIssueGMKT', name: 'PcsIssueGMKT', component: () => import('@/views/PcsIssueGMKT') },
                { path: '/PcsIssueIACC', name: 'PcsIssueIACC', component: () => import('@/views/PcsIssueIACC') }
            ]
        },
        
    ],
});

export default router;