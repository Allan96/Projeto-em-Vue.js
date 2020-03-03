<template>
    <div>
    <div id="menu-lateral" class="bgc-blue c-white">
        <img src="https://app.cashforce.com.br/templates/CashFront/assets/img/logo-cashforce.svg" alt="" class="img-fluid">
        <hr class="mb-5">
        <router-link to="./">
            <h3 class="medium c-white">Dashboard</h3>
        </router-link>
        <router-link to="./">
            <h3 class="medium c-white mt-3">Sair</h3>
        </router-link>
    </div>
    <nav class="navbar navbar-expand-sm navbar-dark bgc-blue c-white">
        <div class="container">
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mt-2  ml-auto mt-lg-0 d-flex align-items-center">
                    <li class="nav-item c-white">
                        <a class="nav-link bold">ALLAN SOUZA</a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>
<style lang="scss" scoped>
    .c-white {
        color: #fff !important;
    }
    
    .bgc-blue {
        background-color: #021B51 !important;
    }
    
    nav {
        width: calc( 100% - 240px);
        float: right;
    }
    
    #menu-lateral {
        width: 240px;
        min-height: 100vh;
        position: fixed;
        float: left;
        padding: 24px;
        a {
            h3 {
                font-size: 16px;
                line-height: 16px;
            }
            &:hover {
                text-decoration: none;
            }
        }
        hr {
            border: 0.5px solid rgba(241, 245, 251, 0.4);
            margin: 16px 0;
        }
    }
</style>