const data = [{
        pinyin: "meishi",
        name: "美食",
        src: "//www.dpfile.com/sc/eleconfig/20160126194705meishi.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fm.dianping.com%2Fshoplist%2F16%2Fd%2F1%2Fc%2F10%2Fs%2Fs_-1%3Ffrom%3Dm_nav_1_meishi&schema=dianping%3A%2F%2Ffoodmain%3Fcategoryid%3D10%26utm%3Dulink_meishi%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "maoyandianying",
        name: "猫眼电影",
        src: "//www.dpfile.com/sc/eleconfig/20170223152109dp_wx_maoyan_icon.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fm.maoyan.com%3Ffrom%3Dm_nav_2_maoyandianying&schema=dianping%3A%2F%2Fmoviemain%3Ftab%3D0%26utm%3Dulink_maoyandianying%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "jiudian",
        name: "酒店",
        src: "//www.dpfile.com/sc/eleconfig/20160126203337jiudian.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fm.dianping.com%2Fawp%2Fh5%2Fhotel-dp%2Flist%2Flist.html%3Fcityid%3D16%26from%3Dm_nav_3_jiudian&schema=dianping%3A%2F%2Fhotellist%3Futm%3Dulink_jiudian%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "xiuxianyule",
        name: "休闲娱乐",
        src: "//www.dpfile.com/sc/eleconfig/20160126202841xiuxianyule.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fm.dianping.com%2Fplay%2Fmain%2Findex%3Ffrom%3Dm_nav_4_xiuxianyule&schema=dianping%3A%2F%2Fweb%3Fnotitlebar%3D1%26url%3Dhttps%253A%252F%252Fm.dianping.com%252Fplay%252Fmain%252Findex%253Fcityid%253D*%2526latitude%253D*%2526longitude%253D*%2526dpid%253D*%2526utm%253Dxiuxianyule%26utm%3Dulink_xiuxianyule%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "waimai",
        name: "外卖",
        src: "//www.dpfile.com/sc/eleconfig/20160126203251waimai.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Ftakeaway.dianping.com%2Fwaimai%2Fnewm%3Ffrom%3Dm_nav_5_waimai&schema=dianping%3A%2F%2Ftakeawayshoplist%3Ftab%3D1%26utm%3Dulink_waimai%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "huoguo",
        name: "火锅",
        src: "//www.dpfile.com/sc/eleconfig/20160204172927huoguo.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fm.dianping.com%2Fshoplist%2F16%2Fd%2F1%2Fc%2F110%2Fs%2Fs_-1%3Ffrom%3Dm_nav_6_huoguo&schema=dianping%3A%2F%2Flocalshoplist%3Fcategoryid%3D110%26utm%3Dulink_huoguo%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "liren",
        name: "丽人",
        src: "//www.dpfile.com/sc/eleconfig/20160126202946liren.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fm.dianping.com%2Fbeauty%2Fnode%2Fhtml%2Fdpindex.html%3Fcityid%3D16%26from%3Dm_nav_7_liren&schema=dianping%3A%2F%2Fcomplexweb%3Furl%3Dhttp%253A%252F%252Fevt.dianping.com%252Fchannel%252Fbeauty%252Findex.html%253Fcityid%253D!%2526longitude%253D*%2526latitude%253D*%2526token%253D*%26utm%3Dulink_liren%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "gouwu",
        name: "购物",
        src: "//www.dpfile.com/sc/eleconfig/20160314121215icongouwu135.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fm.dianping.com%2Fshopping%2Findex%3Ffrom%3Dm_nav_8_gouwu&schema=dianping%3A%2F%2Fweb%3Fnotitlebar%3Dtrue%26url%3Dhttp%253A%252F%252Fm.dianping.com%252Fshopping%252Findex%253Fcityid%253D%2521%2526latitude%253D%252A%2526longitude%253D%252A%2526h5Title%253Dhide%26utm%3Dulink_gouwu%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "zhoubianyou",
        name: "周边游",
        src: "//www.dpfile.com/sc/eleconfig/20160126203440zhoubianyou.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fi.meituan.com%2Ftrip%2Flvyou%2Ftriplist%2Fpoi%2F%3Flimit%3D40%26offset%3D0%26sort%3Dsmart%26cateId%3D195%26selectedCityId%3D16%26ste%3D_bdpiother%26source%3Ddp%26from%3Dm_nav_9_zhoubianyou&schema=dianping%3A%2F%2Ftravel_poi_list%3Ffrom%3Dscene%26cateid%3D1%26travelcallapp%3Dtravelcallapptravel_poi_list%26utm%3Dulink_zhoubianyou%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "KTV",
        name: "KTV",
        src: "//www.dpfile.com/sc/eleconfig/20160126203542ktv.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fm.dianping.com%2Fshoplist%2F16%2Fd%2F1%2Fc%2F135%2Fs%2Fs_-1%3Ffrom%3Dm_nav_10_KTV&schema=dianping%3A%2F%2Fktvshoplist%3Fcategoryid%3D135%26utm%3Dulink_KTV%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "hunshasheying",
        name: "婚纱摄影",
        src: "//www.dpfile.com/sc/eleconfig/20160126203830jiehun.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fm.dianping.com%2Fapp%2Fapp-m-wedding-product-peon%2Findex.html%3Fcityid%3D16%26source%3Dm%26from%3Dm_nav_11_hunshasheying&schema=dianping%3A%2F%2Fweb%3Furl%3Dhttp%253A%252F%252Fm.dianping.com%252Fwed%252Fmobile%252Fwedding%252Findex%253Fcityid%253D!%26utm%3Dulink_hunshasheying%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "shenghuofuwu",
        name: "生活服务",
        src: "//www.dpfile.com/sc/eleconfig/20170308125500community_new.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fm.dianping.com%2Feasylife%2Fnode%2Fhtml%2Fcommunity%2Findex.html%3Ffrom%3Dm_nav_12_shenghuofuwu&schema=dianping%3A%2F%2Fweb%3Furl%3Dhttp%253A%252F%252Fh5.dianping.com%252Fplatform%252Feasylife%252Findex.html%26utm%3Dulink_shenghuofuwu%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "jingdian",
        name: "景点",
        src: "//www.dpfile.com/sc/eleconfig/20160126205135jingguan.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fm.dianping.com%2Fshoplist%2F16%2Fd%2F1%2Fc%2F35%2Fs%2Fs_-1%3Ffrom%3Dm_nav_13_jingdian&schema=dianping%3A%2F%2Flocalshoplist%3Fcategoryid%3D35%26utm%3Dulink_jingdian%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "aiche",
        name: "爱车",
        src: "//www.dpfile.com/sc/eleconfig/20160126203742aiche.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fm.dianping.com%2Fshoplist%2F16%2Fd%2F1%2Fc%2F65%2Fs%2Fs_-1%3Ffrom%3Dm_nav_14_aiche&schema=dianping%3A%2F%2Fweb%3Furl%3Dhttps%253A%252F%252Fm.dianping.com%252Feasylife%252Fnode%252Fhtml%252Fcardpindex.html%253Fcityid%253D*%2526token%253D*%2526latitude%253D*%2526longitude%253D*%2526dpid%253D*%2526product%253Ddpapp%26utm%3Dulink_aiche%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "yundongjianshen",
        name: "运动健身",
        src: "//www.dpfile.com/sc/eleconfig/20160126203617jianshen.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fm.dianping.com%2Ffitness%2Fnode%2Fhtml%2Fdpindex.html%3Ffrom%3Dm_nav_15_yundongjianshen&schema=dianping%3A%2F%2Fweb%3Fshark%3D1%26url%3Dhttps%253A%252F%252Fm.dianping.com%252Ffitness%252Fnode%252Fhtml%252Fdpindex.html%253Fcityid%253D*%2526token%253D*%2526latitude%253D*%2526longitude%253D*%2526dpid%253D*%26notitlebar%3D1%26utm%3Dulink_yundongjianshen%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "qinzi",
        name: "亲子",
        src: "//www.dpfile.com/sc/eleconfig/20160126203905qinzi.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fm.dianping.com%2Fbaby%2Fmobile%2Findex%3Fcityid%3D16%26source%3Dm%26from%3Dm_nav_16_qinzi&schema=dianping%3A%2F%2Fweb%3Furl%3Dhttp%253a%252f%252fm.dianping.com%252fwed%252fmobile%252fbaby%252findex%253fdpshare%253d0%2526cityid%253d!%2526latitude%253d*%2526longitude%253d*%2526token%253d*%26utm%3Dulink_qinzi%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "jiazhuang",
        name: "家装",
        src: "//www.dpfile.com/sc/eleconfig/20171009183850zhaungxiugongsi.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fm.dianping.com%2Fwuhan%2Fhome%3Futm_source%3Ddp_m_shouyeicon%26from%3Dm_nav_17_jiazhuang&schema=dianping%3A%2F%2Fweb%3Furl%3Dhttps%253A%252F%252Fm.dianping.com%252Fmtdp%252Fhome%253Futm_source%253Ddp_m_shouyeicon%2526token%253D*%2526cityid%253D*%2526dpid%253D*%26utm%3Dulink_jiazhuang%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "xuexipeixun",
        name: "学习培训",
        src: "//www.dpfile.com/gp/cms/1455525720807.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fm.dianping.com%2Feducation%2Fnode%2Fhtml%2Fdpchannel.html%3Fcityid%3D16%26lat%3D0.0%26lng%3D0.0%26from%3Dm_nav_18_xuexipeixun&schema=dianping%3A%2F%2Fweb%3Furl%3Dhttps%253A%252F%252Fm.dianping.com%252Feducation%252Fnode%252Fhtml%252Fdpchannel.html%253Fcityid%253D*%2526lat%253D*%2526lng%253D*%2526token%253D*%2526dpid%253D*%26utm%3Dulink_xuexipeixun%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "yiliaojiankang",
        name: "医疗健康",
        src: "//www.dpfile.com/sc/eleconfig/20160126204327yiliao.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fm.dianping.com%2Feasylife%2Fnode%2Fhtml%2Fmedicaldpindex.html%3Ffrom%3Dm_nav_19_yiliaojiankang&schema=dianping%3A%2F%2Fweb%3Furl%3Dhttp%253a%252f%252fm.dianping.com%252fmedicine%252findex%253fcityid%253d!%2526latitude%253d*%2526longitude%253d*%2526h5Title%253dhide%26utm%3Dulink_yiliaojiankang%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "daojia",
        name: "到家",
        src: "//www.dpfile.com/sc/eleconfig/20160126203812daojia.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fevt.dianping.com%2Fchannel%2Ftohome%2Findex.html%3Ffrom%3Dm_nav_20_daojia&schema=dianping%3A%2F%2Fweb%3Furl%3Dhttp%253A%252F%252Fevt.dianping.com%252Fchannel%252Ftohome%252Findex.html%2523s%253Dicon%26utm%3Dulink_daojia%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "小吃快餐",
        name: "小吃快餐",
        src: "//www.dpfile.com/sc/eleconfig/20160204173331xiaochikuaican.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fm.dianping.com%2Fshoplist%2F16%2Fd%2F1%2Fc%2F112%2Fs%2Fs_-1%3Ffrom%3Dm_nav_21_xiaochikuaican&schema=dianping%3A%2F%2Flocalshoplist%3Fcategoryid%3D112%26utm%3Dulink_xiaochikuaican%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "zizhucan",
        name: "自助餐",
        src: "//www.dpfile.com/sc/eleconfig/20160204173511zizhucan.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fm.dianping.com%2Fshoplist%2F16%2Fd%2F1%2Fc%2F111%2Fs%2Fs_-1%3Ffrom%3Dm_nav_22_zizhucan&schema=dianping%3A%2F%2Flocalshoplist%2F%3Fcategoryid%3D111%26utm%3Dulink_zizhucan%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "meifa",
        name: "美发",
        src: "//www.dpfile.com/sc/eleconfig/20160316142804meifa.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fm.dianping.com%2Fshoplist%2F16%2Fd%2F1%2Fc%2F157%2Fs%2Fs_-1%3Ffrom%3Dm_nav_23_meifa&schema=dianping%3A%2F%2Flocalshoplist%3Fcategoryid%3D157%26utm%3Dulink_meifa%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "meijimeijie",
        name: "美甲美睫",
        src: "//www.dpfile.com/sc/eleconfig/20160316143047meijia.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fm.dianping.com%2Fshoplist%2F16%2Fd%2F1%2Fc%2F33761%2Fs%2Fs_-1%3Ffrom%3Dm_nav_24_meijiameijie&schema=dianping%3A%2F%2Flocalshoplist%3Fcategoryid%3D33761%26utm%3Dulink_meijiameijie%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "SPA",
        name: "美容SPA",
        src: "//www.dpfile.com/sc/eleconfig/20160316143239meirong.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fm.dianping.com%2Fshoplist%2F16%2Fd%2F1%2Fc%2F158%2Fs%2Fs_-1%3Ffrom%3Dm_nav_25_meirongSPA&schema=dianping%3A%2F%2Flocalshoplist%3Fcategoryid%3D158%26utm%3Dulink_meirongSPA%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "shoutixianshen",
        name: "瘦身纤体",
        src: "//www.dpfile.com/sc/eleconfig/20160316143316shoushen.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fm.dianping.com%2Fshoplist%2F16%2Fd%2F1%2Fc%2F159%2Fs%2Fs_-1%3Ffrom%3Dm_nav_26_shoushenxianti&schema=dianping%3A%2F%2Flocalshoplist%3Fcategoryid%3D159%26utm%3Dulink_shoushenxianti%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "qinzisheying",
        name: "亲子摄影",
        src: "//www.dpfile.com/sc/eleconfig/20160316143612qinzisheying.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fm.dianping.com%2Fshoplist%2F16%2Fc%2F193%3Ffrom%3Dm_nav_27_qinzisheying&schema=dianping%3A%2F%2Fregionshoplist%3Fcategoryid%3D193%26utm%3Dulink_qinzisheying%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "qinziyoule",
        name: "亲子游乐",
        src: "//www.dpfile.com/sc/eleconfig/20160316143656qinziyoule.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fm.dianping.com%2Fshoplist%2F16%2Fc%2F161%3Ffrom%3Dm_nav_28_qinziyoule&schema=dianping%3A%2F%2Fregionshoplist%3Fcategoryid%3D161%26utm%3Dulink_qinziyoule%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "youerjiaoyu",
        name: "幼儿教育",
        src: "//www.dpfile.com/sc/eleconfig/20160316143755youerjiaoyu.png",
        href: "//link.dianping.com/universal-link?originalUrl=https%3A%2F%2Fm.dianping.com%2Fshoplist%2F16%2Fc%2F188%3Ffrom%3Dm_nav_29_youerjiaoyu&schema=dianping%3A%2F%2Fregionshoplist%3Fcategoryid%3D188%26utm%3Dulink_youerjiaoyu%3Adefault%3AChrome%3Am"
    },
    {
        pinyin: "quanbufenlei",
        name: "全部分类",
        src: "//www.dpfile.com/sc/eleconfig/20160125182200more.png",
        href: "//m.dianping.com/wuhan/category?from=m_nav_30_quanbufenlei"
    },
]



export default data