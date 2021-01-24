import Vue from 'vue'
import Vuex from 'vuex'
import Mutations from './mutations';
import Actions from './actions'

Vue.use(Vuex)

const State = {
  username:"",
  cartCount:0
}
export default new Vuex.Store({
  State,
  Mutations,
  Actions
})
