var formEl = document.querySelector('form');
var kleur=document.querySelector('#kleur');
var usernaam=document.querySelector('#naam');
// var userval=usernaam.value;
var body=document.querySelector('body');
var div2=document.createElement('div'); 
body.appendChild(div2);



// is nog niet helemaal klaar 



formEl.addEventListener('submit', function(ev){ev.preventDefault();


    div2.appendChild(maakEL('p',usernaam.value));//let op de p is een object
    body.style.backgroundColor=kleur.value;


    setStorage('meko','student');
    setStorage('color',kleur.value);
    div2.appendChild(maakEL('p',usernaam.value));


 

    

});

var aantal;
function test(waarde){
    
    if(sessionStorage.getItem(waarde)){
        aantal+=1;
    }else{
        aantal=1;
    }
    return aantal;
}

window.onload=function(){
    console.log(test('meko'));
}







function getValue(key){
    let value="";
    switch(key){
        case 'meko':                            //deze strig is zelfde als hier onder
            value=document.cookie.replace(/(?:(?:^|.*;\s*)meko\s*\=\s*([^;]*).*$)|^.*$/, "$1");//haal de waarde
            break;
        case 'color':
            color=document.cookie.replace(/(?:(?:^|.*;\s*)meko\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            break;
        default:
            value="";
    }
    return value;
}





function setStorage(key,value){
    let valuee=sessionStorage.setItem(key,value);
    return valuee;
}





function maakEL(tag,val){
    let el=document.createElement(tag);
    el.innerHTML=val;
    return el;
}
