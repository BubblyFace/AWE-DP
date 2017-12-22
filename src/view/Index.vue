<template>
  <div>
        <J_header></J_header>   
        <div class="J_nav">J_nav</div>
        <div class="J_xyhzq">J_xyhzq</div>
        <div class="J_footer">J_footer</div>
    </div>
</template>

<script>
import j_header from "../components/J_header.vue"

function defaultData() {
    return {
        default_data : "lalala"
    }
}

function testAPI() {
    let xhr = new XMLHttpRequest() 
    xhr.open('GET',"https://m.dianping.com/index/api/module")
    xhr.send()
    console.log(xhr.response)
}

export default {
    data(){
        return defaultData()
    },
    components: {
        "J_header" : j_header
    },
    mounted(){
        testAPI()
    },
    methods:{
        init() {
            // 对个接口体验人生

        }
    }
}
</script>

<style>
    
</style>
