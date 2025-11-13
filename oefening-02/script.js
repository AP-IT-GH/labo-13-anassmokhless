let year;

year = prompt("Geef een jaartal");

if(year % 400 === 0){
    console.log("Dit is een schrikkeljaar");
}
else if(year % 100 === 0){
    console.log("Dit is geen schrikkelaar");
}
else if(year % 4 === 0){
    console.log("Dit is een schrikkeljaar");
}
else{
    console.log("Dit is geen schrikkeljaar");
}