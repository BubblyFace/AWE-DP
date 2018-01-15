<template>
  <div class="J_cnxh">
      <div class="bord"></div>
      <div class="index_for_you J_index_for_you">
        <div class="index_like_title">猜你喜欢</div>
        <div class="index_content J_index_content">
            <div v-for="guessList in guessInfo.shownArray" :key="guessList.searchQueryId">
                <a v-for="guessItem in guessList.guessYouVoList" :key="guessItem.dealgroupid" :href="'//m.dianping.com/tuan/deal/' + guessItem.dealgroupid +'?from=m_reculike&rec_query_id=59e8e1ea-79d0-42f2-af78-a9fb2d1abac5'" class="index_content_item standard_content_item">
                    <div class="pic">
                        <div class="pic_tag" v-if="guessItem.pictag.tag" :style="{'color':guessItem.pictag.color}" v-text="guessItem.pictag.tag">
                        </div>
                        <img :src="guessItem.defaultPic" :style="{'width': '90px','height':'90px'}">
                    </div>
                    <div class="content">
                        <div class="shop_name_main">
                            <div class="shop_name" :style="{'max-width': '265px'}" v-text="guessItem.shopName"></div>
                            <div class="shop_tag" :style="{'width':'8px', 'color':guessItem.itemtag.color}" v-text="guessItem.itemtag.tag"></div>
                        </div>
                        <div class="shop_name_sub" v-text="guessItem.dealGroupTitle">
                        </div>
                        <div class="item_price">
                            <div class="price_related">
                                <ins class="price_current" v-text="guessItem.dealgroupPrice">
                                </ins>
                                <ins class="price_old" v-if="guessItem.marketPrice&&!guessItem.promovalue" v-text="guessItem.marketPrice"></ins>
                                <div v-if="guessItem.promovalue" class="price_down" :style="{'max-width':'155px','display':'block'}" v-text="guessItem.promovalue"></div>
                            </div>
                            <div class="sale_desc" v-text="'已售'+guessItem.tgcurrentjoin">
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div class="load-wrap" style="display: none;">
            <div class="loading-img"></div>
            <span>正在加载...</span>
        </div>
        <a class="load-more" href="//m.dianping.com/tuan/wuhan?from=m_reculike" style="display: block;">查看更多</a>
      </div>
      
  </div>
</template>

<script>
const defaultData = function(){
    return {
        moduleInfo: undefined,
        guessInfo: {
            totalNum:0,
            shownArrayNum:0,
            shownArray:[]
        },
    }
}
export default {
    data(){
        return defaultData()
    },
    props:{
        moduleData:Object
    },
    mounted(){
        this.init()
    },
    methods:{
        init(){
            //max num  == 50
            //init num == 10
            console.log(this.$props.moduleData, 1)
            this.$data.moduleInfo = this.$props.moduleData.moduleData.data
            this.handleGuessInfo()
        },
        handleGuessInfo(){
            let guessYouVoList = this.$data.moduleInfo.guessYouVoList
            let gi = this.$data.guessInfo
            gi.shownArrayNum ++
            gi.totalNum = this.$data.moduleInfo.totalNum
            let array = {
                searchQueryId: this.$data.moduleInfo.searchQueryId,
                guessYouVoList: guessYouVoList
            }
            gi.shownArray.push(array)
        }
    }
}
</script>

<style>
.index_for_you {
    background-color: #fff;
}
.index_for_you .index_like_title {
    height: 30px;
    line-height: 40px;
    padding-left: 15px;
    font-size: 14px;
    color: #777;
}
.index_for_you .index_content {
    background-color: #fff;
    position: relative;
}


.index_for_you .index_content .standard_content_item {
    margin-left: 15px;
    padding: 11px 10px 11px 0;
    box-sizing: border-box;
    display: -webkit-box;
}
.index_for_you .index_content .standard_content_item, .index_for_you .load-more {
    background-image: linear-gradient(0,#e1e1e1,#e1e1e1 50%,transparent 0);
    background-position: 100% 100%;
    background-size: 100% 1px;
    background-repeat: no-repeat;
}

.index_for_you .index_content .standard_content_item .pic {
    position: relative;
    font-size: 0;
    padding-right: 10px;
}
.index_for_you .index_content .standard_content_item .pic .pic_tag {
    font-size: 12px;
    -webkit-transform: scale(.98);
    transform: scale(.98);
    padding: 3px 7px;
    background-color: #000;
    color: #e5bf86;
    position: absolute;
    font-weight: 700;
}

.index_for_you .index_content .standard_content_item .content {
    -webkit-box-flex: 1;
}

.index_for_you .index_content .standard_content_item .content .shop_name_main {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.index_for_you .index_content .standard_content_item .content .shop_name_main .shop_name {
    max-width: 145px;
    font-size: 17px;
    font-weight: 700;
    color: #111;
    padding-right: 8px;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.index_for_you .index_content .standard_content_item .content .shop_name_main .shop_tags {
    display: -webkit-box;
    height: 22px;
    line-height: 15px;
    font-weight: 700;
    padding-top: 1px;
}
.index_for_you .index_content .standard_content_item .content .shop_name_sub {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 13px;
    color: #777;
    padding-top: 9px;
    padding-bottom: 13px;
}
.index_for_you .index_content .standard_content_item .content .item_price {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 22px;
    line-height: 22px;
    padding-right: 4px;
}

.index_for_you .index_content .standard_content_item .content .item_price .price_related {
    display: -webkit-box;
    max-width: 145px;
}

.index_for_you .index_content .standard_content_item .content .item_price .price_related .price_current {
    color: #f63;
    font-size: 21px;
    text-decoration: none;
    font-weight: 700;
}
.index_for_you .index_content .standard_content_item .content .item_price .price_related .price_down {
    display: none;
    margin-left: -2px;
    color: #f63;
    font-size: 12px;
    -webkit-transform: scale(.8);
    transform: scale(.8);
    border: 1px solid;
    padding: 2px 4px 1px;
    line-height: 15px;
    height: 15px;
    margin-top: 3px;
    border-radius: 1px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.index_for_you .index_content .standard_content_item .content .item_price .price_related .price_old {
    font-size: 13px;
    color: #777;
    text-decoration: line-through;
    vertical-align: 1px;
}

.index_for_you .index_content .standard_content_item .content .item_price .sale_desc {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: right;
    font-size: 13px;
    color: #777;
    line-height: 24px;
}

.load-wrap {
    background-image: linear-gradient(0,#e1e1e1,#e1e1e1 50%,transparent 0);
    background-position: 100% 100%;
    background-size: 100% 1px;
    background-repeat: no-repeat;
    text-align: center;
    height: 45px;
    line-height: 45px;
    background-color: #fff;
    color: #666;
}
.load-wrap .loading-img {
    vertical-align: middle;
    margin-right: 5px;
    width: 20px;
    height: 20px;
    display: inline-block;
    background-image: url(//www.dpfile.com/app/app-m-module/static/d53930b….png);
    background-repeat: no-repeat;
    background-position: -1px 0;
    background-size: 174px;
    -webkit-transform-origin: center center;
    -webkit-animation-name: loading;
    -webkit-animation-duration: 1.2s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
}
.index_for_you .load-more {
    display: none;
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: #fff;
    color: #333;
    font-size: 15px;
}
.index_for_you .index_content .standard_content_item, .index_for_you .load-more {
    background-image: linear-gradient(0,#e1e1e1,#e1e1e1 50%,transparent 0);
    background-position: 100% 100%;
    background-size: 100% 1px;
    background-repeat: no-repeat;
}
</style>
