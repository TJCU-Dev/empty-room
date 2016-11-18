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
  // data () {
  //   return {
  //     list: store.state.list,
  //     jie: store.state.jie,
  //     lou: store.state.lou,
  //     ke: store.state.ke,
  //     week: store.state.week,
  //     xinqi: store.state.xinqi,
  //     zhou: store.state.zhou
  //   }
  // },
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
    }
  }
}
</script>

<style lang="stylus">
#control
  margin: 20px
  padding: 20px
  height: 500px
.w100
  width: 100%
</style>
