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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
