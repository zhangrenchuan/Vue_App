<template>
  <div>
    <h2>home组件</h2>
    <input type="text">
    <p>{{msg | json}}</p>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <a v-link="{path: '/home/news'}">News</a>
        </li>
        <li>
          <a v-link="{path: '/home/message'}">message</a>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['msg'],
    data () {
      return {}
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>

<style scoped>

</style>
