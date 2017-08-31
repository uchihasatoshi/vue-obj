<!-- 个人信息模块 -->
<template>
  <div>
    <h2>个人信息</h2>
    <el-form>
      <el-form-item label="姓名">
        <el-input v-model="profile.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="所在城市">
        <el-input v-model="profile.city" placeholder="所在城市"></el-input>
      </el-form-item>
      <el-form-item label="出生年月">
        <el-input v-model="profile.birth" placeholder="格式：2017-8-31"></el-input>
      </el-form-item>
      <el-form-item label="求职意向">
        <el-input v-model="profile.position" placeholder="求职意向"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default{
	props: ['profile']
}

</script>
