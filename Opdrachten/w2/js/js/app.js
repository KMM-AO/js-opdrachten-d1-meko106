// var alert=alert("Dit is een popup");
// console.log(alert);
// var pconfirm=confirm("Wie gaat naar de tekst");
// console.log(pconfirm);
// console.log();
// console.log(prompt("Wat ga je eten?","Frier")); //default waarde
var getallen=[4,4,4,454,64,22,233,44];

var divElement=document.querySelector('#test');

for(let i=0; i<getallen.length; i++){
    var pEL=document.createElement('p');
    document.querySelector('#test').innerHTML+= "<p>"+getallen[i]+"</p>";
    divElement.appendChild(pEL);
}


