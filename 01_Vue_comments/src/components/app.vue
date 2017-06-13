<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <add :add="add"></add>
      <list :comments="comments" :remove="remove"></list>
    </div>
  </div>
</template>

<script>
  import add from './add.vue'
  import list from './list.vue'
  export default {
    data () {
      return {
        comments: [
          {name: '北京人', content: '我们有烤鸭'},
          {name: '天津人', content: '我们有麻花'},
          {name: '青岛人', content: '我们有啤酒'}
        ]
      }
    },
    methods: {
      add (comment) {
        this.comments.unshift(comment)
      },
      remove (comment) {
        this.comments.$remove(comment)
      }
    },
    components: {
      add, list
    }
  }
</script>

<style></style>
