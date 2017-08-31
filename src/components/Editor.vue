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
        <Profile v-bind:profile="resume.profile" />
      </li>
      <li v-bind:class="{active: currentTab===1}">
        <WorkHistory v-bind:workHistory="resume.workHistory" />
      </li>
      <li v-bind:class="{active: currentTab===2}">
        <Study v-bind:studyHistory="resume.studyHistory" />
      </li>
      <li v-bind:class="{active: currentTab===3}">
        <AwardHistory v-bind:awardHistory="resume.awardHistory" />
      </li>
      <li v-bind:class="{active: currentTab===4}">
        <Projects v-bind:projects="resume.projects" />
      </li>
      <li v-bind:class="{active: currentTab===5}">
        <ContactWay v-bind:contactWay="resume.contactWay" />
      </li>
    </ol>
  </div>
</template>

<script>
import Profile from './Profile'
import WorkHistory from './WorkHistory'
import Study from './Study'
import AwardHistory from './AwardHistory'
import Projects from './Projects'
import ContactWay from './ContactWay'

export default {
  components: {
    Profile,
    WorkHistory,
    Study,
    AwardHistory,
    Projects,
    ContactWay
  },

  props:['resume'],

  data() {
    return {
      currentTab: 0,
      icons: ['gerenxinxi', 'gongzuo', 'shu_1', 'huojiangmingdan', 'daima', 'dianhua-1']
    }
  }
}

</script>
<style lang="scss">
#editor {
  min-height: 100px;
  display: flex;
  nav {
    background: #1F2D3D;
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
