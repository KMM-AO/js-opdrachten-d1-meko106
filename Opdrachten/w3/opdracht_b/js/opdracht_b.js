var formel=document.querySelector("form");
var getal=document.querySelector("#getal");

var newdiv=document.createElement('div');
document.querySelector('body').appendChild(newdiv);


// getal.addEventListener('mouseout',function(e){e.preventDefault(); zien()})
formel.addEventListener('submit',function(e){e.preventDefault(); toon()})


function zien(){
    var nummer=Number(getal.value);


    for(i=0;i<11; i++){
    newdiv.appendChild(maak('p',i+" x "+ nummer+" = "+(i*nummer)));
    }
}
function toon(){
    console.log("Toon het boodschap");
}






function maak(tag,vale){
    var el=document.createElement('p');
    el.innerHTML=vale;
    return el;
}