
const H = (options) => {
    let h = {
        "Host": "m.dianping.com",
        "Connection": "keep-alive",
        "Content-Length": 1786,
        "Accept": "application/json",
        "Origin": "https://m.dianping.com",
        "X-Requested-With": "XMLHttpRequest",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1",
        "Content-Type": "application/x-www-form-urlencoded",
        "Referer": "https://m.dianping.com/",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
        "Cookie": 'm_flash2=1; _lxsdk_cuid=160722de02dc8-05ea15fa0da0cd-b7a103e-384000-160722de02dc8; _lxsdk=160722de02dc8-05ea15fa0da0cd-b7a103e-384000-160722de02dc8; _hc.v=50d22d21-8a11-8644-0f1c-10d9b4671d9d.1513744097; switchcityflashtoast=1; default_ab=citylist%3AA%3A1%7Cindex%3AA%3A1; cityid=16; cy=16; _tr.u=T0SdD8yl3vqUXdjM; tg_vg=1686024223; __mta=47554200.1513819933582.1513819933582.1513942104838.2; msource=default; chwlsource=default; locallat=34.0434783; locallng=-118.25193139999999; geoType=wgs84; noswitchcity=1; pvhistory="6aaW6aG1Pjo8Lz46PDE1MTM5OTQ5MzYyNDVdX1s="; _lxsdk_s=160811ce723-002-40d-41%7C%7C24',        
    }
    return h
}   

const R = (options, header) => {
    let h = header?header:H()
    let o = {
        method: "POST",
        headers: h, 
    }
    return new Request("/index/api/module", o)
}


export default {
    getRequest :R,
    getHeader: H
}