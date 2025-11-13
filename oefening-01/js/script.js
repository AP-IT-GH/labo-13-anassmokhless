let firstName = "";
let lastName = "";
let age = 0;


firstName = prompt("Wat is je voornaam ?");
lastName = prompt("Wat is je achternaam ?");
age = parseInt(prompt("Wat is je leeftijd ?"))

if(firstName === "" || lastName === ""){
    console.log("Naam/Achternaam ontbreekt: Vul beide in")
}
else if(age < 12 || age > 60){
    console.log("Leeftijd niet tussen 12 en 60: U behoort niet tot de gezochte leeftijdsklasse")
}
else{
    console.log(`U heeft uw naam correct ingevuld en behoort tot de juiste leeftijdsklasse`)
};












