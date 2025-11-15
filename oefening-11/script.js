const secretnumber = 24;
let rightOrWrong = false;
let guess;
do{
    
    guess = parseInt(prompt("Raad get getal tussen 0 en 30"));
    
    while(guess < 0 || guess > 30 ){
        guess = parseInt(prompt("Het opgegeven getal ligt niet tussen 0 en 30"));
    }
    
    if(secretnumber === guess){
        rightOrWrong = true;
    }
    else if(secretnumber > guess){
        console.log("Het getal ligt hoger");
    }
    else if(secretnumber < guess){
        console.log("Het getal ligt lager");
    }
}while(rightOrWrong === false);

console.log("Je hebt het getal geraden")