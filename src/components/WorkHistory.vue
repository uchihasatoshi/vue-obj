<template>
  <div>
    <h2>工作经历</h2>
    <el-form>
      <div class="container" v-for="(work,index) in workHistory">
        <el-form-item label="公司名称">
          <el-input v-model="work.company" placeholder="请输入公司名称"></el-input>
        </el-form-item>
        <el-form-item label="职位">
          <el-input v-model="work.post" placeholder="请输入职位"></el-input>
        </el-form-item>
        <el-form-item label="工作内容">
          <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="work.content">
          </el-input>
        </el-form-item>
        <i class="el-icon-circle-cross" v-on:click="removeWorkHistory(index)"></i>
        <hr>
      </div>
      <el-button class="addWorkHistory" type="primary" v-on:click="addWorkHistory">添加</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  props: ['workHistory'],

  methods: {
    addWorkHistory() {
      this.workHistory.push({
        company: '',
        content: '',
        post: ''
      })
    },
    removeWorkHistory(index) {
      this.workHistory.splice(index, 1)
    }
  }
}

</script>
