// 地点什么的应该是包含在该组件内的吧，对的，就这样写
<template>
  <div class="J_header">
      <header class="index-head">
        <!-- location -->
    
      </header>
      <div class="header_fill"></div>
  </div>
</template>

<style>
.index-head {
    position: fixed;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #f63;
    color: #fff;
    padding: 0 10px;
    text-align: center;
    display: -webkit-box;
    z-index: 305;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

.header_fill {
    height: 50px;
}
</style>
    
<script>

function defaultData() {
    return {
        default_location : "武汉"
    }
}

export default {
  data(){
      return defaultData()
  }
}
</script>
