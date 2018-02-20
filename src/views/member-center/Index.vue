<template>
  <div class="main">
    <div class="summary ly ly--middle ly--center">
      <div class="summary__main">
        <img src="http://via.placeholder.com/50x50" alt=""/>
        <div style="margin-top: 10px;">已坚持x天</div>
      </div>
    </div>
    <van-cell-group>
      <van-cell title="日常任务" is-link @click="$router.push('/task')" />
    </van-cell-group>
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