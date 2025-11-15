const limit = 100;
let sum = 0;

for(let index = 0; index <= limit; index++){
    if(index % 2 === 0){
        sum = sum + index;
    }
}

console.log(sum);