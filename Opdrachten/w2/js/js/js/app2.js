var formelement=document.getElementById('form'); //qeuro selector form
var getal1EL=document.querySelector("#getal1"); //hastag voor id
var getal2EL=document.querySelector("#getal2");



formelement.addEventListener('submit',function(e){
    e.preventDefault();
    toon();
});
// document.querySelector('#getal11').innerHTML=document.getElementById('#getal1');

function toon(){
    var getal1=Number(getal1EL.value);
    var getal2=Number(getal2EL.value);
    if(getal1>getal2){
        document.querySelector('#test').innerHTML=getal1+" is groter dan"+getal2;
    }else if(getal1<getal2){
        document.querySelector('#test').innerHTML=getal1+" is kleinder dan "+getal2;
    }
}