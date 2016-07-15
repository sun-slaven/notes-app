<template>
  <div id="app" class="app">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor v-if="activeNote"></editor>
  </div>
</template>

<script>
  import Toolbar from './Toolbar';
  import NotesList from './NotesList';
  import Editor from './Editor';
  import store from '../vuex/store'
  import { activeNote } from '../vuex/getters';
  import { initStore } from '../vuex/actions';


  export default {
    components: {
      Toolbar,
      NotesList,
      Editor
    },
    store,
    vuex: {
      //此处的actions用来被当前页面以及js环境使用
      actions: {
        initStore
      },
      getters: {
        activeNote
      }
    },
    ready() {
      this.initStore()
    }
  }
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
  #app {
    height: 100%;
  }
</style>
