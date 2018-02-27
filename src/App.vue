<template>
  <div id="app">
    <!-- <van-nav-bar
      v-if="header.isShow"
      :title="header.title"
      leftText="返回"
      leftArrow
      @clickLeft="$router.go(-1)"
    /> -->
    <mu-appbar :title="header.title" v-if="header.isShow" titleClass="ta-c">
      <mu-icon-button icon="keyboard_arrow_left" slot="left" @click="$router.go(-1)"/>
    </mu-appbar>
    <router-view></router-view>
    <!-- <van-tabbar v-model="activeTypeIndex">
        <van-tabbar-item icon="wap-home" url="#/">今日
        </van-tabbar-item>
        <van-tabbar-item icon="wap-nav" url="#/calendar">日历</van-tabbar-item>
        <van-tabbar-item icon="contact" url="#/member-center">个人中心</van-tabbar-item>
      </van-tabbar> -->
  <div class="footer">
    <mu-paper>
      <mu-bottom-nav :value="bottomNav" @change="handleChange"  v-show="$store.state.isShowFooter">
        <mu-bottom-nav-item value="today" title="今日" icon="home" to="/"/>
        <mu-bottom-nav-item value="calendar" title="日历" icon="event_note" to="/calendar"/>
        <mu-bottom-nav-item value="member-center" title="个人中心" icon="account_box" to="/member-center"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>

  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      bottomNav: 'today'
    }
  },
  computed: {
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
    
  },
  methods: {
    pathChange() {
      var meta = this.$route.meta || {}
      if(meta.isShowFooter === undefined) {
        meta.isShowFooter = true
      }
      this.$store.dispatch('changeFooterVisible', meta.isShowFooter)

      if(meta.tab !== undefined) {
        this.$store.dispatch('changeActiveType', parseInt(meta.activeTypeIndex, 10))
      }
      // console.log(JSON.stringify(meta))
    },
    handleChange(tab){
      this.bottomNav = tab
    }
  }
};
</script>
<style src="@/assets/vendor/reset.css"></style>
<style src="css-utils-collection"></style>
<style src="@/assets/vendor/layout-flex.css"></style>
<style src="@/assets/common.css"></style>
<style scoped>
  .footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
  }
</style>

