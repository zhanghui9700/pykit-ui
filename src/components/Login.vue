<template>
  <div class="container container-table">
      <div class="row vertical-10p">
        <div class="container">
          <img src="/static/img/logo.png" class="center-block logo">
          <div class="text-center col-md-4 col-sm-offset-4">
            <!-- login form -->
            <form class="ui form loginForm"  @submit.prevent="doLogin">

              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                <input class="form-control" name="username" placeholder="Username" type="text" v-model="username">
              </div>

              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                <input class="form-control" name="password" placeholder="Password" type="password" v-model="password">
              </div>
              <button type="submit" v-bind:class="'btn btn-primary btn-lg ' + loading">Submit</button>
            </form>

            <!-- errors -->
            <div v-if=response class="text-red"><p>{{response}}</p></div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

import Auth from '@/api/auth'
import constant from '@/constant'
import config from '@/config'

export default {
  name: 'Login',
  data (router) {
    return {
      section: 'Login',
      loading: 'loading',
      username: '',
      password: '',
      response: ''
    }
  },
  methods: {
    doLogin () {
      const {username, password} = this
      Auth.login({username, password})
        .then(response => {
          console.log('login ok')
          constant.auth.token = response.data.token
          this.$router.push({name: config.indexURL})
        })
        .catch(error => {
          console.log(error)
          this.response = error.message
        })
    },
    toggleLoading () {

    },
    resetResponse () {
      this.response = ''
    }
  }
}
</script>

<style>	
html, body, .container-table {
  height: 100%;
  background-color: #282B30 !important;
}
.container-table {
    display: table;
    color: white;
}
.vertical-center-row {
    display: table-cell;
    vertical-align: middle;
}
.vertical-20p {
  padding-top: 20%;
}
.vertical-10p {
  padding-top: 10%;
}
.logo {
  width: 15em;
  padding: 3em;
}
.loginForm .input-group {
  padding-bottom: 1em;
  height: 4em;
}
.input-group input {
  height: 4em;
}
</style>
