<template>
  <div class="main">
    <div class="summary ly ly--middle ly--center">
      <div class="summary__main">
        <img src="http://via.placeholder.com/50x50" alt=""/>
        <div style="margin-top: 10px;">已坚持x天</div>
      </div>
    </div>
    <mu-list>
      <mu-list-item title="日常任务" @click="$router.push('/task')">
        <mu-icon value="keyboard_arrow_right" slot="right"/>
      </mu-list-item>
      <mu-list-item title="统计信息" @click="$router.push('/task')">
        <mu-icon value="keyboard_arrow_right" slot="right"/>
      </mu-list-item>
      <mu-list-item title="关于" @click="$router.push('/task')">
        <mu-icon value="keyboard_arrow_right" slot="right"/>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
  .summary {
    padding: 10px 0;
    height: 4rem;
    background-color: #00f;
    color: #fff;
  }
  .summary__main {
    text-align: center;
  }
  .summary__main img{
    border-radius: 50%;
  }
</style>