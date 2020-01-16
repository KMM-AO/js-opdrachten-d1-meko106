//Elementen ophalen en opslaan in een variabele
var form = document.querySelector('form');
var container = document.querySelector('.container');

//Element aanmaken om straks welkomstbericht te tonen
var h2Element = document.createElement('h2');
container.appendChild(h2Element);

//Wordt aangeroepen als pagina is geladen
window.onload = function(){

    //@TODO check of cookie of localStorage
    // maak gebruik van functies die de handelingen gaat doen
    // niet alles hierin proppen.

};


//Eventlistener koppelen aan de form
form.addEventListener('submit', function(ev){

    console.log('clicked'); //Test om te kijken of event werkt ;-)

    //Zorgen dat klikken van submit button formulier niet verzonden
    //wordt en dat de pagina niet wordt gerefreshed.
    ev.preventDefault();

    //functie aanroepen om formulier af te handelen
    handleForm();

}, false);



/**
 * Functie om formulier af te handelen
 */
function handleForm(){

    //input element ophalen en opslaan in een var
    var naamInput = document.querySelector('#naam');
    var kleurInput = document.querySelector('#kleur');

    //waarde van input ophalen en opslaan in een var
    var naam = naamInput.value;
    var kleur = kleurInput.value;

    //@TODO check of gebruiker wel iets heeft ingevuld 

    //Naam in innerhtlm van element plaatsen dit moet wel
    // in een check. zie @TODO hierboven.
    h2Element.innerHTML = `Welkom ${naam}`;
    bodyColor(kleur);

    //tekstveld weer leegmaken
    naamInput.value="";

}


/**
 * Functie om de achtergrondkleur van een pagina te veranderen
 * @param color de kleur als string, bijv red
 */
function bodyColor(color){
    var body = document.querySelector('body');
    body.style.backgroundColor = color;
}


