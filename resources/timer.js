var saveTheDate = new Date("May 2, 2024 00:00:00").getTime();

var countDown = setInterval(function(){
var now = new Date().getTime();

var gap = saveTheDate - now;
var dd = Math.floor(gap / (1000*60*60*24));
var hh = Math.floor(gap % (1000*60*60*24) / (1000*60*60));
var mm= Math.floor(gap % (1000*60*60) / (1000*60));
var ss = Math.floor(gap % (1000*60) / (1000));

if (dd <= 9)
{
    dd = "0" + dd;
}
if (hh <= 9)
{
    hh = "0" + hh;
}
if (mm <= 9)
{
    mm = "0" + mm;
}
if (ss <= 9)
{
    ss = "0" + ss;
}
document.getElementById("dd").innerHTML = dd;
document.getElementById("hh").innerHTML = hh;
document.getElementById("mm").innerHTML = mm;
document.getElementById("ss").innerHTML = ss;

if(distant == 0)
{
    clearInterval(x);
    document.getElementById("dd").innerHTML = "00";
    document.getElementById("hh").innerHTML = "00";  
    document.getElementById("mm").innerHTML = "00";
    document.getElementById("ss").innerHTML = "00";
}
}, 1000);