let number1;
let number2;
let solution;
let chosenOperator;

number1 = parseInt(prompt("Geef eerste getal in"));
number2 = parseInt(prompt("Geef tweede getal in"));

chosenOperator = prompt("Geef een operator in");
if(chosenOperator !== "+" && chosenOperator !== "-" && chosenOperator !== "*" && chosenOperator !== "/"){
    console.log("Dit was geen optie");
}
else if(chosenOperator === "+"){
    solution = number1 + number2;
}
else if(chosenOperator === "-"){
    solution = number1 - number2;
}
else if(chosenOperator === "*"){
    solution = number1 * number2;
}
else if(chosenOperator === "/"){
    if(number2 === 0){
        number2 = prompt("Geef een nieuw getal in voor het tweede getal, dit mag neit 0 zijn");
        solution = number1 / number2;
    }
    else{
        solution = number1 / number2;
    }
}

console.log(solution);