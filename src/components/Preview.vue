<template>
  <div id="preview">
    <!-- 个人信息 -->
    <section>
      <h1 class="name">{{resume.profile.name || '彭聪'}}</h1>
      <ul class="info">
        <li>{{resume.profile.city ||'陕西西安'}}</li>
        <li>{{resume.profile.birth ||'1993-12-21'}}</li>
        <li>{{resume.profile.position||'前端工程师'}}</li>
      </ul>
    </section>
    <!-- 工作经历 -->
    <div class="title">
      <div class="box">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gongzuo"></use>
        </svg>
      </div>
      <h3 class="text">工作经历</h3>
    </div>
    <section class="workbox" v-if="filter(resume.workHistory).length >0">
      <ul>
        <li v-for="work in filter(resume.workHistory)">
          <div class="work">
            <div class="company">{{work.company}}</div>
            <div class="post">{{work.post}}</div>
          </div>
          <div class="content">{{work.content}}</div>
        </li>
      </ul>
    </section>
    <!-- 学习经历 -->
    <div class="title">
      <div class="box">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shu_1"></use>
        </svg>
      </div>
      <h3 class="text">学习经历</h3>
    </div>
    <section v-if="filter(resume.studyHistory).length >0">
      <ul>
        <li v-for="study in filter(resume.studyHistory)">
          {{study.school}} {{study.time}} {{study.degree}}
        </li>
      </ul>
    </section>
    <!-- 获奖情况 -->
    <div class="title">
      <div class="box">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-huojiangmingdan"></use>
        </svg>
      </div>
      <h3 class="text">获奖情况</h3>
    </div>
    <section v-if="filter(resume.awardHistory).length >0">
      <ul>
        <li v-for="award in filter(resume.awardHistory)">
          {{award.awardName}} {{award.awardTime}}
        </li>
      </ul>
    </section>
    <!-- 项目经历 -->
    <div class="title">
      <div class="box">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-daima"></use>
        </svg>
      </div>
      <h3 class="text">项目经历</h3>
    </div>
    <section class="workbox" v-if="filter(resume.projects).length >0">
      <ul>
        <li v-for="project in filter(resume.projects)">
          <div class="work">
            <div class="company">{{project.projectName}}</div>
            <div class="post">{{project.projectTime}}</div>
          </div>
          <div class="content">{{project.describe}}</div>
        </li>
      </ul>
    </section>
    <!-- 联系方式 -->
    <div class="title">
      <div class="box">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-dianhua-1"></use>
        </svg>
      </div>
      <h3 class="text">联系方式</h3>
    </div>
    <section>
      {{resume.contactWay.cellphone}} {{resume.contactWay.mailbox}} {{resume.contactWay.blog}}
    </section>
  </div>
</template>
<style lang="scss">
#preview {
  min-height: 100px;
  padding: 32px;
  font-size: 16px;
  .name {
    color: #2F4860;
  }
  .info {
    display: flex;

    >li {
      display: block;
      border-right: 2px solid #2F4860;
      padding: 2px 8px;
      color: #2F4860;
    }
    li:nth-child(1) {
      padding-left: 0;
    }
    li:nth-child(3) {
      border-right: none;
    }
  }
  .title {
    display: flex;
    align-items: center;
    margin-top: 32px;
    .box {
      width: 32px;
      height: 32px;
      background: #2F4860;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        width: 24px;
        height: 24px;
        fill: #fff;
      }
    }
    .text {
      width: 100%;
      color: #2F4860;
      margin-left: 8px;
      border-bottom: 2px solid #2F4860;
    }
  }
  .workbox {
    margin-top: 16px;
    color: #2F4860;
    li {
      padding: 16px 0 0 40px;
      .work {
        display: flex;
        font-size: 16px;
        .company {
          max-width: 60%;
          margin-right: 48px;
          overflow-x: hidden;
        }
        .post {
          max-width: 40%;
          overflow-x: hidden;
        }
      }
      .content {
        font-size: 14px;
        margin-top: 12px;
      }
    }
  }
}

</style>
<script>
export default {
  props: ['resume'],

  methods: {
    filter(array) { //找出非空对象
      return array.filter(item => !this.isEmpty(item))
    },
    isEmpty(object) { //只要有一个value不是falsy，就返回flase（说明它不是空）
      let empty = true
      for (let key in object) {
        if (object[key]) {
          empty = false
          break
        }
      }
      return empty
    }
  }
}

</script>
