import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  user: {
    id: null,
    name: null,
  },
  isShowFooter: true,
  activeTypeIndex: 0,
  taskList: [{
    id: 1,
    text: '100个高抬腿'
  },{
    id: 2,
    text: '10分钟冥想'
  },{
    id: 3,
    text: '半小时阅读'
  }],
  taskFinishStatus: {
    
  }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    strict: debug,
})
