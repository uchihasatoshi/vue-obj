<!-- 主模块 -->
<template>
  <div id="app" v-bind:class="{previewMode:previewMode}">
    <Topbar class="topbar" v-on:preview="preview" />
    <main id="main">
      <Editor v-bind:resume="resume" class="editor" />
      <Preview v-bind:resume="resume" class="preview" />
    </main>
    <el-button id="exitPreview" v-on:click="exitPreview" type="primary">退出预览</el-button>
  </div>
</template>
<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'

export default {
  components: {
    Topbar,
    Editor,
    Preview
  },
  methods: {
    preview() {
      this.previewMode = true
    },
    exitPreview() {
      this.previewMode = false
    }
  },
  data() {
    return {
      previewMode: false,
      resume: {
        profile: {
          name: '',
          city: '',
          birth: '',
          position: ''
        },
        workHistory: [
          { company: '', content: '', post: '' }
        ],
        studyHistory: [
          { school: '', time: '', degree: '' }
        ],
        awardHistory: [
          { awardName: '', awardTime: '' }
        ],
        projects: [
          { projectName: '', projectTime: '', describe: '' }
        ],
        contactWay: { cellphone: '', mailbox: '', blog: '' },
      }
    }
  }
}

</script>
<style lang="scss">
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100%;
  display: flex;
  flex-direction: column;
}

.topbar {
  box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
  position: relative;
  z-index: 1;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

#main {

  display: flex;
  flex: 1;
  background: #DDD;

  >.editor {
    width: 40em;
    margin: 16px 8px 16px 16px;
    background: #fff;
    box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
    border-radius: 4px;
    overflow-x: hidden;
    h2 {
      margin-bottom: 16px;
    }
    .el-icon-circle-cross {
      color: #20A0FF;
    }
  }

  >.preview {
    flex: 1;
    margin: 16px 16px 16px 8px;
    background: #fff;
    box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
    border-radius: 4px;
    // overflow: hidden;
  }
}

.previewMode>#topbar {
  display: none;
}

.previewMode #main #editor {
  display: none;
}
.previewMode #main #preview {
  max-width: 800px;
  margin: 32px auto;
}

#exitPreview {
  display: none;
}

.previewMode #exitPreview {
  display: inline-block;
  position: fixed;
  right: 16px;
  bottom: 16px;
}

</style>
