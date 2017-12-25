<template>
    <div class="J_nav">
        <div class="index-category Fix">
            <div id="J_slider" class="index_slider">
                <div class="index_slider-wrap Fix">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import nav_items from "../../static/jsondata/nav.data.js"

export default {

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
</style>
