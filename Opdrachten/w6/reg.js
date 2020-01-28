
var regex=/^\d[ ]?\d[ ]?\d[ ]?\d[ ]?[A-Z][ ]?[A-Z]\b$/

var Elpostcode=document.querySelector('#naam');
var postcode=Elpostcode.value;
try{
// console.log(regex.test(postcode));
toon();

}catch(error){
    console.log(error);
}
