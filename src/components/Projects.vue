<template>
  <div>
    <h2>项目经历</h2>
    <el-form>
      <div class="container" v-for="(items,index) in projects">
        <el-form-item label="项目名称">
          <el-input v-model="items.projectName"></el-input>
        </el-form-item>
        <el-form-item label="项目时间">
          <el-input v-model="items.projectTime"></el-input>
        </el-form-item>
        <el-form-item label="项目描述">
          <el-input v-model="items.describe"></el-input>
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
  props: ['projects'],

  methods: {
    addlist() {
      this.projects.push({
        projectName: '',
        projectTime: '',
        describe: ''
      })
    },
    removelist(index) {
      this.projects.splice(index, 1)
    }
  }
}

</script>
