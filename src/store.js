import Vue from 'vue'
import Vuex from 'vuex'
import * as Action from './action'
import axios from 'axios'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    list: [],
    data: []
  },
  mutations: {
    test: async (state) => {
      const Data = await axios.get('http://127.0.0.1:41893/room/test')
      state.list = Action.DataToList(Data.data)

      state.data = Data.data
    },
    search: (state, data) => {
      const Data = data
      state.list = Action.DataToList(Data.data)
    }
  }
})

export default store
