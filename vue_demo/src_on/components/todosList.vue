<template>
  <ul class="todo-main" >
      <TodoItems v-for='(item,index) in todos' :key='index' :item='item'
                 :index="index"
                 :deleteTodo='deleteTodo'

      />
  </ul>
</template>

<script>
  import TodoItems from './todosItems.vue'
    export default {
      props :['todos','deleteTodo'],
      components: {TodoItems},
      /*
      * props  -- 用来声明传递过来的值
      *   props {} --比较麻烦一点  todos:Object || todos:{type:Object ...}
      *   props [] -- 简单 直接写
      * */
    }
</script>

<style scoped>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }


</style>
