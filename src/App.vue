<template>
  <router-view></router-view>
</template>

<script>
import Login from './componentes/login/Login.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default {
   components: {
    Login
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
</style>
