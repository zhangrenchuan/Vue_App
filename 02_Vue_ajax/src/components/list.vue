<template>
  <h2 v-show="firstView">Enter name to search</h2>
  <h2 v-show="loading">Loading...</h2>
  <h2 v-show="errorMsg">{{errorMsg}}</h2>
  <div class="row" v-show="users">
    <div class="card" v-for="user in users">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['searchName'],
    data () {
      return {
        firstView: true,
        loading: false,
        errorMsg: null,
        users: null
      }
    },
    computed: {
      searchName: {
        set (val) {
          this.firstView = false
          this.loading = true

          var url = `https://api.github.com/search/users?q=${val}`
          this.$http.get(url).then(response => {
            this.loading = false
            this.users = response.body.items.map(function (item) {
              return {
                avatar_url: item.avatar_url,
                login: item.login,
                html_url: item.html_url
              }
            })
          }, response => {
            this.loading = false
            this.errorMsg = response.statusText
          })
        }
      }
    }
  }
</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
