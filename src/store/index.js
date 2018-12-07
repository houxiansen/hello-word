import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  color: 'red'
}
const store = new Vuex.Store({
  state,
  mutations: {
    UPDATE_COLOR(state, color) {
      state.color = color
    }
  },
  actions: {

  }
})
export default store
