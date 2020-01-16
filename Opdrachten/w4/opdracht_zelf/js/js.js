var formEl = document.querySelector('form');
var kleur=document.querySelector('#kleur');
var usernaam=document.querySelector('#naam');
// var userval=usernaam.value;
var body=document.querySelector('body');
var div2=document.createElement('div');
body.appendChild(div2);

var contEl=document.querySelector('.container');
var cookiee=document.cookie.replace(/(?:(?:^|.*;\s*)meko\s*\=\s*([^;]*).*$)|^.*$/, "$1");



formEl.addEventListener('submit', function(ev){
    ev.preventDefault();

    console.log("MEkoooooo");
    console.log(kleur.value);
    div2.appendChild(maakEL('p',usernaam.value));//let op de p is een object
    body.style.backgroundColor=kleur.value;


    creatcookie('meko','student');
    creatcookie('color',kleur.value);
    var coo=getCookie('meko');
    console.log(coo);
    
});





function getCookie(key){
    cookievv="";
    switch(key){
        case 'meko':                            //deze strig is zelfde als hier onder
            cookievv=document.cookie.replace(/(?:(?:^|.*;\s*)meko\s*\=\s*([^;]*).*$)|^.*$/, "$1");//haal de waarde
            break;
        case 'color':
            cookievv=document.cookie.replace(/(?:(?:^|.*;\s*)meko\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            break;
        default:
            cookievv="";
    }
    return cookievv;
}



function setPageSettings(){
    var nameValue = getCookie('meko');
    var colorValue = getCookie('color');
    body.style.backgroundColor = colorValue;
    var nameEl = makeElement('h2', 'Hello ' + nameValue);

    contEl.appendChild(nameEl);
}










function creatcookie(key,value){
    document.cookie=key+"="+value+'; expires=Thu, 01 JAN 2021 00:00:00 UTC';
}




function maakEL(tag,val){
    let el=document.createElement(tag);
    el.innerHTML=val;
    return el;
}