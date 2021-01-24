<template>
  <div class="home">
      <nav-header></nav-header>
      <router-view></router-view>
      <nav-footer></nav-footer>
  </div>
</template>
<script>
// @ is an alias to /src
import NavHeader from '../components/navHeader.vue';
import NavFooter from '../components/navFooter.vue';
export default {
  name: 'Home',
  components: {
    NavHeader,
    NavFooter
  }
}
</script>

<style lang="scss">
  .home {

  }
</style>
