const baseNumber = 5;
const numberOfIterations= 10
let solutionString = "";
let tempSolution;

for(let index = 1; index<= numberOfIterations; index++){
    tempSolution = baseNumber * index;
    solutionString = solutionString + tempSolution.toString() + ", ";
}

console.log(solutionString);