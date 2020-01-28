var bodyy=document.querySelector('body');
var div1=document.createElement('div');
bodyy.appendChild(div1);
var button=document.getElementById('button');
var date=new Date();
date.setDate(date.getDate()+50);   // let op de variable naam




function stop(){
    clearInterval(set);
}



button.addEventListener('click',function(e){e.preventDefault();
    stop();})


var set=setInterval(tijdfunction,1000);



function tijdfunction(){
    var d=new Date();
    document.querySelector('#demo').innerHTML="De tijd in de USA is "+d.toLocaleString();
}




// div1.appendChild(maakEl('p',date.toLocaleString()));









function maakEl(tag,value){
    var el=document.createElement(tag);
    el.innerHTML=value
    return el;
}