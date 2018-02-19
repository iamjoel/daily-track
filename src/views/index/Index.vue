<template>
  <div class="main">
    <van-tabs :active="active">
      <van-tab title="任务">
        开发中
      </van-tab>
      <van-tab title="随手记">
        <van-field v-model="value" placeholder="随手记内容" type="textarea" autosize/>
        <div class="ly ly--center" style="margin-top: 10px;">
          <van-button type="primary" @click="copy">复制</van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTypeIndex: 0,
      active: 1,
      value: ''
    }  
  },
  methods: {
    copy() {

    }
  }
}
</script>

<style scoped></style>