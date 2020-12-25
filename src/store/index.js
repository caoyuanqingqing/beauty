import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowFooter:true,
  },
  mutations: {
    //控制底部导航的显示
    isShowFooterNav(state,val){
      state.isShowFooter = val
    },
  },
  actions: {
  },
  modules: {
  }
})
