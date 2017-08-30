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
        <Profile v-bind:profile="profile" />
      </li>
      <li v-bind:class="{active: currentTab===1}">
        <WorkHistory v-bind:workHistory="workHistory" />
      </li>
      <li v-bind:class="{active: currentTab===2}">
        <Study v-bind:studyHistory="studyHistory" />
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
import Profile from './Profile'
import WorkHistory from './WorkHistory'
import Study from './Study'

export default {
  components: {
    Profile,
    WorkHistory,
    Study
  },

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
      ],
      studyHistory:[
      	{ school: '', time :'', degree:''}
      ]
    }
  },

  methods: {}
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
    .addWorkHistory {
      margin-top: 16px;
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
