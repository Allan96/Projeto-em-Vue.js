import Vue from 'vue'
import VueResource from 'vue-resource';
import Vuex from 'vuex'
import 'es6-promise/auto'
import VueRouter from 'vue-router';

import { routes } from './routes';
import App from './App.vue';


Vue.use(Vuex)
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})