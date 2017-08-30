<!-- editor编辑区 -->
<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active: currentTab===i}" v-on:click="currentTab=i">
          <svg class="icon">
            <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panes">
      <li v-bind:class="{active: currentTab===0}">
        <h2>个人信息</h2>
        <el-form>
          <el-form-item label="姓名">
            <el-input v-model="profile.name"></el-input>
          </el-form-item>
          <el-form-item label="所在城市">
            <el-input v-model="profile.city"></el-input>
          </el-form-item>
          <el-form-item label="出生年月">
            <el-input v-model="profile.birth"></el-input>
          </el-form-item>
        </el-form>
      </li>
      <li v-bind:class="{active: currentTab===1}">
        <h2>工作经历</h2>
        <el-form>
          <div class="container" v-for="(work,index) in workHistory">
            <el-form-item label="公司名称">
              <el-input v-model="work.company"></el-input>
            </el-form-item>
            <el-form-item label="工作内容">
              <el-input v-model="work.content"></el-input>
            </el-form-item>
            <i class="el-icon-circle-cross" v-on:click="removeWorkHistory(index)"></i>
            <hr>
          </div>
          <el-button type="primary" v-on:click="addWorkHistory">添加</el-button>
        </el-form>
      </li>
      <li v-bind:class="{active: currentTab===2}">
        <h2>学习经历</h2>
      </li>
      <li v-bind:class="{active: currentTab===3}">
        <h2>获奖情况</h2>
      </li>
      <li v-bind:class="{active: currentTab===4}">
        <h2>项目情况</h2>
      </li>
      <li v-bind:class="{active: currentTab===5}">
        <h2>联系方式</h2>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentTab: 0,
      icons: ['gerenxinxi', 'gongzuo', 'shu_1', 'huojiangmingdan', 'daima', 'dianhua-1'],
      profile: {
        name: '',
        city: '',
        birth: '',
      },
      workHistory: [
        { company: '', content: '' }
      ]
    }
  },
  methods: {
    addWorkHistory() {
      this.workHistory.push({
        company: '',
        content: ''
      })
    },
    removeWorkHistory(index) {
      this.workHistory.splice(index, 1)
    }
  }
}

</script>
<style lang="scss">
#editor {
  min-height: 100px;
  display: flex;
  nav {
    background: #000;
    width: 80px;

    >ol>li {
      padding: 16px 0;
      text-align: center;

      >.icon {
        width: 24px;
        height: 24px;
        fill: #fff;
      }

      &.active {
        background: #fff;
        >.icon {
          fill: #000;
        }
      }
    }
  }
  .panes {
    flex: 1;
    .container {
      position: relative;
      i {
        position: absolute;
        right: 0;
        top: 11px;
      }
    }
    >li {
      display: none;
      padding: 32px;
      height: 100%;
      overflow: auto;
    }
    >li.active {
      display: block;
    }
  }
}

</style>
