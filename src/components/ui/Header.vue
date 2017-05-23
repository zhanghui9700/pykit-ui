<template>
  <header class="main-header">
    <a href="/" class="logo">
      <!-- mini logo for sidebar mini 40x50 pixels -->
      <span class="logo-mini"><img src="/static/img/logo_blk_sm.png" alt="Logo" class="img-responsive center-block"></span>
      <!-- logo for regular state and mobile devices -->
      <div class="logo-lg">
        <img src="/static/img/logo_blk.png" alt="Logo" class="img-responsive">
        <span>{{ pageTitle }}</span>
      </div>
    </a>
    <header-nav></header-nav>
  </header> 
</template>

<script>

import config from '../../config'
import HeaderNav from './HeaderNav'

export default {
  name: 'header',
  data: function () {
    return {
      pageTitle: config.pageTitle
    }
  },
  components: {
    HeaderNav
  }
}
</script>

<style lang="scss">
.logo-lg {
  img {
    display: -webkit-inline-box;
    width: 25%;
  }
}
</style>
