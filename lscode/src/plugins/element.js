import Vue from 'vue'
import { Button } from 'element-ui';
import { Message } from 'element-ui';
// Vue.use(Message)
Vue.prototype.$message = Message;
Vue.use(Button)
