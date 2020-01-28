var formEl = document.querySelector('form');
var kleur=document.querySelector('#kleur');
var usernaam=document.querySelector('#naam');
// var userval=usernaam.value;
var body=document.querySelector('body');
var div2=document.createElement('div');
body.appendChild(div2);




window.onload=function(){
    uitprint('counter');
 }


formEl.addEventListener('submit', function(ev){ev.preventDefault();


    // div2.appendChild(maakEL('p',usernaam.value));//let op de p is een object
    body.style.backgroundColor=kleur.value;



    if(usernaam.value.length>0){
        setStorage('naam',usernaam.value);
        setStorage('color',kleur.value);
    }



function uitprint(waarde){
    let aantal;
    if(localStorage.getItem(waarde)){
        aantal=Number(localStorage.getItem(waarde));
        aantal+=1;
        if(Number(aantal)>=1){
            usernaam.value=localStorage.getItem('naam');
            kleur.value=localStorage.getItem('color');
            body.style.backgroundColor=kleur.value;
        }
    }else{
        aantal=0;
    }

    setStorage(waarde,aantal);
    if(localStorage.getItem('naam')!=null){
        tekst+=div2.appendChild(maakEL('p',"Hallo "+localStorage.getItem('naam')));
    }
    var tekst=div2.appendChild(maakEL('p',"Deze pagina is "+aantal+" keer bezocht"));
}







function setStorage(key,value){
    let valuee=localStorage.setItem(key,value);
    return valuee;
}




function maakEL(tag,val){
    let el=document.createElement(tag);
    el.innerHTML=val;
    return el;
}
