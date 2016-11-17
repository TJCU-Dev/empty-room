<template lang="pug">
mu-paper#control
  mu-date-picker(mode="landscape" hintText="选择那一天")
  mu-select-field(:value="大节")
    mu-menu-item(value="1" title="第一大节")
    mu-menu-item(value="2" title="第二️️大节")
    mu-menu-item(value="3" title="第三大节")
    mu-menu-item(value="4" title="第四大节")
    mu-menu-item(value="5" title="第五大节")
    mu-menu-item(value="6" title="第六大节")
  mu-select-field(:value="教学楼")
    mu-menu-item(value="1" title="1号教学楼")
    mu-menu-item(value="3" title="3号教学楼")
    mu-menu-item(value="4" title="4号教学楼")
    mu-menu-item(value="7" title="7号教学楼")
  mu-select-field(:value="有课无课")
    mu-menu-item(value="0" title="无课")
    mu-menu-item(value="1" title="有课")

  mu-flat-button(label="搜索" @click="search")
  mu-flat-button(label="test" @click="test")
</template>

<script>
import store from '../store'
import axios from 'axios'
import 'muse-ui/dist/muse-ui.css'
store.commit('test')
export default {
  data () {
    return {
      list: store.state.list
    }
  },
  methods: {
    test () {
      store.commit('test')
    },
    search () {
      axios.post('http://127.0.0.1:41893/room', {
        lou: '1',
        week: '5',
        jie: '1',
        ke: false
      }).then((res) => {
        store.commit('search', res)
      })
    }
  }
}
</script>

<style lang="stylus">
#control
  margin: 20px
  padding: 20px
  height: 500px
</style>
