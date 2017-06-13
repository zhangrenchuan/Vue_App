<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll"/>
    </label>
    <span>
      <span>已完成{{completeLength}}</span> / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger" v-show="completeLength>0" @click="removeAll">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    props: ['todos', 'removeCompleteTodos', 'checkAllTodos'],
    computed: {
      completeLength () {
        /*
        *   数组方法:
        *     forEach()
        *     map()
        *     filter()
        */
        // 得到包含所有完成todo 的数组
        var completeTodo = this.todos.filter(function (todo) {
          return todo.complete
        })

        // 返回长度
        return completeTodo.length
      },
      checkAll: {
        get () { // 得到当前全选按钮的状态
          var completeTodo = this.todos.filter(function (todo) {
            return !todo.complete
          })
          return completeTodo.length === 0 && this.todos.length > 0
        },
        set (val) { // 将全选按钮的状态同步到所有的todo里
          this.checkAllTodos(val)
        }
      }
    },
    methods: {
      removeAll () {
        if (window.confirm('確定删除吗?')) {
          this.removeCompleteTodos()
        }
      }
    }
  }
</script>

<style>
  /*footer*/
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
