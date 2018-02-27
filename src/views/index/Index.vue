<template>
  <div class="main">
    <mu-tabs :value="activeTab" @change="changeTab">
      <mu-tab value="task" title="任务"/>
      <mu-tab value="mark" title="随手记"/>
    </mu-tabs>
    <div v-show="activeTab === 'task'" class="m-10">
      <div v-for="item in $store.state.taskList" :key="item.id">
        <mu-checkbox v-model="item.isFinish" :label="item.text" class="demo-checkbox"/>
      </div>
    </div>
    <div v-show="activeTab === 'mark'" class="m-10">
      <mu-text-field v-model="value" hintText="随手记内容" multiLine :rows="6" fullWidth/>
      <div class="ly ly-c mt-10">
        <mu-raised-button label="复制" @click="copy"/>
        <mu-flat-button label="清空" @click="clear" class="ml-10"/>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      activeTab: 'task',
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
    changeTab(tab) {
      this.activeTab = tab
    },
    copy() {

    },
    clear() {
      this.value = ''
    }
  }
}
</script>

<style scoped></style>