<!-- editor编辑区 -->
<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-bind:class="{active: currentTab===0}" v-on:click="currentTab=0">
          <svg class="icon">
            <use xlink:href="#icon-gerenxinxi"></use>
          </svg>
        </li>
        <li v-bind:class="{active: currentTab===1}" v-on:click="currentTab=1">
          <svg class="icon">
            <use xlink:href="#icon-gongzuo"></use>
          </svg>
        </li>
        <li v-bind:class="{active: currentTab===2}" v-on:click="currentTab=2">
          <svg class="icon">
            <use xlink:href="#icon-shu_1"></use>
          </svg>
        </li>
        <li v-bind:class="{active: currentTab===3}" v-on:click="currentTab=3">
          <svg class="icon">
            <use xlink:href="#icon-huojiangmingdan"></use>
          </svg>
        </li>
        <li v-bind:class="{active: currentTab===4}" v-on:click="currentTab=4">
          <svg class="icon">
            <use xlink:href="#icon-daima"></use>
          </svg>
        </li>
        <li v-bind:class="{active: currentTab===5}" v-on:click="currentTab=5">
          <svg class="icon">
            <use xlink:href="#icon-dianhua-1"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panes">
    	<li v-bind:class="{active: currentTab===0}">1</li>
    	<li v-bind:class="{active: currentTab===1}">2</li>
    	<li v-bind:class="{active: currentTab===2}">3</li>
    	<li v-bind:class="{active: currentTab===3}">4</li>
    	<li v-bind:class="{active: currentTab===4}">5</li>
    	<li v-bind:class="{active: currentTab===5}">6</li>
    </ol>
  </div>
</template>

<script>
	export default{
		data(){
			return {
				currentTab: 0
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
  .panes{
  	border: 1px solid #000;
  	>li{
  		display: none;
  	}
  	>li.active{
  		display: block;
  		border: 1px solid red;
  	}
  }
}

</style>
