<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 给它硬绑定 数据 传递数据到 子组件 子组件需要声明这个传递的数据-->
        <!--addtodo的回调函数 后面是回调函数-->
        <!--<TodosHeader @addTodo='addTodo'/>-->
        <TodosHeader ref='header'/>
        <TodosList :todos='todos' :deleteTodo='deleteTodo'/>
        <TodosFooter :todos='todos' :deleteCompleteTodos='deleteCompleteTodos' :selectAll='selectAll'/>
      </div>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import TodosHeader from './components/todosHeader.vue'
  import TodosList from './components/todosList.vue'
  import TodosFooter from './components/todosFooter.vue'
  import localStroage from './util/storageUtil'
  export default {

    components: {// 首先必须映射成标签
      TodosHeader,
      TodosList,
      TodosFooter
    },
    mounted (){
      // this.$on('addTodo',this.addTodo) // 绑定监听的目标不对 现在是给当前的组件对象绑定的监听
      //为什么要放在mouted中   --- 监听事件 触发回调函数 是一个异步的过程
      //事件和 订阅消息都是异步
      this.$refs.header.$on('addTodo',this.addTodo) // 后面跟事件名 和回调函数
      PubSub.subscribe('delete_todo', (msg, index) => {
        //this不是当前组建对象
        this.deleteTodo(index)
      })
    },
    data () {
      return {
        // 从本地存储获取  打开浏览器还是上一次的数据
        // 但是 存的数据是json格式 所以需要转换成 对象
        todos: localStroage.getStorge()
      }
    },
    methods: {
      addTodo (todo){
        // todos 是从存储的地方获取下的数组  添加信息的时候 会发生变化，然后给监视上，当内部发生改变的时候就将改变值添加到本地存储中
        // 两者只有获取的关系 设置全凭借监视
        this.todos.unshift(todo)
      },
      deleteTodo (index){
        this.todos.splice(index, 1)
      },
      deleteCompleteTodos (){
        // 调用这个函数 只剩下 未完成的消息
        this.todos = this.todos.filter(todo => !todo.complete)
      },
      //全选还是全不选
      selectAll (selectAll){
        /*if (selectAll){
          this.todos.forEach(todo => todo.complete = true  )
        }else {
          this.todos.forEach(todo => todo.complete = false  )
        }*/

        this.todos.forEach(todo => todo.complete = selectAll)
      }
    },
    watch: {
      todos: {
        deep: true, //深度监视
        /*handler: function (val) {
          localStroage.saveStorge(val)
        }*/
        // 可简写因为都是为了触发回调函数 当触发回调函数的时候会把val自动传入
        handler:localStroage.saveStorge
      }
    }
  }
</script>

<style>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
