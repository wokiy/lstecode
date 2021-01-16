<template>
  <div class="home">
      <p>header组件</p>
      <router-view></router-view>
      <p>footer组件</p>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {

  }
}
</script>

<style lang="scss">
  .home {
    font-size: 18px;
    .item {
      font-size: 18px;
    }
  }
</style>
