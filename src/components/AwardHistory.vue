<template>
  <div>
    <h2>获奖情况</h2>
    <el-form>
      <div class="container" v-for="(items,index) in awardHistory">
        <el-form-item label="获奖证书">
          <el-input v-model="items.awardName" placeholder="英语四级"></el-input>
        </el-form-item>
        <el-form-item label="获奖时间">
          <el-input v-model="items.awardTime" placeholder="2016-12"></el-input>
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
  props: ['awardHistory'],

  methods: {
    addlist() {
      this.awardHistory.push({
        awardName: '',
        awardTime: ''
      })
    },
    removelist(index) {
      this.awardHistory.splice(index, 1)
    }
  }
}

</script>
