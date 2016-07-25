<template>
  <div id="root">
    <!--<note-header></note-header>-->
    <router-view></router-view>
    <!--<note-footer></note-footer>-->
  </div>

</template>
<style>
  html {
    height: 100%;
  }

  body {
    display: flex;
    justify-content: center;
    height: 100%;
  }
  #root {
    width: 100%;
  }
</style>
<script>
  import store from './vuex/store'

  export default{
    component: {
//        noteHeader,//作为切换视图的公共区
//        noteFooter
    },
    store//在此处初始化vuex，即根组件内
  }
</script>
