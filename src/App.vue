<template>
  <div id="app">
    <van-nav-bar
      v-if="header.isShow"
      :title="header.title"
      leftText="返回"
      leftArrow
      @clickLeft="$router.go(-1)"
    />
    <router-view></router-view>
    <van-tabbar v-model="activeTypeIndex" v-show="$store.state.isShowFooter">
        <van-tabbar-item icon="wap-home" url="#/">今日
        </van-tabbar-item>
        <van-tabbar-item icon="wap-nav" url="#/calendar">日历</van-tabbar-item>
        <van-tabbar-item icon="contact" url="#/member-center">个人中心</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
import * as firebase from 'firebase';

export default {
  name: 'app',
  data() {
    return {
    }
  },
  computed: {
    activeTypeIndex: {
      get() {
        return this.$store.state.activeTypeIndex
      },
      set(val) {
        this.$store.dispatch('changeActiveType', parseInt(val, 0))
      }
    },
    header() {
      var res = {...this.$route.meta} || {}
      res.isShow = !!res.title
      return res
    }
  },
  watch: {
    // 控制底部Tab的高亮，和消隐
    ['$route.path']() {
      this.pathChange()
    }
  },
  mounted() {
    this.pathChange()
    var app = firebase.initializeApp({
      apiKey: "AIzaSyD9WiZ38cICEasD9eaqpi8yIv_QnaD7l7w",
      authDomain: "daily-track-1e0ed.firebaseapp.com",
      databaseURL: "https://daily-track-1e0ed.firebaseio.com",
      projectId: "daily-track-1e0ed",
      storageBucket: "daily-track-1e0ed.appspot.com",
      messagingSenderId: "865185976232"
     })
    var database = firebase.database()
    // database.ref('account').push({
    //   name: 'lily',
    //   password: '34343'
    // })

    database.ref('account').once('value').then(function(snapshot) {
      // debugger
      console.log(snapshot.val())
    })
  },
  methods: {
    pathChange() {
      var meta = this.$route.meta || {}
      if(meta.isShowFooter === undefined) {
        meta.isShowFooter = true
      }
      this.$store.dispatch('changeFooterVisible', meta.isShowFooter)

      if(meta.activeTypeIndex !== undefined) {
        this.$store.dispatch('changeActiveType', parseInt(meta.activeTypeIndex, 10))
      }
      // console.log(JSON.stringify(meta))
    }
  }
};
</script>
<style src="@/assets/vendor/reset.css"></style>
<style src="css-utils-collection"></style>
<style src="@/assets/vendor/layout-flex.css"></style>
<style src="@/assets/common.css"></style>

