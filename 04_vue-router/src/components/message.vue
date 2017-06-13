<template>
  <div>
    <ul>
      <li v-for="message in messages">
        <a v-link="{path: `/home/message/detail/${message.id}`}">{{message.title}}</a>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        messages: [
          {id: 1, title: 'Message01'},
          {id: 2, title: 'Message02'},
          {id: 3, title: 'Message03'},
          {id: 4, title: 'Message04'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>
