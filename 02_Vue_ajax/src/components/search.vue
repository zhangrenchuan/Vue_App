<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="name"/>
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['setSearch'],
    data () {
      return {
        name: ''
      }
    },
    methods: {
      search () {
        var name = this.name.trim()
        if (!name) {
          return
        }
        this.setSearch(name)
      }
    }
  }
</script>

<style scoped>

</style>
