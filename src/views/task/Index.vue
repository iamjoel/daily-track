<template>
  <div class="main">
    <div v-for="(item,index) in taskList" :key="item.id">
      <div class="ly ly--justify">
        <mu-text-field v-model="item.text" :label="'任务' + (index + 1)" fullWidth/><br/>
        <!-- <van-button type="danger">删除</van-button> -->
      </div>
    </div>
    
    <mu-float-button icon="add" label="新增" class="mt-10" @click="add" primary />


    <div class="ly ly-c mt-10">
      <mu-raised-button label="保存" @click="save" class="mr-10" primary/>
      <mu-flat-button label="返回" @click="$router.go(-1)"/>
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
    add() {

    },
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