<template>
  <div id="dashboard" class="dashboard">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor v-if="activeNote"></editor>
  </div>
</template>

<script>
  import Toolbar from '../components/Toolbar';
  import NotesList from '../components/NotesList';
  import Editor from '../components/Editor';
  import { activeNote } from '../vuex/getters';
  import { initStore } from '../vuex/actions';


  export default {
    components: {
      Toolbar,
      NotesList,
      Editor
    },
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

<style scoped>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
  #dashboard {
    height: 100%;
  }
</style>
