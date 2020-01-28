var formEl = document.querySelector('form');
var body=document.querySelector('body');

var note=document.querySelector('#note');
var div=document.querySelector('#output')



window.onload=function(){
    toon();
 }




var nr=1;

formEl.addEventListener('submit', function(ev){ev.preventDefault();
    
    if(note.value.length>0){
        setStorage('note'+nr, note.value);
        setStorage('teller',nr);
        nr+=1;
    }
   
})





function toon(){
    if(localStorage.getItem('teller')!=0){
        for(i=1; i<localStorage.getItem('teller'); i++){
        div.appendChild(maakEL('p',localStorage.getItem('note'+i)));
        }
    }
}








function setStorage(key,waarde){
    let valuee=localStorage.setItem(key,waarde);
    return valuee;
}
    
    
function maakEL(tag,val){
    let el=document.createElement(tag);
    el.innerHTML=val;
    return el;
}
