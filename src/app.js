import Vue from 'vue'
import VueResource from 'vue-resource';
import Vuex from 'vuex';
import 'es6-promise/auto';

import router from './router/';
import App from './App.vue';


Vue.use(Vuex)
Vue.use(VueResource);


new Vue({
    el: '#app',
    router,
    render: h => h(App)
})