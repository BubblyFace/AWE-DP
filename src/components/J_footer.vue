<template>
    <div class="J_footer">
        {{dom_url}}
        <!-- <a :href="f_url.url" v-for="(f_url, index) in urls[0]" :key="'0'+index" title>{{f_url.name}}</a>
        <a :href="f_url.url" v-for="(f_url, index) in urls[1]" :key="'1'+index" title>{{f_url.name}}</a>
        <a :href="f_url.url" v-for="(f_url, index) in urls[2]" :key="'2'+index" title>{{f_url.name}}</a> -->
      <footer class="footer">
        <a href="//m.dianping.com/nmy/myinfo" title="">我的</a><em class="wide_sep">|</em>
        <a href="//m.dianping.com/forum" title="">社区论坛</a><em class="wide_sep">|</em>
        <a href="//evt.dianping.com/synthesislink/6513.html">添加商户</a><em class="wide_sep">|</em>
        <a href="//evt.dianping.com/synthesislink/10120.html" title="">意见反馈</a>
        <br>
        <a href="//i.meituan.com" title="">美团网</a><em class="narrow_sep">|</em>
        <a href="//i.meituan.com/client/meituan" title="">美团下载</a><em class="narrow_sep">|</em>
        <a href="//m.dianping.com/wed/mobile/wedding/index" title="">结婚</a><em class="narrow_sep">|</em>
        <a href="/baby/mobile/index">亲子</a><em class="narrow_sep">|</em>
        <a href="//m.dianping.com/wed/mobile/home/index" title="">家装</a><em class="narrow_sep">|</em>
        <a href="//m.dianping.com/shoplist/1/c/165" title="">宴会</a><em class="narrow_sep">|</em>
        <a href="//h5.dianping.com/platform/vc-education/index.html" title="">教育</a>
        <br>
        <a id="j-computer" href="//www.dianping.com" title="">电脑版</a><em class="wide_sep">|</em>
        <a id="F_download" href="javascript:void(0)" title="">客户端</a>
        <br>
        <p class="copyright">copyright ©2017 dianping.com</p>
      </footer> 
    </div>
</template>
<script>
import urls from "../../static/jsondata/footer.url.data.js";

const defaultData = () => {
  return {
    urls: urls,
    dom_url: undefined
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
      });
      return dom;
    },
    init() {
      this.$data.dom_url = getUrlDoms();
    },
    beforeMount() {
      init();
    }
  }
};
</script>

<style>

footer {
    text-align: center;
    padding: 15px 5px 10px;
    font-weight: 400;
    font-size: 12px;
}

footer a {
    color: #adadad;
    line-height: 28px;
}

footer .narrow_sep, footer .wide_sep, footer em {
    color: #8c8c8c;
    font-weight: 400;
    font-style: normal;
}
footer .copyright {
    color: #d1d1d1;
    margin-top: 20px;
    text-shadow: 0 1px 1px #fff;
}
</style>
