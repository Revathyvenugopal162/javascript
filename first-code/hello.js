let welcome = "Heloo";
let value = 14,
    nameS = 'some',
    some = false;
const price = 40; // fixed
let things = `${nameS}THhing.......`
let saved = true;
saved = !saved;
showMessage(typeof (things.toLowerCase()).substring(2));//strip first 2 charcters
var pricevv = 25;
value = value / 5 ;// -=, +=,  /=, % , ++
console.log(pricevv);
console.log(saved);
let person = { // object
    firstName: 'Revathy',
    lastName: 'venugopal',
};
console.log(typeof person);
console.log(person);
console.log(person.lastName);

// The conditional
if ( 1 === 1){//type check
    console.log("ifloop");
}
// !==, truthy and falsy
if ( 1 == '1'){
    console.log("Not looking for types");
} 

if(0){ //false
    console.log("true");
}
else{// else if
    console.log("false");
}

(price > 10) ? console.log('yes') : console.log('no');

for(let i =0; i<3; i++){
    console.log(i);
}

function showMessages(message, anotherMessage){
    console.log(message, anotherMessage);
}

let key = 20;
function getSecretCode(value) {
    let code = value * key;
    return code;
}
showMessages("This is", getSecretCode(2));
showName("Revathy Venugopal")


let symbol = Symbol();//secret codes
let personOne = {
    name: "Revathy Venugopal",
    hour: 40,
    Time: true,
    [symbol]: 'SecretInformation'
};

person.hour = 50;

console.log(personOne.name);
console.log(personOne.hour);

let now = new Date();
console.log(now.toDateString());
console.log( Math.abs(-69));