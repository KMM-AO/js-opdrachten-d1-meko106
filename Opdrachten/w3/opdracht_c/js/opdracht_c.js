var formel=document.querySelector("form");
var getal=document.querySelector("#getal");



var newdiv=document.createElement('div');
document.querySelector('body').appendChild(newdiv);


 formel.addEventListener('submit',function(e){e.preventDefault(); zien()})

function zien(){
    var nummer=Number(getal.value);


    for(i=0;i<11; i++){
    newdiv.appendChild(maak('p',i+" x "+ nummer+" = "+(i*nummer)));
    }
}

function maak(tag,vale){
    var el=document.createElement('p');
    el.innerHTML=vale;
    return el;
}