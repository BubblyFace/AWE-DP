<template>
    <div class="J_footer">
        {{dom_url}}
        <a :href="f_url.url" v-for="(f_url, index) in urls[0]" :key="0+index" title>{{f_url.name}}</a>
        <a :href="f_url.url" v-for="(f_url, index) in urls[1]" :key="1+index" title>{{f_url.name}}</a>
        <a :href="f_url.url" v-for="(f_url, index) in urls[2]" :key="2+index" title>{{f_url.name}}</a>
    </div>
</template>
<script>
import urls from "../../static/jsondata/footer.url.data.js";

const defaultData = () => {
  return {
    urls: urls,
    dom_url:undefined
  };
};
export default {
  data() {
    return defaultData();
  },
  methods: {
    getUrlDoms() {
      let dom = Vue.extend({
          template: "<div>test</div>"
      })
      return dom;
    },
    init() {
      this.$data.dom_url = getUrlDoms();
    },
    beforeMount(){
        init()
    }
  }
};
</script>

<style>

</style>
