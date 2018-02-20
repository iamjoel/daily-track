<template>
  <div class="main">
    <div v-for="item in taskList" :key="item.id">
      <div class="ly ly--justify">
        <van-field v-model="item.text" placeholder="请输入用户名" />
        <van-button type="primary">删除</van-button>
      </div>
    </div>

    <div class="ly ly--center" style="margin-top: 10px;">
      <van-button type="primary" @click="save">保存</van-button>
      <van-button type="default" @click="$router.go(-1)">返回</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskList: [...this.$store.state.taskList]
    }  
  },
  methods: {
    save() {

    }
  }
}
</script>

<style scoped></style>