<template>
    <div class="J_nav">
        <div class="index-category Fix">
            <div id="J_slider" class="index_slider">
                <div class="index_slider-wrap Fix">
                    <div class="page Fix" v-for="(page, index) in pageInfo" :key="index">
                        <a class="item" :href="item.href" v-for="item in page" :key="item.pinyin" style="width:20%">
                            <img class="icon" :src="item.src" >
                            <div>{{item.name}}</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import nav_items from "../../static/jsondata/nav.data.js"

function defaultData(){
    return {
        pageInfo:[],
    }
}

export default {
    data(){
        return defaultData()
    },
    methods:{
        init(){
            this.pageInit()
        },
        pageInit(){
            let ls = nav_items
            let page = 0
            this.$data.pageInfo.push([])
            for(let i = 0; i < nav_items.length; i ++){
                if(i % 10 === 0 && i !== 0){
                    this.$data.pageInfo.push([])
                    page += 1
                    this.$data.pageInfo[page].push(nav_items[i])
                }else{
                    this.$data.pageInfo[page].push(nav_items[i])
                }
            }
            console.log(nav_items.length,this.$data.pageInfo)
        }
    },
    beforeMount(){
        this.init()
    }
}
</script>

<style>
.index-category {
    text-align: center;
    padding: 0 0 10px;
    background-image: linear-gradient(0,#e1e1e1,#e1e1e1 50%,transparent 0);
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
</style>
