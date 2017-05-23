<template>
  <div :class="['wrapper', classes]">
    <x-header />
    <x-sidebar />
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>
          {{$route.name.toUpperCase() }}
          <small>{{ $route.meta.description }}</small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="javascript:;"><i class="fa fa-home"></i>Home</a></li>
          <li class="active">{{$route.name.toUpperCase()}}</li>
        </ol>
      </section>
      <router-view></router-view>
    </div>
    <x-footer />
  </div>
</template>
<script>

import config from '@/config'

import xFooter from '@/components/ui/Footer'
import xHeader from '@/components/ui/Header'
import xSidebar from '@/components/ui/Sidebar'

export default {
  name: 'Dash',
  components: {
    xHeader,
    xFooter,
    xSidebar
  },
  data: function () {
    return {
      classes: {
        fixed_layout: config.fixedLayout,
        hide_logo: config.hideLogoOnMobile
      }
    }
  }
}

</script>

<style>
</style>

