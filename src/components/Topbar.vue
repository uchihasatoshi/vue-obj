<template>
  <div id="topbar">
    <div class="logo">
      VueResumer
    </div>
    <div class="actions">
      <!-- <el-button type="primary">注册</el-button>
      <el-button>登录</el-button> -->
      <el-button type="primary" v-on:click="preview">预览</el-button>
    </div>
  </div>
</template>
<style lang='scss'>
#topbar {
  display: flex;
  background: #1F2D3D;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  font-size: 20px;
  .logo{
  	margin-left: 24px;
  	color: #fff;
  	font-size: 24px;
  }
}
</style>

<script>
  export default{
    methods:{
      preview(){
        this.$emit('preview')
      }
    }
  }
</script>