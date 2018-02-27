<template>
  <div class="main">
    <mu-appbar title="日常任务"  titleClass="ta-c" >
      <mu-icon-button icon="keyboard_arrow_left" slot="left" @click="$router.go(-1)"/>
      <mu-icon-button icon="add" slot="right" @click="add"/>
    </mu-appbar>
    <div v-for="(item,index) in taskList" :key="item.id">
      <div class="ly ly--justify">
        <mu-text-field v-model="item.text" :label="'任务' + (index + 1)" fullWidth/><br/>
        <!-- <van-button type="danger">删除</van-button> -->
      </div>
    </div>
    
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