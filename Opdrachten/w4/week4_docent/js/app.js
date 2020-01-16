document.cookie = 'name = Reygan';
document.cookie = 'nTimes = 2';

//Ophalen
var allCookies = document.cookie;
console.log(allCookies);

//Als pagina opnieuw getoond wordt
window.onload=function(){
    //hierin functie om te controlleren of er al een cookie
    //of localstorage bestaat
    // Als cookie of localstorage bestaat. Haalt het op en vul 
    //formulier in. Pas achtergrondkleur aan. 

};

var container = document.querySelector('.container');

var cookiesArray = allCookies.split('; ');
for (let ck of cookiesArray) {
    // console.log(ck);
    // console.log('Key: ' + ck.split('=')[0]);
    // console.log('Value: ' + ck.split('=')[1]);
    var pEl = document.createElement('p');
    pEl.innerHTML = 'Key: ' + ck.split('=')[0];
    pEl.innerHTML += ' Value: ' + ck.split('=')[1];
    container.appendChild(pEl);

}

var bodyEL = document.querySelector('body');

bodyEL.style.backgroundColor = "#FFCC00";