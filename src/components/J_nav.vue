<template>
    <div class="J_nav">
        <div class="index-category Fix">
            <div id="J_slider" class="index_slider">
                <div class="index_slider-wrap Fix" :style="{width: pageInfo.length * 414+'px'}" ref="pageContainer">
                    <v-touch class="page Fix" v-for="(page, index) in pageInfo" :key="index" v-on:swipe="onSwipe" v-on:pan="onPan" :style="pagePosition[index]" >
                        <a class="item" :href="item.href" v-for="item in page" :key="item.pinyin" style="width:20%">
                            <img class="icon" :src="item.src" >
                            <div>{{item.name}}</div>
                        </a>
                    </v-touch>                
                </div>
            </div>
            <ul class="circles">
                <li class="circle" v-for="circle in circles" :key="'circle' + circle.n" :class="{'on': circle.n + 1 === pageIndex}"></li>
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
    pageIndex: 1,
    pagePosition: []
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
    onSwipe(e) {
      let x = e.deltaX;
      console.log(x);
      //获取到x
      if (x < -207 && this.$data.pageIndex < 3) {
        this.$data.pageIndex++;
      } else if (x > 207 && this.$data.pageIndex > 0) {
        this.$data.pageIndex--;
      }
    },
    onPan(e) {
      let x = e.deltaX;
      this.$data.pagePosition[this.$data.pageIndex].transform =
        "translate(" + x + "px,0px)";
      //   console.log('change '+this.$data.pageIndex+' to ' + this.$data.pagePosition[this.$data.pageIndex].transform)
      //   if(this.$data.pageIndex-1 >= 0){
      //       console.log(this.$data.pageIndex-1)
      //       this.$data.pagePosition[this.$data.pageIndex-1].transform =  "translate(" + (x - 414) + "px,0px)";
      //   }
      //   if(this.$data.pageIndex + 1 <3){
      //       console.log(this.$data.pageIndex+1)
      //       this.$data.pagePosition[this.$data.pageIndex+1].transform =  "translate(" + (x - 414) + "px,0px)";
      //   }
      //三种变换情况，
      //最左边
      if (this.$data.pageIndex === 0){
          
      }
    },
    setPageState(currentIndex) {
      //clear
      this.$data.pagePosition = [];
      let defaultWidth = 414;
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
