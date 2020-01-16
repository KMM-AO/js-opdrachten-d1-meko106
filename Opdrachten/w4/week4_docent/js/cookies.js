/* eslint  */

document.cookie = 'name = Reygan';
document.cookie = 'nTimes = 2';

//Ophalen
var allCookies = document.cookie;
console.log(allCookies);


var cookiesArray = allCookies.split('; ');
for (let ck of cookiesArray) {
    console.log(ck);
    console.log('Key: ' + ck.split('=')[0]);
    console.log('Value: ' + ck.split('=')[1]);
}



// één cookie ophalen
// Ophalen als je weet wat de key is
var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)name\s*\=\s*([^;]*).*$)|^.*$/, "$1");
console.log(cookieValue);


// cookie aanmaken met een expiration time
document.cookie = 'name= Reygan; expires=Thu, 01 Jan 2027 00:00:00 UTC';


// // verwijder een cookie middels een expiration time
// document.cookie = 'name= Reygan; expires=Thu, 01 Jan 1970 00:00:00 UTC';
