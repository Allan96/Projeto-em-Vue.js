import Vue from 'vue'
import VueResource from 'vue-resource';
import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'

import App from './App.vue'

Vue.use(VueGoodTablePlugin);
Vue.use(VueResource);

new Vue({
    el: '#app',
    render: h => h(App)
})