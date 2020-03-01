<template>
  <header>
  <div class="container">
      <div class="row d-flex align-content-center justify-content-center">
        <div class="col-5">
        <form  @submit.prevent="login()">
          <h1 class="text-center mb-4">
            ACESSAR A PLATAFORMA
          </h1>
          <div class="form-group">
            <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Seu e-mail" v-model="email">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Sua senha" v-model="senha">
          </div>

          <button type="submit" class="btn btn-primary w-100 mt-3">Continuar</button>
          </form>
          </div>

      </div>
  </div>
</header>
</template>

<script>
    export default {
        data() {
            return {
                email: "",
                senha: ""
            }
        },
        methods: {
            login() {
                this.$http.post('http://localhost:3333/login', {
                        email: this.email,
                        password: this.senha,
                    })
                    .then((res) => console.log(res.body))
                    .catch((error) => console.log(error))
            }
        }
    }
</script>

<style lang="scss" scoped>
    header {
        background: url(https://app.cashforce.com.br/templates/CashFront/assets/img/bg-login.png);
        background-size: cover;
        background-position: center;
        .row {
            height: 100vh;
            form {
                background: white;
                padding: 32px 16px;
                border-radius: 5px;
                h1 {
                    font-size: 24px;
                    line-height: 31px;
                    font-weight: bold;
                    color: #021B51;
                }
            }
        }
    }
    
    button {
        background: #021B51;
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        padding: 12px 0px;
        border: 0;
        transition: .5s;
        &:hover {
            background: #25DFB8;
        }
    }
    
    input {
        text-transform: none;
        border: 0;
        border-bottom: 1px solid rgba(235, 237, 242, 0.8);
        border-radius: 0;
        &:active,
        &:focus,
        &:hover {
            outline: none;
            box-shadow: none;
        }
    }
</style>