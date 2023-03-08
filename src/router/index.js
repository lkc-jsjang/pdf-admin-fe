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
                { path: '/PcsIssueIACC', name: 'PcsIssueIACC', component: () => import('@/views/PcsIssueIACC') },

                { path: '/CouponIssueP3GMKT', name: 'CouponIssueP3GMKT', component: () => import('@/views/CouponIssueP3GMKT') },
                { path: '/CouponIssueP3IACC', name: 'CouponIssueP3IACC', component: () => import('@/views/CouponIssueP3IACC') },
                { path: '/CouponIssueP4GMKT', name: 'CouponIssueP4GMKT', component: () => import('@/views/CouponIssueP4GMKT') },
                { path: '/CouponIssueP4IACC', name: 'CouponIssueP4IACC', component: () => import('@/views/CouponIssueP4IACC') },

                { path: '/ReportGMKT', name: 'ReportGMKT', component: () => import('@/views/ReportGMKT') },
                { path: '/ReportIACC', name: 'ReportIACC', component: () => import('@/views/ReportIACC') },
                { path: '/PriceGMKT', name: 'PriceGMKT', component: () => import('@/views/PriceGMKT') },
                { path: '/PriceIACC', name: 'PriceIACC', component: () => import('@/views/PriceIACC') },
                { path: '/PDFInformGMKT', name: 'PDFInformGMKT', component: () => import('@/views/PDFInformGMKT') },
                { path: '/PDFInformIACC', name: 'PDFInformIACC', component: () => import('@/views/PDFInformIACC') },
                { path: '/CatalogInformGMKT', name: 'CatalogInformGMKT', component: () => import('@/views/CatalogInformGMKT') },
                { path: '/CatalogInformIACC', name: 'CatalogInformIACC', component: () => import('@/views/CatalogInformIACC') }, 
                
                { path: '/EpSettingGMKT', name: 'EpSettingGMKT', component: () => import('@/views/EpSettingGMKT') },
                { path: '/EpSettingIACC', name: 'EpSettingIACC', component: () => import('@/views/EpSettingIACC') },
            ]
        },
        
    ],
});

export default router;
