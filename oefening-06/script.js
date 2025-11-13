let gradeInNumbers = parseInt(prompt("Geef je cijfer op 10 in"));

while(gradeInNumbers < 0 || gradeInNumbers > 10){
    gradeInNumbers = prompt("Dit getal ligt niet tussen 0 en 10, geef een nieuw getal in");
}

switch(gradeInNumbers){
    case 0:
    case 1:
    case 2: console.log("Zeer slecht");
    break;
    case 3:
    case 4: console.log("Onvoldoende");
    break;
    case 5:
    case 6: console.log("Voldoende");
    break;
    case 7:
    case 8: console.log("Goed");
    break;
    case 9:
    case 10: console.log("Uitstekend");
    break; 
}