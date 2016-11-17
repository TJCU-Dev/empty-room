<template lang="pug">
mu-flexbox
  mu-flexbox-item
    div#app
      mu-paper.app
        mu-sub-header 空教室
        mu-list.title
          template(v-for="item in list")
            mu-list-item(:title="item")
            mu-divider
  mu-flexbox-item
    Control
</template>

<script>
import store from './store'
import Control from './components/control'
import 'muse-ui/dist/muse-ui.css'
export default {
  computed: {
    list () {
      return store.state.list
    }
  },
  methods: {
    test () {
      store.commit('test')
    }
  },
  components: {
    Control
  }
}

</script>

<style lang="stylus">
.app
  /*display: inline-block*/
  /*width: 300px*/
  margin: 20px
  padding: 20px
  height: 90%
  -webkit-overflow-scrolling: touch
.title
  height: 400px
  overflow: auto
  display: block
</style>
