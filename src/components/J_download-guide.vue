<template>
    <div class="J_download-guide">
        <div class="wrapper">
	        <div class="download-guide border-bottom-new">
		        <div class="title">
			        <i class="icon"></i>
			        <span class="text" v-text="moduleInfo.title"></span>
		        </div>
                <div class="btns">
                    <a class="btn-openapp" :href="moduleInfo.openAppUrl" v-text="moduleInfo.openAppText"></a>
                    <a class="btn-downloadapp" v-text="moduleInfo.downloadAppText" :href="moduleInfo.downloadAppUrl">下载APP享特价</a>
                </div>
	        </div>
        </div>
    </div> 
</template>

<script>


export default {
    data(){
        return {
            moduleInfo: {
                title:"",
                openAppUrl:"",
                openAppText:"",
                downloadAppText:"",
                downloadAppUrl:""
            }
        }
    },
    props:{
        moduleData:Object
    },
    methods:{
        init(){
            let m_info = this.$props.moduleData.config
            //console.log(this.$props.moduleData.config)
            for(let i in this.$data.moduleInfo){
                this.$data.moduleInfo[i] = m_info[i]
            }
        }
    },
    mounted(){
        this.init()
    }
    
};
</script>


<style>
.J_download-guide .wrapper {
    height: 120px;
    background-image: url(//www.dpfile.com/app/app-m-module/static/a07db57c79f2a8ec1ecbb761520ba1a2.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: 50%;
}
.J_download-guide .wrapper .download-guide {
    height: 100%;
    display: -webkit-box;
    display: flex;
    flex-direction: column;
}

.J_download-guide .wrapper .download-guide, .download-banner-super, .download-welfare .main, .download-welfare .main .content {
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
}

.border-bottom-new, .border-top-new {
    background-size: 100% 1px;
    background-repeat: no-repeat;
}
.J_download-guide .wrapper .download-guide .title {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 24px 0 14px;
    height: 30px;
}
.J_download-guide .wrapper .download-guide .title {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 24px 0 14px;
    height: 30px;
}
.J_download-guide .wrapper .download-guide .title .icon {
    height: 30px;
    width: 30px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAA2FBMV…XqvI9BlcCwlml6Uxfp4iJN3aO2nY/eGD9+6/74fy4c/e+PvwZCqu0yPm2TAAAAAElFTkSuQmCC);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: 50%;
    margin-right: 8px;
}
.J_download-guide .wrapper .download-guide .title .text {
    font-size: 20px;
    color: #111;
    font-weight: bolder;
}

.J_download-guide .wrapper .download-guide .btns, .J_download-guide .wrapper .download-guide .btns a {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
}
.J_download-guide .wrapper .download-guide .btns .btn-openapp {
    color: #f63;
    margin-right: 15px;
}
.J_download-guide .wrapper .download-guide .btns a {
    height: 40px;
    width: 126px;
    -webkit-box-align: center;
    align-items: center;
    font-size: 14px;
    border-radius: 2px;
    border: 1px solid #f63;
}
.J_download-guide .wrapper .download-guide .btns, .J_download-guide .wrapper .download-guide .btns a {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
}
.J_download-guide .wrapper .download-guide .btns .btn-downloadapp {
    color: #fff;
    background-color: #f63;
}
</style>
