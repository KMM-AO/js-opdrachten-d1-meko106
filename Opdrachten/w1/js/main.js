var name="Jan";
document.querySelector("#naam").innerHTML=name;
var y=20;
var z=5;

/* Hier heb ik string en een rekening gebruikt
om de resultaat te laten zien */
var plus="y + z= "+(y+z);
var min="y - z= "+(y-z);
var keer="y x z= "+(y*z);
var delen="y / z= "+(y/z);

document.querySelector("#y").innerHTML="y = 20";
document.querySelector("#z").innerHTML="z = 5";

document.querySelector("#plus").innerHTML=plus;
document.querySelector("#min").innerHTML=min;
document.querySelector("#keer").innerHTML=keer;
document.querySelector("#delen").innerHTML=delen;

