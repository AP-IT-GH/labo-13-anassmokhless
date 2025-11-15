let temp;
let unit;

temp = prompt("Geef de temperatuur in.")
unit = prompt("Geef de eenheid in C of F.")

do{
    if(unit !== "C" && unit !=="F"){
    unit = prompt("Dit was geen optie geef de eenheid opnieuw in.")
}
}while(unit !== "C" && unit !=="F");

if(unit === "C"){
    temp = (temp * 9/5)+32;
}
else{
    temp = (temp -32 )*5/9
}

console.log(`De omgezette waarde is ${temp}`)
