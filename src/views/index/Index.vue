<template>
  <div class="main">
    <van-tabs :active="active">
      <van-tab title="任务">
        <div v-for="item in $store.state.taskList" :key="item.id" style="margin: 5px 0;">
          <van-checkbox v-model="item.isFinish">{{item.text}}</van-checkbox>
        </div>
      </van-tab>
      <van-tab title="随手记">
        <van-field v-model="value" placeholder="随手记内容" type="textarea" autosize/>
        <div class="ly ly--center" style="margin-top: 10px;">
          <van-button type="primary" @click="copy">复制</van-button>
          <van-button type="default" @click="clear" class="ml-10">清空</van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      active: 0,
      value: '',
      todayTask: this.$store.state.taskFinishStatus[moment().format('YYYY-MM-DD')] || this.$store.state.taskList.map(item => {
        return {
          ...item,
          isFinish: false
        }
      })
    }  
  },
  methods: {
    copy() {

    },
    clear() {
      this.value = ''
    }
  }
}
</script>

<style scoped></style>