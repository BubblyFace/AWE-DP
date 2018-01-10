<template>
  <div>
        <J_header></J_header>   
        <J_download-guide :moduleData="moduleList['download-guide']" ></J_download-guide>    
        <J_nav></J_nav>   
        <J_xyhzq></J_xyhzq> 
        <J_czth :moduleData="moduleList['czth']"></J_czth>  
        <J_footer></J_footer>
    </div>
</template>

<script>
import API from "../../static/scripts/api.js"
import j_download_guide from "../components/J_download-guide.vue"
import j_header from "../components/J_header.vue"
import j_nav from "../components/J_nav.vue"
import j_xyhzq from "../components/J_xyhzq.vue"
import j_footer from "../components/J_footer.vue"
import j_czth from "../components/J_czth.vue"

//数据导入
import moduleData from "../../static/jsondata/modules.js";


function defaultData() {
    return {
        moduleList : {},
        moduleData: moduleData
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
        "J_footer":j_footer,
        "J_download-guide":j_download_guide,
        "J_czth": j_czth
    },
    beforeMount(){
        //用这个钩子可以把数据传过去
        this.handleModule()
    },
    methods:{
        init() {
            // 对个接口体验人生
        },
        handleModule(){
            let data = moduleData
            let module_1 = data[0]
            let module_2 = data[1]
            for(let i = 0;i < module_1.data.moduleInfoList.length;i++){
                let moduleName =  module_1.data.moduleInfoList[i].moduleName
                this.$data.moduleList[moduleName] = module_1.data.moduleInfoList[i]
            }
            for(let i = 0;i < module_2.data.moduleInfoList.length;i++){
                let moduleName =  module_2.data.moduleInfoList[i].moduleName
                this.$data.moduleList[moduleName] = module_2.data.moduleInfoList[i]
            }
        }
    }
}
</script>

<style>
    
</style>
