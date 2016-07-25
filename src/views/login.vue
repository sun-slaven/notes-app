<template>
  <div id="background">
    <Login></Login>
    <!--<Register></Register>-->
  </div>
</template>
<style scoped>
 #background {
   background-image: url('../assets/login_background.jpg');
   background-size: cover;
   background-repeat: no-repeat;
   height: 100%;
   width: 100%;
 }
</style>
<script>
    import Login from '../components/Login'
    export default{
        components: {
          Login
        }
    }
</script>
