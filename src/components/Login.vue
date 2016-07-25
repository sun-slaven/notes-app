<template>
    <div class="container login-page">
      <h3>欢迎登录</h3>
      <div>
        <input type="text" class="form-control" placeholder="请输入用户名" v-model="user.username" @keyup.enter="login"></input>
        <input type="text" class="form-control" placeholder="请输入密码" v-model="user.password" @keyup.enter="login"></input>
      </div>
      <div class="submit">
        <button class="btn btn-info" :class="{'disabled': canSubmit}" @click="login">登录</button>
      </div>
      <div class="errorMsg">
        {{errorMsg}}
      </div>
    </div>
</template>
<style scoped>
   h3{
     margin-bottom: 30px;
   }
  .login-page {
    position: absolute;
    top: 30%;
    bottom: auto;
    left: 20%;
    right: 20%;
    width: 30%;
    text-align: center;
    background: floralwhite;
    opacity: 0.9;
    border-radius: 5px;
    padding-bottom: 30px;
  }
  input{
    margin-bottom: 10px;
  }
  .submit{
    text-align: center;
    button{
      width: 150px;
    }
  }
  .errorMsg{
    color: red;
    text-align: center;
  }
</style>
<script>

    import { loginValidation } from '../vuex/actions'


    export default{
      data: function () {
        return{
          user: {
            username: '',
            password: ''
          },
          errorMsg: ''
        }
      },
      methods: {
        login(){
          if(this.user.username && this.user.password){
            this.errorMsg = this.loginValidation(this.user)
            if(this.errorMsg === ''){
              this.$route.router.go({name: 'dashboard'})
            }
          }
        }
      },
      computed:  {
        canSubmit: function () {
          console.log(this.user.username && this.user.password)
          if(this.user.username && this.user.password){
            return false;
          }
          return true;
        }
      },
      vuex: {
        actions: {
          loginValidation
        }
      }
    }
</script>
