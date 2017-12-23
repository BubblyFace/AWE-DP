// 地点什么的应该是包含在该组件内的吧，对的，就这样写
<template>
  <div class="J_header">
      <header class="index-head">
        <!-- location -->
        <a href="//m.dianping.com/citylist" class="city" onclick="alert('city Choice')">武汉</a>
        <div class="search J_search_trigger"></div>
        <a onclick="alert(个人账户)" href="//m.dianping.com/nmy/myinfo" class="self"></a>
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

.index-head .city {
    position: relative;
    padding-right: 17px;
    color: #fff;
    max-width: 60px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    text-decoration: none;
}
.index-head .city:after {
    border: 1px solid #fff;
    position: absolute;
    right: 2px;
    top: 50%;
    margin-top: -8px;
    display: block;
    height: 8px;
    border-top: none;
    border-right: none;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

.index-head .search {
    background-color: #fff;
    padding: 0 0 0 30px;
    -webkit-box-flex: 1;
    flex: 1;
    height: 30px;
    margin: 9px 6px 9px 10px;
    line-height: 32px;
    color: #b8b8b8;
    text-align: left;
    font-size: 13px;
    transition: left .2s,right .2s;
    border-radius: 25px;
    position: relative;
}
.index-head .search:before {
    display: block;
    height: 8px;
    border: 1px solid #888;
    border-radius: 11px;
    position: absolute;
    left: 12px;
    bottom: 11px;
}

.index-head .city:after, .index-head .search:before {
    width: 8px;
    content: "";
}

.index-head .search:after {
    content: "";
    display: block;
    border-top: 1px solid #888;
    border-radius: 9px;
    position: absolute;
    left: 19px;
    bottom: 10px;
    width: 6px;
    height: 0;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}

.index-head .self {
    display: block;
    background-image: url(//www.dpfile.com/app/app-m-module/static/d53930bbff0bf22cb8cea72503da44d9.png);
    background-repeat: no-repeat;
    background-position: left -67px;
    background-size: 250px;
    width: 28px;
    height: 100%;
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
