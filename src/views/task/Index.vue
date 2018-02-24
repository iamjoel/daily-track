<template>
  <div class="main">
    <div v-for="item in taskList" :key="item.id">
      <div class="ly ly--justify">
        <input type="text" v-model="item.text" class="input">
        <van-button type="danger">删除</van-button>
      </div>
    </div>
    <van-button type="primary">新增</van-button>


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

<style scoped>
  .input {
    width: 60%;
    border: 1px solid #ddd;
  }
</style>