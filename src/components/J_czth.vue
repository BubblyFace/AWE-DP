<template>
    <div class="J_czth">
        <div>
            <div class="bord"></div>
            <div class="index_sale_block index_super_sale">
                <a class="index_title title_sale" href="//m.dianping.com/search/deallist/promo?cityid=16&amp;topic=preferential&amp;lat=34.0434783&amp;lng=-118.25193139999999&amp;from=m_discount">
                    <span class="title_left"></span>
                    <span class="more">更多优惠</span>
                    <i class="arrowent"></i>
                </a>
                <div class="index_content" >
                    <a class="index_content_item mixed_content_item" :href="'//m.dianping.com/tuan/deal/'+item.dgId+'?from=m_discount'" v-for="item in itemInfo" :key="item.dgId">
                        <div class="index_cnt" style="height: 93.2836px;">
                            <img :src="item.imageUrl">
                        </div>
                        <div class="title" v-text="item.shortTitle"></div>
                        <div class="price">
                            <ins class="price_current">{{item.price}}</ins>
                            <del class="price_old">{{item.markPrice}}</del>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const defaultData = function() {
  return {
      itemInfo:[]
  };
};
export default {
  data() {
    return defaultData();
  },
  props: {
    moduleData: Object
  },
  methods:{
      init(){
          let m_info = this.$props.moduleData.moduleData.data.preferenceValueHuiVos
          for(let i in m_info){
              this.$data.itemInfo.push(m_info[i])
          }
      }
  }, 
  mounted(){
    this.init()
  }
};
</script>

<style>
.index_sale_block {
    background-color: #fff;
    padding: 7px 6px 10px;
}

.index_sale_block .index_title.title_sale {
    color: #ff524b;
}

.index_sale_block .index_title {
    display: block;
    position: relative;
    height: 32px;
    line-height: 32px;
    font-size: 15px;
    padding-bottom: 5px;
    padding-left: 3px;
}
.index_sale_block .index_title.title_sale .title_left {
    background-position: 0 -29px;
}

.index_sale_block .index_title.title_down .title_left, .index_sale_block .index_title.title_movie .title_left, .index_sale_block .index_title.title_sale .title_left {
    display: inline-block;
    height: 30px;
    width: 75px;
    background-size: 200px;
    background-image: url(//www.dpfile.com/app/app-m-module/static/a41a9b3b0c7b20af96d3cacbfd8692c5.png);
    background-repeat: no-repeat;
}

.index_sale_block .index_title .more {
    font-size: 12px;
    float: right;
    padding-right: 18px;
    color: #bbb;
}

.index_sale_block .index_title .arrowent {
    position: absolute;
    right: 5px;
    top: 50%;
    margin-top: -8px;
    border: 2px solid #bbb;
    transform: rotate(45deg);
    width: 8px;
    height: 8px;
    border-bottom: none;
    border-left: none;
    -webkit-transform: rotate(45deg);
}
.index_sale_block .index_content {
    display: -webkit-box;
    padding-bottom: 5px;
}
.index_sale_block .index_content .mixed_content_item {
    width: 33%;
    border-radius: 3px;
    padding: 0 4px;
    display: block;
    box-sizing: border-box;
}

.index_sale_block .index_content .mixed_content_item img {
    border-radius: 2px;
}
.index_sale_block .index_content .mixed_content_item .title {
    color: #333;
    font-size: 14px;
    padding-top: 3px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.index_sale_block .index_content .mixed_content_item .price {
    line-height: 16px;
    height: 16px;
    font-size: 0;
    padding-top: 5px;
    position: relative;
}
.index_sale_block .index_content .mixed_content_item .price .price_current {
    color: #f63;
    text-decoration: none;
    font-size: 20px;
}
.index_sale_block .index_content .mixed_content_item .price .price_current:before {
    content: "\A5";
    font-size: 14px;
}
.index_sale_block .index_content .mixed_content_item .price .price_old {
    color: #999;
    font-size: 12px;
    margin-left: 2px;
}
.index_sale_block .index_content .mixed_content_item .price .price_old:before {
    content: "\A5";
}
</style>
