var formElement=document.querySelector("form");
var getal1=document.querySelector("#getal1");
var getal2=document.querySelector("#getal2"); // hashtag is voor de id


var newDiv= document.createElement('div');
document.querySelector('body').appendChild(newDiv);

formElement.addEventListener('submit',function(e){e.preventDefault(); zien();})
getal2.addEventListener('onblur',function(e){e.preventDefault(); week3();})


// function zien(){
//     var nummer1=Number(getal1.value);
//     var nummer2=Number(getal2.value);

//     var arr=[nummer1,nummer2];
//     var summ=0;
//     for(i=0; i<arr.length; i++){ // de sum 
//         summ+=arr[i];
//     }
function week3(){
    par=maakel('p',getal1);
    newDiv.innerHTML=par;
}

    
    newDiv.appendChild(maakel('p',"De sum is "+summ));

    var avg= summ/arr.length;  // de average
    newDiv.appendChild(maakel('p',"De average is "+avg));





}
function maakel(tag,value){
    var el=document.createElement(tag);
    el.innerHTML=value;
    return el;
}