import Login from './componentes/login/Login.vue';
import Dashboard from './componentes/dashboard/Dashboard.vue';
export const routes = [
    { path: '', component: Login },
    { path: '/dashboard', component: Dashboard },
];