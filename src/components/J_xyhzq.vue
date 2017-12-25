<template>
  <div class="J_xyhzq">
      <div class="bord"></div>
      <div class="index_xyhzq">
          <div class="xyhzq_block" v-for="(xyhzq_item, index) in xyhzq_data" :key="index">
              <a href="javascript:void(0)" :class="'index_xyhzq_item xyhzq_item'+(index+1)"  :data-url="xyhzq_item.url">
                  <div class="title">{{xyhzq_item.title}}</div>
                  <div :class="'sub sub'+(index+1)">{{xyhzq_item.sub}}</div>
                  <img class="pic" width="60px" :src="xyhzq_item.imgSrc" alt="">
              </a>
          </div>
      </div>
  </div>
</template>

<script>
const defaultData = () => {
  return {
    xyhzq_data: []
  };
};

const test_data = [
  {
    url:
      "dianping://web?url=https%3A%2F%2Fh5.dianping.com%2Fapp%2Fziggurat%2F1050%2Findex.html%3Factivity_tlt%3D1050%26infrom%3Dmzone",
    title: "100%中奖",
    sub: "送超豪华红包",
    imgSrc:
      "//op.meituan.net/oppkit_pic/20160310032241-1e027deb-2/cd39ec76d6b3075f68cbbaf5a42ff4ca.png"
  },
  {
    url:
      "//h5.dianping.com/app/ziggurat/1081/index.html?activity_tlt=1081&infrom=mzone",
    title: "圣诞66礼包",
    sub: "马上拥有",
    imgSrc:
      "//op.meituan.net/oppkit_pic/20160310032241-1e027deb-2/39f19b42223cd6fac91b689ad689f10e.png"
  }
];

export default {
  data() {
    return defaultData();
  },
  methods: {
    init() {
      this.getXyhzqData();
    },
    getXyhzqData() {
      for (let i in test_data) {
        console.log(i)
        this.$data.xyhzq_data.push(test_data[i]);
      }
    }
  },
  beforeMount() {
    this.init();
  }
};
</script>

<style>
.index_xyhzq {
  background-image: linear-gradient(0, #e1e1e1, #e1e1e1 50%, transparent 0);
  background-position: 100% 100%;
  background-size: 100% 1px;
  background-repeat: no-repeat;
  height: 78px;
  padding: 2px;
  background-color: #fff;
}

.xyhzq_block {
    width: 50%;
    height: 100%;
    padding: 2px;
    box-sizing: border-box;
}

.index_xyhzq .index_xyhzq_item {
    color: #fff;
    padding-left: 8px;
    position: relative;
    display: block;

    height: 100%;
    box-sizing: border-box;
}

.index_xyhzq .index_xyhzq_item .title {
    font-size: 16px;
    padding: 12px 0 2px;
    position: relative;
    z-index: 1;
}
.index_xyhzq .index_xyhzq_item.xyhzq_item1 {
    background-color: #ffa383;
}

.index_xyhzq .index_xyhzq_item.xyhzq_item2 {
    background-color: #44d0cd;
}


.index_xyhzq .index_xyhzq_item .sub {
    font-size: 12px;
    width: 75px;
    text-align: center;
    padding: 2px;
    border-radius: 12px;
    position: relative;
    z-index: 1;
    -webkit-transform: scale(.9);
    transform: scale(.9);
    margin-left: -4px;
}

.index_xyhzq .index_xyhzq_item .sub.sub1 {
    background-color: #f97e54;
}

.index_xyhzq .index_xyhzq_item .sub.sub2 {
    background-color: #22bab7;
}

.index_xyhzq .index_xyhzq_item .pic {
    position: absolute;
    right: 6px;
    top: 7px;
}

</style>
