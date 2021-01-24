<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      
    }
  },
  mounted() {
    //本地静态文件json mock数据
    // this.axios.get('/user/login').then(res=>{
    //   console.log(res);
    // })
    
  },
  methods: {
    open () {
      this.$message({
          type: 'success',
          message: '居中的文字',
          center: true
        });
    }
  },
}
</script>

<style lang="scss">
  @import "./assets/scss/reset.scss";
  @import "./assets/scss/config.scss";
  @import "assets/scss/button.scss";
</style>
