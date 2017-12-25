<template>
  <div>
        <J_header></J_header>   
        <J_nav></J_nav>   
        <J_xyhzq></J_xyhzq> 
        <J_footer></J_footer>
    </div>
</template>

<script>
import API from "../../static/scripts/api.js"
import j_header from "../components/J_header.vue"
import j_nav from "../components/J_nav.vue"
import j_xyhzq from "../components/J_xyhzq.vue"
import j_footer from "../components/J_footer.vue"


function defaultData() {
    return {
        default_data : "lalala"
    }
}

function testAPI() {
    let r = API.getRequest()
    fetch(r).then((res) => {
        console.log(res)
    })
}

export default {
    data(){
        return defaultData()
    },
    components: {
        "J_header" : j_header,
        "J_nav" : j_nav,
        "J_xyhzq": j_xyhzq,
        "J_footer":j_footer
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
