<template>
    <div class="J_nav">
        <div class="index-category Fix nav_new J_category">
            <div id="J_slider" class="index_slider nav_browser">
                <div class="index_slider-wrap Fix" :style="{width: pageInfo.length * defaultWidth+'px'}" ref="pageContainer">
                    <v-touch class="page Fix" v-for="(page, index) in pageInfo" :key="index" v-on:panend="onPanup" v-on:pan="onPan" :style="pagePosition[index]" >
                        <a class="item" :href="item.href" v-for="item in page" :key="item.pinyin" style="width:20%">
                            <img class="icon" :src="item.src" >
                            <div>{{item.name}}</div>
                        </a>
                    </v-touch>                
                </div>
            </div>
            <ul class="circles">
                <li class="circle" v-for="circle in circles" :key="'circle' + circle.n" :class="{'on': circle.n  === pageIndex}"></li>
            </ul>
        </div>
    </div>
</template>

<script>
import nav_items from "../../static/jsondata/nav.data.js";

function defaultData() {
  return {
    pageInfo: [],
    circles: [
      {
        n: 0
      },
      {
        n: 1
      },
      {
        n: 2
      }
    ],
    oldIndex: 0,
    pageIndex: 0,
    changeFlag:0,
    pagePosition: [],
    defaultWidth: document.body.clientWidth
  };
}

export default {
  data() {
    return defaultData();
  },
  methods: {
    init() {
      this.pageInit();
      this.setPageState();
    },
    pageInit() {
      let ls = nav_items;
      let page = 0;
      this.$data.pageInfo.push([]);
      for (let i = 0; i < nav_items.length; i++) {
        if (i % 10 === 0 && i !== 0) {
          this.$data.pageInfo.push([]);
          page += 1;
          this.$data.pageInfo[page].push(nav_items[i]);
        } else {
          this.$data.pageInfo[page].push(nav_items[i]);
        }
      }
    },
    onPanup(e) {
      let x = e.deltaX;
      //获取到x
      // if (x < -207 && this.$data.pageIndex < 3) {
      //   this.$data.pageIndex++;
      // } else if (x > 207 && this.$data.pageIndex > 0) {
      //   this.$data.pageIndex--;
      // }

      if (x < -this.$data.defaultWidth / 2 && this.$data.pageIndex < 2) {
          this.$data.changeFlag = 1;
        }
      if (x > this.$data.defaultWidth / 2 && this.$data.pageIndex > 0) {
        this.$data.changeFlag = -1;
      }
      console.log(x);
      this.handlePageChange();
    },
    onPan(e) {
      let x = e.deltaX;
      let pageIndex = this.$data.pageIndex;
      //处理页面移动，只负责移动 更改页面交给panup来处理
      if (pageIndex === 0) {
        this.$data.pagePosition[this.$data.pageIndex].transitionDuration =
          "0ms";
        this.$data.pagePosition[this.$data.pageIndex + 1].transitionDuration =
          "0ms";
        this.$data.pagePosition[this.$data.pageIndex].transform =
          "translate(" + x + "px,0px)";
        this.$data.pagePosition[this.$data.pageIndex + 1].transform =
          "translate(" + (x + this.$data.defaultWidth) + "px,0px)";
        // if (x < -this.$data.defaultWidth / 2) {
        //   this.$data.changeFlag = 1;
        // }
      } else if (pageIndex === 1) {
        this.$data.pagePosition[this.$data.pageIndex].transform =
          "translate(" + x + "px,0px)";
        this.$data.pagePosition[this.$data.pageIndex + 1].transform =
          "translate(" + (x + this.$data.defaultWidth) + "px,0px)";
        this.$data.pagePosition[this.$data.pageIndex - 1].transform =
          "translate(" + (x - this.$data.defaultWidth) + "px,0px)";
        this.$data.pagePosition[this.$data.pageIndex].transitionDuration =
          "0ms";
        this.$data.pagePosition[this.$data.pageIndex + 1].transitionDuration =
          "0ms";
        this.$data.pagePosition[this.$data.pageIndex - 1].transitionDuration =
          "0ms";
        // if (x < -this.$data.defaultWidth / 2) {
        //   this.$data.changeFlag = 1;
        // }
        // if (x > this.$data.defaultWidth / 2) {
        //   this.$data.changeFlag = -1;
        // }
      } else if (pageIndex === 2) {
        this.$data.pagePosition[this.$data.pageIndex].transform =
          "translate(" + x + "px,0px)";
        this.$data.pagePosition[this.$data.pageIndex - 1].transform =
          "translate(" + (x- this.$data.defaultWidth) + "px,0px)";
        this.$data.pagePosition[this.$data.pageIndex].transitionDuration =
          "0ms";
        this.$data.pagePosition[this.$data.pageIndex - 1].transitionDuration =
          "0ms";
        // if (x > this.$data.defaultWidth / 2) {
        //   this.$data.changeFlag = -1;
        // }
      }
    },
    handlePageChange() {
      //处理页面是否改变
      let oldIndex = this.$data.oldIndex;      
      let changeFlag = this.$data.changeFlag
      console.log('test')
      if (oldIndex > 0) {
        //left
        if(changeFlag === -1){
          this.$data.pagePosition[oldIndex - 1].transitionDuration =
            "300ms";
          this.$data.pagePosition[oldIndex - 1].transform =
            "translate(" + 0 + "px,0px)";
        }else{
          this.$data.pagePosition[oldIndex - 1].transitionDuration =
            "300ms";
          this.$data.pagePosition[oldIndex - 1].transform =
            "translate(" + -this.$data.defaultWidth + "px,0px)";
        }
      }

      if(changeFlag === -1){
        //current
        this.$data.pagePosition[oldIndex].transitionDuration =
            "300ms";
        this.$data.pagePosition[oldIndex].transform =
          "translate(" + this.$data.defaultWidth + "px,0px)";
      }else if(changeFlag === 1){
        this.$data.pagePosition[oldIndex].transitionDuration =
            "300ms";
        this.$data.pagePosition[oldIndex].transform =
          "translate(" + -this.$data.defaultWidth + "px,0px)";
      }else{
        this.$data.pagePosition[oldIndex].transitionDuration =
            "300ms";
        this.$data.pagePosition[oldIndex].transform =
          "translate(" + 0 + "px,0px)";

      }

      if (oldIndex < 2) {
        //right
        if(changeFlag === 1){
          this.$data.pagePosition[oldIndex + 1].transitionDuration =
            "300ms";
          this.$data.pagePosition[oldIndex + 1].transform =
            "translate(" + 0 + "px,0px)";
        }else{
          this.$data.pagePosition[oldIndex + 1].transitionDuration =
            "300ms";
          this.$data.pagePosition[oldIndex + 1].transform =
            "translate(" + this.$data.defaultWidth + "px,0px)";
        }
      }
      
      this.$data.pageIndex = this.$data.pageIndex + this.$data.changeFlag 
      this.$data.changeFlag = 0
      this.$data.oldIndex = this.$data.pageIndex;
    },
    setPageState() {
      //clear
      this.$data.pagePosition = [];
      let defaultWidth = this.$data.defaultWidth;
      let transformInfo = "translate(" + 0 + "px,0px)";
      for (let i = 0; i < 3; i++) {
        if (i === 0) {
          transformInfo = "translate(" + 0 + "px,0px)";
        } else if (i > 0) {
          transformInfo = "translate(" + defaultWidth + "px,0px)";
        } else {
          transformInfo = "translate(" + -defaultWidth + "px,0px)";
        }
        let deviation = i * defaultWidth * -1;
        let defaultStyle = {
          width: defaultWidth + "px",
          left: deviation + "px",
          //这里先写死，回来改一下就好了
          transitionDuration: "300ms",
          transform: transformInfo
        };
        this.$data.pagePosition.push(defaultStyle);
      }
    }
  },
  beforeMount() {
    this.init();
  }
};
</script>

<style>
.index-category {
  text-align: center;
  padding: 0 0 10px;
  background-image: linear-gradient(0, #e1e1e1, #e1e1e1 50%, transparent 0);
  background-position: 100% 100%;
  background-size: 100% 1px;
  background-repeat: no-repeat;
  background-color: #fff;
}

.index-category .index_slider {
  overflow: hidden;
  position: relative;
  height: 175px;
}

.index-category .index_slider.nav_qq {
  background: url(//www.dpfile.com/app/app-m-module/static/8e7e2348af08b8b4b7f7f7f472ecd90b.png)
    top no-repeat;
  background-size: cover;
  height: 151px;
}

.index-category .index_slider.nav_qq .index_slider-wrap .item {
  padding: 7px 0 0 !important;
  font-size: 13px;
  height: 85px !important;
}

.index-category .index_slider.nav_qq .index_slider-wrap .item:nth-child(n + 6) {
  padding-top: 14px !important;
}

.index-category
  .index_slider.nav_qq
  .index_slider-wrap
  .item:nth-child(n + 6)
  .icon {
  width: 29px;
  height: 29px;
  margin: 0 auto -1px;
}

.index-category
  .index_slider.nav_qq
  .index_slider-wrap
  .item:nth-child(-n + 5) {
  color: #fff;
}

.index-category .index_slider .index_slider-wrap {
  overflow: hidden;
  position: relative;
}

.index-category .index_slider .index_slider-wrap .page {
  float: left;
  padding: 0 10px;
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  position: relative;
}

.index-category .index_slider .index_slider-wrap .page .item {
  width: 20%;
  height: 87px;
  padding: 13px 0 0;
  display: block;
  float: left;
  color: #333;
  position: relative;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  font-size: 13px;
}

.index-category .index_slider .index_slider-wrap .page .item .icon {
  border-radius: 22px;
  -webkit-border-radius: 22px;
  width: 44px;
  height: 44px;
  margin: 0 auto 2px;
  color: #333;
  position: relative;
}

.index-category .index_slider .index_slider-wrap .page .item .hot,
.index-category .index_slider .index_slider-wrap .page .item .new {
  position: absolute;
  left: 50%;
  margin-left: 5px;
  top: 14px;
  width: 27px;
  height: 14px;
  z-index: 1;
  color: #fff;
  font-size: 12px;
  -webkit-transform: scale(0.83);
  transform: scale(0.83);
  border: 1px solid #fff;
  border-radius: 10px;
}

.index-category .index_slider .index_slider-wrap .page .item .hot:after,
.index-category .index_slider .index_slider-wrap .page .item .new:after {
  display: block;
  width: 17px;
  height: 8px;
  position: absolute;
  left: 1px;
  bottom: 6px;
  font-size: 13px;
  -webkit-transform: scale(0.6);
  transform: scale(0.6);
  font-weight: 700;
}

.index-category .index_slider .index_slider-wrap .page .item .hot {
  background-color: #f74c31;
}

.index-category .index_slider .index_slider-wrap .page .item .hot:after {
  content: "HOT";
}

.index-category .index_slider .index_slider-wrap .page .item .new {
  background-color: #5dad4d;
}

.index-category .index_slider .index_slider-wrap .page .item .new:after {
  content: "NEW";
}

.index-category .index_slider .index_slider-wrap .page .item .label {
  word-break: keep-all;
  position: absolute;
  left: 50%;
  margin-left: 5px;
  top: 13px;
  border: 1px solid #fff;
  border-radius: 14px;
  padding: 3px 3px 3px 4px;
  font-size: 12px;
  font-weight: 700;
  -webkit-transform: scale(0.67);
  transform: scale(0.67);
  min-width: 50%;
  height: 18px;
  color: #fff;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}

.index-category .circles {
  line-height: 10px;
}

.index-category .circles .circle {
  display: inline-block;
  margin-right: 3px;
  background-color: #ccc;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  width: 8px;
  height: 8px;
}

.index-category .circles .circle.on {
  background-color: #f5734b;
}
</style>
