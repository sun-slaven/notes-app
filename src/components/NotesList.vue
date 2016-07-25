<template>
  <div id="notes-list">
    <div id="list-header">
      <h3>Notes | sunwenfeng.com</h3>
      <div class="btn-group btn-group-justified" role="group">
        <!-- all -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
                  @click="toggleShow('all')"
                  :class="{active: show === 'all'}">All Notes</button>
        </div>

        <!-- favorites -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
                  @click="toggleShow('favorite')"
                  :class="{active: show === 'favorite'}">Favorites</button>
        </div>
      </div>
    </div>

    <!-- 渲染笔记列表 -->
    <div id="list-body">
      <div class="list-group">
        <a v-for="note in filteredNotes"
           class="list-group-item" href="#"
           :class="{active: activeNote === note}"
           @click="updateActiveNote(note)">
          <h4 class="list-group-item-heading">
            {{note.title.trim().substring(0,30)}}
          </h4>
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped>
  #notes-list{
    width: 30%;
    float: left;
    height: 100%;
    background-color: #F5F5F5;
  }
  #list-header {
    padding-left: 30px;
    padding-right: 30px;
  }
  #list-body {
    padding-top: 20px;
  }
  .list-group-item.active {
    border-radius: 0px;
    background: #337ab7;
  }
  .list-group-item.active .list-group-item-heading{
    color: #ffffff !important;
  }
</style>
<script>
  import { updateActiveNote, updateShow } from '../vuex/actions';
  import { show, filteredNotes, activeNote } from '../vuex/getters';
  export default{
    vuex: {
      getters: {
        show,//调用相当于updateActiveNote（vm.$store.state）
        filteredNotes,
        activeNote
      },
      actions: {
        updateActiveNote,//调用相当于updateActiveNote（vm.$store, note）
        updateShow
      }
    },
    methods: {
      toggleShow(show) {
        this.updateShow(show);
      }
    }
  }
</script>
