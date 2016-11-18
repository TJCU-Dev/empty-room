import Vue from 'vue'
import Vuex from 'vuex'
import * as Action from './action'
import axios from 'axios'
import roomlist from './list.json'
// import moment from 'moment'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    list: [],
    data: [],
    dirt: roomlist,
    jie: Action.isDate(),
    lou: '1',
    ke: '1',
    week: Action.week(),
    xinqi: Action.xinqi(),
    zhou: Action.zhou(),
    ceng: '0'
  },
  mutations: {
    test: async (state) => {
      const Data = await axios.get('http://115.159.217.96:41893/room/test')
      state.list = Action.DataToList(Data.data)
      state.data = Data.data
    },
    search: (state, data) => {
      const Data = data
      state.list = Action.DataToList(Data.data)
    },
    change: (state, key, data) => {
      state[key] = data
      console.log(key)
      console.log(data)
    },
    jiechange: (state, data) => {
      console.log(data)
      state['jie'] = data
    },
    louchange: (state, data) => {
      console.log(data)
      state['lou'] = data
    },
    kechange: (state, data) => {
      console.log(data)
      state['ke'] = data
    },
    xinqichange: (state, data) => {
      console.log(data)
      state['xinqi'] = data
    },
    zhouchange: (state, data) => {
      console.log(data)
      state['zhou'] = data
    },
    cengchange: (state, ceng) => {
      state.ceng = ceng.toString()
      if (ceng !== 0 && ceng > 0) {
        state.list = Action.DataToList(state.data.filter((d) => d['房间'][0] === ceng))
      } else {
        state.list = Action.DataToList(state.data)
      }
    }
  }
})

export default store
