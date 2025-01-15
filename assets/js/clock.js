var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();

setInterval(
    function(){
       d = new Date();
       second = d.getSeconds() * 6; // 6 درجات لكل ثانية
       minute = d.getMinutes() * 6; // 6 درجات لكل دقيقة
       hour = d.getHours() * 30 + Math.round(minute / 12); // 30 درجة لكل ساعة + تعديل الدقائق

       document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
       document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)";
       document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";
    }, 1000
);