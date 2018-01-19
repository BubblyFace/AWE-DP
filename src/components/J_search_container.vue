<template >
    <div class="J_search_container search_container">
        <form class="J_form" method="get" action="//m.dianping.com/shoplist/16/search">
            <div class="head_cnt">
                <div class="head_cnt_input">
                    <input type="hidden" name="from" value="m_search">
                    <input type="text" name="keyword" class="J_search_input" autocomplete="off" placeholder="输入商户名、地点">
                    <i class="clear" data-role="clear"></i>
                </div>
                <a class="cancel J_cancel" href="javascript:;" @click="hideSearch">取消</a>
            </div>
            <div class="J_key_wrapper" style="height: 691px; position: relative; top: 45px;">
                <div class="J_key_scroll" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
                    <div class="J_key_list key_list Fix">
                        <a href="javascript:void(0)" data-id="">串串</a>
                        <a href="javascript:void(0)" data-id="">烤肉</a>
                        <a href="javascript:void(0)" data-id="">火锅</a>
                        <a href="javascript:void(0)" data-id="">星巴克</a>
                        <a href="javascript:void(0)" data-id="">海底捞</a>
                        <a href="javascript:void(0)" data-id="">小龙坎</a>
                        <a href="javascript:void(0)" data-id="">武汉天地</a>
                        <a href="javascript:void(0)" data-id="">汉街</a>
                        <a href="javascript:void(0)" data-id="">k11</a>
                    </div>
                    <div class="J_history_list key_list Fix">
                        <div class="J_history_title">搜索记录</div>
                        <div class="history_list"></div>
                    </div>
                    <a class="J_history_clear link-btn" href="javascript:;">清除搜索记录</a>
                    <ul class="J_suggest_list suggest_list" style="display: none;"></ul>
                </div>
            </div>
        </form>
    </div>  
</template>

<script>
    const defaultData = function(){
        return {
        }
    }
    export default {
        data(){
            return defaultData()
        },
        props:{
            showSearch: Boolean
        },
        methods:{
            init(){
                
            },
            hideSearch(){
                this.$emit('hideSearch')
                this.$parent.hideSearch()
            }
        },
        mounted(){
            this.init()
        }
    }
</script>

<style>

.search_container {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 999
}

.search_container .head_cnt {
    position: fixed;
    width: 80%;
    padding: 0 18% 0 2%;
    height: 45px;
    line-height: 45px;
    background-color: #fff;
    text-align: center;
    color: #f63;
    z-index: 300;
    display: box;
    display: -webkit-box;
    display: -ms-flexbox;
    -webkit-box-align: center;
    -ms-box-align: center;
    box-align: center
}

.search_container .head_cnt .head_cnt_input {
    -webkit-box-flex: 1;
    box-flex: 1;
    -ms-box-flex: 1;
    -ms-flex: 1;
    position: relative
}

.search_container input[type=text] {
    background-color: #f0f0f0;
    font-size: 14px;
    width: 100%;
    height: 30px;
    padding-left: 10px;
    border: none;
    border-radius: 15px;
    -webkit-border-radius: 15px;
    display: box;
    display: -webkit-box;
    display: -ms-flexbox;
    -webkit-box-align: center;
    -ms-box-align: center;
    box-align: center
}

.search_container .cancel {
    color: #f63;
    position: absolute;
    right: 10px;
    top: 0;
    font-size: 14px
}

.search_container .J_key_list {
    padding: 10px 15px;
    background-color: #f0f0f0
}

.search_container .J_key_list a {
    float: left;
    background-color: #fff!important;
    color: #323232;
    width: 33%;
    height: 38px;
    line-height: 38px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0;
    margin: 0
}

.search_container .J_key_list a:first-child,.search_container .J_key_list a:nth-child(2),.search_container .J_key_list a:nth-child(4),.search_container .J_key_list a:nth-child(5) {
    background-image: linear-gradient(0,#e1e1e1,#e1e1e1 50%,transparent 0),linear-gradient(90deg,#e1e1e1,#e1e1e1 50%,transparent 0);
    background-position-x: right,right;
    background-position-y: bottom,top;
    background-size: 100% 1px,1px 100%;
    background-repeat: no-repeat
}

.search_container .J_key_list a:nth-child(3),.search_container .J_key_list a:nth-child(6) {
    background-image: linear-gradient(0,#e1e1e1,#e1e1e1 50%,transparent 0);
    background-position: 100% 100%;
    background-size: 100% 1px;
    background-repeat: no-repeat
}

.search_container .J_key_list a:nth-child(7),.search_container .J_key_list a:nth-child(8) {
    background-image: linear-gradient(90deg,#e1e1e1,#e1e1e1 50%,transparent 0);
    background-position: 100% 0;
    background-size: 1px 100%;
    background-repeat: no-repeat
}

.search_container .suggest_list {
    padding: 0 10px 0 15px
}

.search_container .suggest_list a {
    padding: 15px 10px 15px 0;
    font-size: 15px;
    line-height: 15px;
    position: relative;
    display: block;
    color: #333
}

.search_container .suggest_list a .number {
    float: right;
    color: #666;
    font-size: 12px
}

.search_container .link-btn {
    height: 45px;
    line-height: 45px;
    color: #333;
    text-align: center;
    font-size: 15px;
    background-color: #fff;
    display: block;
    border: none
}

.search_container .J_history_list {
    background-color: #fff;
    display: none;
    font-size: 15px;
    color: #323232
}

.search_container .J_history_list .J_history_title {
    background-color: #f0f0f0;
    padding: 8px 15px;
    color: #999
}

.search_container .J_history_list .history_list {
    padding-left: 15px
}

.search_container .J_history_list .history_list a {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-color: #fff;
    color: #323232;
    height: 48px;
    line-height: 48px
}


.clear,.search_container .J_history_clear {
    display: none
}

.clear {
    right: 0;
    background-image: url(//www.dpfile.com/app/app-m-module/static/d53930bbff0bf22cb8cea72503da44d9.png);
    background-size: 250px;
    background-repeat: no-repeat;
    background-position: 3px -185px;
    position: absolute;
    top: 50%;
    width: 22px;
    height: 34px;
    margin-top: -18px
}
</style>