<template>
  <div id="note-editor">
    <div class="form-group">
      <input type="text" name="title"
             class="title form-control"
             placeholder="请输入标题"
             v-model="title">
      <textarea
        v-model="content" name="content"
        class="form-control" row="3" placeholder="请输入正文"
        ></textarea>
    </div>
    <div class="form-group">
      <button class="btn btn-info" @click="updateNote">保存</button>
    </div>
  </div>
</template>
<style>
  #note-editor{
    width: 60%;
    float: left;
    padding: 30px 70px;
  }
  input {
    margin: 10px 0px;
  }
  .form-group:last-child {
    text-align: center;
  }
</style>
<script>
  import { editNote } from '../vuex/actions';
  import { activeNote } from '../vuex/getters';
  export default{
    data: function () {
      return {
        title: {
          default: this.activeNote.title
        },
        content: {
          default: this.activeNote.content
        }
      }
    },
    watch: {
      'activeNote': function (newValue) {
        this.title = newValue.title
        this.content = newValue.content
      }
    },
    vuex: {
      getters: {
        activeNote
      },
      actions: {
        editNote
      }
    },
    computed: {
      currentNote: function () {
        const updatedNote = Object.assign({},this.activeNote)
        if(this.title){
          updatedNote.title = this.title
        }
        if(this.title){
          updatedNote.content = this.content
        }
        return updatedNote
      }
    },
    methods: {
      updateNote(){
        this.editNote(this.currentNote)
      }
    }


  }
</script>
