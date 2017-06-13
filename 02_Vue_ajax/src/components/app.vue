<template>
  <div class="container">
    <search :set-search="setSearch"></search>
    <list :search-name="searchName"></list>
  </div>
</template>

<script>
  import search from './search.vue'
  import list from './list.vue'
  export default {
    data () {
      return {
        searchName: ''
      }
    },
    components: {search, list},
    methods: {
      setSearch (searchName) {
        this.searchName = searchName
      }
    }
  }
</script>

<style></style>
