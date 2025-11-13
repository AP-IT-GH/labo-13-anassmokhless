let number1;
let number2;
let solution;
let chosenOperator;

number1 = parseInt(prompt("Geef eerste getal in"));
number2 = parseInt(prompt("Geef tweede getal in"));
chosenOperator = prompt("Geef een operator in");

switch(chosenOperator){
    case "+": solution = number1 + number2;
    break;
    case "-": solution = number1 - number2;
    break;
    case "*": solution = number1 * number2;
    break;
    case "/":
        if(number2 === 0){
        number2 = prompt("Geef een nieuw getal in voor het tweede getal, dit mag neit 0 zijn");
        solution = number1 / number2;
        }
        else{
        solution = number1 / number2;
        }
    break;
    default: console.log("Dit was geen optie");
    break;
}

console.log(solution);
