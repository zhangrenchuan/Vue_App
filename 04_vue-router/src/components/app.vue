<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Router DEMO</h2>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-xs-2 col-xs-offset-2">
      <div class="list-group">
        <!--使用指令v-link进行导航-->
        <a class="list-group-item" v-link="{path:'/about'}">about</a>
        <a class="list-group-item" v-link="{path:'/home'}">home</a>
      </div>
    </div>

    <div class="col-xs-6">
      <div class="panel">
        <div class="panel-body">
          <!--用于渲染匹配的组件-->
          <router-view keep-alive :msg="msg"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: {title: '你好', la: '呵呵'}
      }
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>

<style scoped>

</style>
