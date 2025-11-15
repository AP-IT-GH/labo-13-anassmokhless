const columns = 5;
const rows = 10;


for (let index = 0; index < rows; index++) {
  
  let row = "";
  
  
  for (let index2 = 0; index2 < columns; index2++) {
    row += "X ";
  }
  
  
  console.log(row);
}