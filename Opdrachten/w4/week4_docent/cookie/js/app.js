var formEl = document.querySelector('form');
var naamEl = document.querySelector('#name');
var kleurEl = document.querySelector('#color');
var bodyEl = document.querySelector('body');
var contEl = document.querySelector('.container');


formEl.addEventListener('submit', function(ev){
    ev.preventDefault();

    createCookie('name', naamEl.value);
    createCookie('color', kleurEl.value);

});


window.onload = function(){
    setPageSettings();
};

/**
 * Create cookie
 * @param {*} cookieName name of the cookie
 * @param {*} val value of the cookie
 */




function createCookie(cookieName, val){

    document.cookie = cookieName + ' = ' + val;
}


function getCookie(cookieName){
    var cookieValue ="";
    switch(cookieName){
        case 'name':
            cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)name\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            break;
        case 'color':
            cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)color\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            break;
        default:
            cookieValue="";
    }
    return cookieValue;
}


function setPageSettings(){

    var nameValue = getCookie('name');
    var colorValue = getCookie('color');

    bodyEl.style.backgroundColor = colorValue;

    var nameEl = makeElement('h2', 'Hello ' + nameValue);

    contEl.appendChild(nameEl);

}


function makeElement(tag, val){

    let el = document.createElement(tag);
    el.innerHTML = val;

    return el;

}
