<template>
  <div id="preview">
  	<!-- 个人信息 -->
    <h1>{{resume.profile.name || '蒙奇•D•路飞'}}</h1>
    <p>{{resume.profile.city ||'东海•风车村'}} | {{resume.profile.birth ||'5月5日'}}</p>
    <!-- 工作经历 -->
    <section v-if="filter(resume.workHistory).length >0">
    	<ul>
    		<li v-for="work in filter(resume.workHistory)">
    			{{work.company}}
    			{{work.content}}
    		</li>
    	</ul>
    </section>
    <!-- 项目经历 -->
    <section v-if="filter(resume.projects).length >0">
    	<ul>
    		<li v-for="project in filter(resume.projects)">
    			{{project.projectName}}
    			{{project.projectTime}}
    			{{project.describe}}
    		</li>
    	</ul>
    </section>
    
  </div>
</template>
<style>
#preview {
  min-height: 100px;
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
