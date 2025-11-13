let startingHour = parseInt(prompt("Geef een startuur in"));
let startingMinutes = parseInt(prompt("Geef startminuten in"));

let extraHour = parseInt(prompt("Geef de extra uren in"));
let extraMinute = parseInt(prompt("Geef de extra minuten in"));

let totalDays = 0;
let totalHours = 0;
let totalMinutes = extraMinute + startingMinutes;

while(totalMinutes >= 60){
    totalMinutes -= 60;
    totalHours++
}

totalHours = totalHours + startingHour +extraHour;

while(totalHours >= 24 ){
    totalHours -= 24;
    totalDays++;
};

console.log(`Het is ${totalHours} uur ${totalMinutes}`);

if(totalDays === 0){
    console.log("Dit tijdstip valt nog op dezelfde dag");
}
else if(totalDays === 1){
    console.log("Dit tijdstip is 1 dag later")
}
else if(totalDays > 1){
    console.log(`Dit is het tijdstip ${totalDays} dagen later`)
};