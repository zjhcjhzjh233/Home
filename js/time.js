function time() {
    var birthDay =NewDate("2019-05-13");
    // 这里修改站点开启日期
    var today=new Date();
    var timeold=today.getTime()-birthDay.getTime();
    var sectimeold=timeold/1000
    var secondsold=Math.floor(sectimeold);
    var msPerDay=24*60*60*1000; var e_daysold=timeold/msPerDay;
    var daysold=Math.floor(e_daysold);
    var e_hrsold=(daysold-e_daysold)*-24;
    var hrsold=Math.floor(e_hrsold);
    var e_minsold=(hrsold-e_hrsold)*-60;
    var minsold=Math.floor((hrsold-e_hrsold)*-60); var seconds=Math.floor((minsold-e_minsold)*-60).toString();
    document.getElementById("showsectime").innerHTML = "稳定运行 :"+daysold+"天"+hrsold+"小时"+minsold+"分"+seconds+"秒";
    setTimeout(showsectime, 1000);
    }showsectime();