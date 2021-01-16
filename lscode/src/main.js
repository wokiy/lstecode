import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import VueAxios from "vue-axios";
import VueCookie from 'vue-cookie';
import store from './store'
import './plugins/element';
// 设置mock开关 需要mock时候再开启
const mock = false;
if(mock) {
  require('./mock/api');
}

//根据环境变量切换不同的请求地址
// axios.defaults.baseUrl = env.baseUrl;
axios.defaults.baseURL = '/api',
//请求超时设置
axios.defaults.timeout = 5000;
//设置响应拦截
//前台系统中只对响应拦截
axios.interceptors.response.use(response =>{
  //1:获取响应的数据
  let res = response.data;
  let path = location.hash;
  //2:根据返回对数据判断 此次响应的状态 根据状态处理不同的路由跳转
  if(res.status === 0) {
    return res.data;
  }else if(res.status === 10) {
    if(path != '/index') {
      window.location.href = '/#/login'
    }
    return Promise.reject(res)
  }else {
    this.$message({
      type:'warning',
      message: res.msg,
    })
    return Promise.reject(res)
  }
},(err)=>{
  //获取错误信息
  let res = err.response;
  this.$message({
    type: 'error',
    message: res,
  })
  return Promise.reject(res);
})


//插件引用
Vue.use(VueAxios,axios);
// this.axios.get('/xxxx').then(res=>{
//   console.log(res);
// })
Vue.use(VueCookie);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
