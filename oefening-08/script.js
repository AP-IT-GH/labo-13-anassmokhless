let answer = (Math.random() * 10) + 1;
answer = Math.round(answer, 0);

let guess;

guess = parseInt(prompt("Doe een gok (tussen 1 en 10)"));

if(guess === answer){
    console.log("Gefeliciteerd, je hebt het juiste getal geraden!");
}
else{
    console.log(`Helaas, het juiste getal was ${answer}`);
}

