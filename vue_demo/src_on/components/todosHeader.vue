<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认"
           v-model='inputContent'
           @keyup.enter='add'/>
  </div>
</template>

<script>
    export default {
    /*props:{
      'addTodo':Function
    },*/
    data () {
        return {
          inputContent: ''
        }
    },
    methods: {
      add (){
        //得到输入的数据
        const inputContent = this.inputContent.trim()
        //检查合法性
        //如果没输入内容直接返回不执行下面的逻辑
        if (!inputContent) {
          alert('请输入内容')
          return
        }
        //封装一个todo对象
        const todo = {
          complete: false,
          title: inputContent
        }
        // 将它添加到todos中
        // this.addTodo(todo)
        //添加事件 然后将数据分发过去
        this.$emit('addTodo',todo)
        // 最后清空input
        this.inputContent = ''
      }
    }


    }
</script>

<style scoped>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
