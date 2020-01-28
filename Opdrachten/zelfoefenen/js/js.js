
window.load=function(){
var tijdvar=setInterval(function(){haal()},1000);
}

function haal(){
    var d=new Date();
    document.querySelector('#cont').innerHTML=d.toLocaleTimeString();
}
















document.cookie="name=meko";
document.cookie='nummer=4';

var allCookie=document.cookie;
console.log(allCookie);

var cookiearr=allCookie.split('; ');

// for (let i of cookiearr){
//     console.log(i);
//     console.log("De key is " +i.split('=')[0]);
//     console.log("De value is "+i.split('=')[1]);
// }


var haal=document.cookie.replace(/(?:(?:^|.*;\s*)name\s*\=\s*([^;]*).*$)|^.*$/, "$1");
console.log(haal);


document.cookie('naam=meko; expires=Thu, 01 Jan 1990 00:00:00 UTC');













