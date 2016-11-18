<template lang="pug">
mu-paper#control
  mu-flexbox(orient="vertical")
    mu-flexbox-item
      mu-date-picker(mode="landscape" v-model="week" @change='weekchange' hintText="选择那一天")
    mu-flexbox-item
      mu-select-field(label="第几大节" v-model="jie" @change='jiechange')
        mu-menu-item(value="1" title="第一大节")
        mu-menu-item(value="2" title="第二️️大节")
        mu-menu-item(value="3" title="第三大节")
        mu-menu-item(value="4" title="第四大节")
        mu-menu-item(value="5" title="第五大节")
        mu-menu-item(value="6" title="第六大节")
    mu-flexbox-item
      mu-select-field(label="教学楼" v-model="lou" @change='louchange')
        mu-menu-item(value="1" title="1号教学楼")
        mu-menu-item(value="3" title="3号教学楼")
        mu-menu-item(value="4" title="4号教学楼")
        mu-menu-item(value="7" title="7号教学楼")
    mu-flexbox-item
      mu-select-field(label="有课无课" v-model="ke" @change='kechange')
        mu-menu-item(value="0" title="无课")
        mu-menu-item(value="1" title="有课")
    mu-flexbox-item
      mu-select-field(label="楼层" v-model="ceng" @change='cengchange')
        mu-menu-item(value="0" title="全部")
        mu-menu-item(value="1" title="一楼")
        mu-menu-item(value="2" title="二楼")
        mu-menu-item(value="3" title="三楼")
        mu-menu-item(value="4" title="四楼")
        mu-menu-item(value="5" title="五楼")
        mu-menu-item(value="6" title="六楼")
        mu-menu-item(value="7" title="七楼")
        mu-menu-item(value="8" title="八楼")
        mu-menu-item(value="9" title="九楼")
        mu-menu-item(value="10" title="十楼")
    mu-flexbox-item
      mu-flat-button(label="搜索" @click="search").w100
    mu-flexbox-item
      mu-flat-button(label="test" @click="test").w100
</template>

<script>
import store from '../store'
import axios from 'axios'
import moment from 'moment'
import 'muse-ui/dist/muse-ui.css'
// import 'muse-ui/dist/theme-dark.css'
store.commit('test')
export default {
  computed: {
    list () {
      return store.state.list
    },
    jie () {
      return store.state.jie
    },
    lou () {
      return store.state.lou
    },
    ke () {
      return store.state.ke
    },
    week () {
      return store.state.week
    },
    xinqi () {
      return store.state.xinqi
    },
    zhou () {
      return store.state.zhou
    },
    alldata () {
      return store.state.data
    },
    ceng () {
      return store.state.ceng
    }
  },
  methods: {
    test () {
      console.log(store.state.jie)
    },
    search () {
      axios.post('http://115.159.217.96:41893/room', {
        lou: this.lou,
        week: this.xinqi,
        jie: this.jie,
        ke: this.ke,
        zhou: this.zhou
      }).then((res) => {
        store.commit('search', res)
      })
    },
    kechange (val) {
      store.commit('kechange', val)
      console.log(val)
    },
    louchange (val) {
      store.commit('louchange', val)
      console.log(val)
    },
    jiechange (val) {
      store.commit('jiechange', val)
      console.log(val)
    },
    weekchange (week) {
      const xinqi = moment(week).day() === 0 ? '7' : moment(week).day().toString()
      const zhou = Math.ceil((moment(week).dayOfYear() - moment('2016-9-4').dayOfYear()) / 7)
      // store.commit('weekchange', week, xinqi, zhou)
      store.commit('xinqichange', xinqi)
      store.commit('zhouchange', zhou)
      console.log(xinqi)
      console.log(zhou)
      console.log(week)
      // console.log(moment(week).day().toString())
    },
    cengchange (val) {
      store.commit('cengchange', val)
      console.log(val)
    }
  }
}
</script>

<style lang="stylus">
#control
  margin: 20px
  padding: 20px
  height: auto
.w100
  width: 100%
</style>
