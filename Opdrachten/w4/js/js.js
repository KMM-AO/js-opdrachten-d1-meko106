var formElement=document.querySelector("form");
var getal1=document.querySelector("#getal1");
var getal2=document.querySelector("#getal2"); // hashtag is voor de id
var woord=document.querySelector("#woord");

var newDiv= document.createElement('div');
document.querySelector('body').appendChild(newDiv);

// formElement.addEventListener('submit',function(e){e.preventDefault(); zien();})
woord.addEventListener('mouseover',function(e){e.preventDefault(); week3();})


// function zien(){
//     var nummer1=Number(getal1.value);
//     var nummer2=Number(getal2.value);

//     var arr=[nummer1,nummer2];
//     var summ=0;
//     for(i=0; i<arr.length; i++){ // de sum 
//         summ+=arr[i];
//     }

function week3(){
    // nummer=Number(getal1.value);
    var img=document.createElement('img');
    img.src="img.png";

    // par=maakel('p',getal1);
    newDiv.appendChild(img);
}

    
    // newDiv.appendChild(maakel('p',"De sum is "+summ));

    // var avg= summ/arr.length;  // de average
    // newDiv.appendChild(maakel('p',"De average is "+avg));



function maakel(tag,value){
    var el=document.createElement(tag);
    el.innerHTML=value;
    return el;
}