var knop=document.querySelector('#knop');
var getal=document.querySelector("#getal");
var body=document.querySelector('body');
var divEl= document.createElement('div');

body.appendChild(divEl);


knop.addEventListener('click', function(e){e.preventDefault();
    // console.log("fgfgfd");
    toon();})


function toon(){
    let out=""; let devee=""; let output="";
for(i=0; i<=Number(getal.value); i++){
    out+=i+"   ";
    for(v=0; v<Number(getal.value); v++){
    devee=v+"   ";
    divEl.appendChild(maakel('p',devee));
}
divEl.appendChild(maakel('p',out));
}


divEl.appendChild(maakel('p',"fddgd"));






function maakel(tag,value){
    var el=document.createElement(tag);
    el.innerHTML=value;
    return el;
}