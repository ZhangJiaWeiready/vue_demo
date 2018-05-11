<template>
  <div class="todo-footer" >
    <label>
      <input type="checkbox" v-model='isAll' disabled ref='isDis'/>
    </label>
    <span>
          <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger" @click='deleteItem'>清除已完成任务</button>
  </div>
</template>

<script>
    export default {


      props: {
        todos: Array,
        deleteCompleteTodos: Function,
        selectAll:Function
      },

      computed: {
        completeSize (){
          //需要遍历它 true的个数
          return this.todos.reduce( (preNum,item) => preNum+(item.complete?1:0),0)
        },

        isAll :{
          get () { //决定是否勾选
            return this.completeSize === this.todos.length && this.completeSize>0
          },
          set (value){
              this.selectAll(value)
          }
        },


      },

      methods :{
        deleteItem (){
          if (this.completeSize>0){
            if (window.confirm("确认删除？" )){
              //点击删除按钮todos 只剩下 未完成的项
              this.deleteCompleteTodos()
            }
          } else {
            alert('请确认完成任务')
          }


        }
      },

      beforeUpdate(){
          if (this.todos.length>0){
            console.log(this.todos.length)
            this.$refs.isDis.disabled=false
          }
      },
      updated(){
        if (this.todos.length===0){
          console.log(this.todos.length)
          this.$refs.isDis.disabled=true
        }
      }


    }
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
