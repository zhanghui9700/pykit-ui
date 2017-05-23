<template>
  <aside class="main-sidebar">
    <section class="sidebar">

      <div class="user-panel">
        <div class="pull-left image">
          <img :src="pictureUrl" />
        </div>
        <div class="pull-left info">
          <div>
            <p class="white">{{ displayName }}</p>
          </div>
          <a href="javascript:;">
            <i class="fa fa-circle text-success"></i> Online
          </a>
        </div>
      </div>

      <sidebar-menu />

    </section>
  </aside>
</template>

<script>
import SidebarMenu from './SidebarMenu'

export default {
  name: 'Sidebar',
  props: ['displayName', 'pictureUrl'],
  components: {
    SidebarMenu
  }
}
</script>

<style>

</style>
