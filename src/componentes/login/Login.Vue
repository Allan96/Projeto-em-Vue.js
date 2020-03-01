<template>
  <header>
  <div class="container">
      <div class="row d-flex align-content-center justify-content-center">
        <div class="col-5">
        <form>
          <h1 class="text-center mb-4">
            ACESSAR A PLATAFORMA
          </h1>
          <div class="form-group">
            <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Seu e-mail">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Sua senha">
          </div>

          <button type="submit" class="btn btn-primary w-100">Continuar</button>
          </form>
          </div>

      </div>
  </div>
</header>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    header {
        background: #1f2a50;
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