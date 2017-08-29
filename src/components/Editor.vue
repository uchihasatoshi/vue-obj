<!-- editor编辑区 -->
<template>
  <div id="editor">
    <nav>
      <ol>
        <li class="active">
          <svg class="icon">
            <use xlink:href="#icon-gerenxinxi"></use>
          </svg>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-gongzuo"></use>
          </svg>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-shu_1"></use>
          </svg>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-huojiangmingdan"></use>
          </svg>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-daima"></use>
          </svg>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-dianhua-1"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panes"></ol>
  </div>
</template>
<style lang="scss">
#editor {
  min-height: 100px;
  display: flex;
  nav {
    background: #000;
    width: 80px;

    >ol>li {
      border: 1px solid red;
      padding: 8px 0;
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
}

</style>
