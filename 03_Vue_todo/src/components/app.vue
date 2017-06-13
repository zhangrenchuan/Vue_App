<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo_header @add="addTodo"></todo_header>
      <list :todos="todos"></list>
      <foot :todos="todos" :remove-complete-todos="removeCompleteTodos" :check-all-todos="checkAllTodos"></foot>
    </div>
  </div>
</template>

<script>
  import header from './header.vue'
  import list from './list.vue'
  import foot from './footer.vue'
  import storage from '../util/storage'
  export default {
    data () {
      return { // 如果没有返回空[]
        todos: storage.getTodos()
      }
    },
    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      removeTodo (index) {
        this.todos.splice(index, 1)
      },
      removeCompleteTodos () {
        this.todos = this.todos.filter(function (todo) {
          return !todo.complete
        })
      },
      checkAllTodos (check) {
        this.todos.forEach(function (item) {
          item.complete = check
        })
      }
    },
    components: {
      'todo_header': header,
      list,
      foot
    },
    watch: {
      todos: {
        deep: true, // 深度监视
        handler: function (val, oldVal) {
          // 保存到localStorage
          storage.saveTodos(val)
        }
        // handler: storage.saveTodos
      }
    },
    events: {
      'remove': function (index) {
        this.removeTodo(index)
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
