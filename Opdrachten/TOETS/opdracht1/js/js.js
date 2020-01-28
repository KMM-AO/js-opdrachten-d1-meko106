var body= document.querySelector('body');

var formEl = document.querySelector('form');

var divEl=document.querySelector('#output');

var centen=document.querySelector('#centen');




formEl.addEventListener('submit', function(e){e.preventDefault();
    // console.log("fgfgfd");
    toon();})


    




function toon(){
    var euros=0.00;  var cent=Number(centen.value); var output="";
    if(Number(centen.value)>100.00){
        cent-=100.00;
        euros+=1.00;
        Number(centen.value)-=100.00;
    }
    output="bedrag van "+Number(centen.value) +" bestaat uit " + euros +" en "+cent;
    divEl.appendChild(maakEL('p',output));
}








function maakEL(tag,val){
    let el=document.createElement(tag);
    el.innerHTML=val;
    return el;
}

