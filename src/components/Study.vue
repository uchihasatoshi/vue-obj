<template>
  <div>
    <h2>学习经历</h2>
    <el-form>
      <div class="container" v-for="(items,index) in studyHistory">
        <el-form-item label="毕业学校">
          <el-input v-model="items.school" placeholder="学校名称"></el-input>
        </el-form-item>
        <el-form-item label="毕业时间">
          <el-input v-model="items.time" placeholder="毕业时间"></el-input>
        </el-form-item>
        <el-form-item label="学历">
          <el-input v-model="items.degree" placeholder="请输入学历"></el-input>
        </el-form-item>
        <i class="el-icon-circle-cross" v-on:click="removelist(index)"></i>
        <hr>
      </div>
      <el-button class="addWorkHistory" type="primary" v-on:click="addlist">添加</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  props: ['studyHistory'],

  methods: {
    addlist() {
      this.studyHistory.push({
        school: '',
        time: '',
        degree: ''
      })
    },
    removelist(index) {
      this.studyHistory.splice(index, 1)
    }
  }
}

</script>
