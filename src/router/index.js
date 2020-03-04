import Vue from 'vue'
import VueRouter from 'vue-router';

import Login from '../componentes/login/Login.vue';
import DashboardLayout from '../layouts/Dashboard.vue';
import Notas from '../pages/painel/notas/Index';
import Dashboard from '../pages/painel/dashboard/Index';


Vue.use(VueRouter);


const routes = [
    { path: '', component: Login },
    {
        path: '/dashboard',
        component: DashboardLayout,
        children: [{
                path: '',
                component: Dashboard,
            },
            {
                path: 'notas',
                component: Notas,
            },
        ]
    },
];


const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router