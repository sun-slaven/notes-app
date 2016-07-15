<template>
  <div id="toolbar">
    <i class="glyphicon logo"><img src="../assets/logo.png" width="30" height="30"></i>
    <i @click="newNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite" class="glyphicon glyphicon-star" :class="{starred: activeNote && activeNote.favorite}"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>
  import { newNote, deleteNote, toggleFavorite } from '../vuex/actions';
  import { activeNote } from '../vuex/getters';

export default {
  //每个component实例都可以使用vuex选项来获取相应的接口
  vuex: {
    //vuex选项中注册getters获取getters文件中暴露的getter接口，本页面中的js可以使用，而行为为actions选项
    getters: {
      activeNote
    },
    actions: {
      newNote,
      deleteNote,
      toggleFavorite
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
  #toolbar {
    width: 80px;
    background-color: #30414D;
    height: 100%;
    float: left;
    color: #767676;
    padding: 35px 25px 25px 25px;
  }
  i {
    font-size: 30px;
    padding: 20px 0px;
    cursor: pointer;
  }
  .starred {
    color: yellow;
  }
</style>
