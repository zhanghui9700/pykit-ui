<template>
  <ul class="sidebar-menu">
    <li class="header">Cloud</li>
    <li class="active pageLink" @click="toggleMenu">
      <router-link :to="{name: 'overview'}">
        <i class="fa fa-dashboard"></i>
        <span class="page">Overview</span>
      </router-link>
    </li>
    <li class="pageLink" @click="toggleMenu">
      <router-link :to="{name: 'instance'}">
        <i class="fa fa-cloud"></i>
        <span class="page">Instances</span>
      </router-link>
    </li>
    <li class="pageLink" @click="toggleMenu">
      <router-link :to="{name: 'volume'}">
        <i class="fa fa-hdd-o"></i>
        <span class="page">Volumes</span>
      </router-link>
    </li>
    <li class="pageLink" @click="toggleMenu">
      <router-link :to="{name: 'network'}">
        <i class="fa fa-globe"></i>
        <span class="page">Networks</span>
      </router-link>
    </li>

    <li class="header">Billing</li>
    <li class="pageLink" @click="toggleMenu">
      <router-link :to="{name: 'instance'}">
        <i class="fa fa-credit-card"></i>
        <span class="page">Orders</span>
      </router-link>
    </li>

    <li class="header">Pages</li>
    <li class="pageLink" @click="toggleMenu">
      <router-link :to="{name: 'login'}">
        <i class="fa fa-circle-o text-yellow"></i>
        <span class="page">Login</span>
      </router-link>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'SidebarMenu',
  methods: {
    toggleMenu (event) {
      let active = document.querySelector('li.pageLink.active')
      if (active) {
        active.classList.remove('active')
      }

      event.toElement.parentElement.className = 'pageLink active'
    }
  }
}

</script>

<style>
</style>
