<template>
    <footer class="main-footer">
      <strong>Copyright &copy; {{year}} <a href="javascript:;">Appcheckin</a>.</strong> All rights reserved.
    </footer>
</template>

<script>
export default {
  name: 'footer',
  data: function () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style>

</style>
