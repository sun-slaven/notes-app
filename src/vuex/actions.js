/**
 * Created by slaven on 16-7-14.
 */

//此处不需要import store.js

// 一种chunk写法，封装
function makeAction(type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args);
};

const initNote = {
  id: new Date(),
  title: '我的笔记',
  content: '第一篇笔记内容',
  favorite: false
};

// 模拟初始化数据
const initData = {
  show: 'all',
  notes: [initNote],
  activeNote: initNote
};

//模拟用户登录信息
const correctUser = {
  username: "slaven",
  password: '123456'
};

export const initStore = ({ dispatch }) => {
  dispatch('INIT_STORE', initData);
};
// 更新当前activeNote对象
export const updateActiveNote = makeAction('SET_ACTIVE_NOTE');

// 添加一个note对象
export const newNote = makeAction('NEW_NOTE');

// 删除一个note对象
export const deleteNote = makeAction('DELETE_NOTE');
export const toggleFavorite = makeAction('TOGGLE_FAVORITE');
export const editNote = makeAction('EDIT_NOTE');

// 更新列表展示
export const updateShow = makeAction('SET_SHOW_ALL');

//用户登录
export const loginValidation  = (store,user) => {
  if (user.username == correctUser.username && user.password == correctUser.password){
    store.dispatch('CHANGE_LOGGED_STATE')
    return ''
  }else{
    return 'incorrect username or password!'
  }
}
