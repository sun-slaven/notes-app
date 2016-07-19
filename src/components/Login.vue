<template>
    <div class="container">
      登录页面
      <div>
        <input type="text" class="form-control" placeholder="请输入用户名" v-model="user.username"></input>
        <input type="text" class="form-control" placeholder="请输入密码" v-model="user.password"></input>
      </div>
      <button class="btn" @click="login">登录</button>
      <div class="errorMsg">
        {{errorMsg}}
      </div>
    </div>
</template>
<style>

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
          this.errorMsg = this.loginValidation(this.user)
          if(this.errorMsg === ''){
            this.$route.router.go({name: 'dashboard'})
          }
        }
      },

      vuex: {
        actions: {
          loginValidation
        }
      }
    }
</script>
