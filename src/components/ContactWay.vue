<!-- 个人信息模块 -->
<template>
  <div>
    <h2>联系方式</h2>
    <el-form>
      <el-form-item label="手机">
        <el-input v-model="contactWay.cellphone" placeholder="手机号码"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="contactWay.mailbox" placeholder="邮箱地址"></el-input>
      </el-form-item>
      <el-form-item label="个人博客">
        <el-input v-model="contactWay.blog" placeholder="个人博客"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default{
  props: ['contactWay']
}

</script>


