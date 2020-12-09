//Variables
const age=27;
const isFemale = false;
const driverStatus = 'bob';
const name = 'Bob';
const totalAmount = 59;

//Check age
if (age >= 18){
    console.log('Geweldig, ja  mag alcohol kopen! Kom binnen!');
}
else {
    console.log('Geen 18, geen druppel! Je mag niet binnen!');
}

//Check of een vrouw is
if (isFemale){
    console.log('Hah, ladiesnight korting voor je');
}
else {
    console.log('Helaas, geen ladiesnight korting voor je');
}

//Ben je de bob?
if (driverStatus == 'bob'){
    console.log('Je mag gewoon jouw auto besturen');
}
else {
    console.log('Je bent dronken, je mag niet auto rijden, he!');
}

//Leeftijdskorting
if (age >= 18 && age <=25){
    console.log('Je krijgt 50% korting!')
}
else {
    console.log('Sorry, je krijgt geen korting!')
}

//Gratis biertje?
if (name === 'Sarah' || name === 'Bram'){
    console.log('Altublieft, je gratis biertje!')
}
else {
    console.log('Misschien moet je een andere naam hebben!')
}

//Jubileum korting
if (totalAmount > 100){
    console.log('Gratis flesje champagne')
}
else if (totalAmount > 50){
    console.log('Gratis portie nachos')
}
else if (totalAmount > 25){
    console.log('Gratis (vega)bitterballen')
}
else {
    console.log('Bestel over 25 euro om iets (meer) gratis te krijgen!')
}