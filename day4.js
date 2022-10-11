let array = [
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [6, 5, 1, 2],
  [7, 6, 5, 1],
];

let array2 = [
  [1, 2, 3, 4, 5],
  [5, 1, 2, 3, 4],
  [6, 5, 1, 2, 3],
  [7, 6, 5, 1, 2],
  [8, 7, 6, 5, 1],
];
let array3 = [
  [1, 2, 3, 4, 5],
  [5, 1, 2, 3, 4],
  [6, 5, 1, 2, 3],
  [7, 6, 5, 1, 2],
];

function isToeplitz(array){
  /* your code here */

  let numberOfDiagonals = array.length + array[0].length;
  let startRow = array.length - 1;
  let startColumn = 0;
  let flip=false;
  for (let i = 0; i < numberOfDiagonals; i++) {
    let row = startRow;
    let column = startColumn;
    while (row+1<array.length &&column+1<array[0].length!== undefined) {
      let next=array[row+1][column+1]
      let current=array[row][column]
      if (next !== current) {

        return false;
      }
      row++;
      column++;
    }
    if (startRow - 1 >= 0 &&flip===false) {
      startRow--;
    } else {
      startColumn++;
      flip=true;
      startRow++;
    }
  }
  return true;
}

console.log(isToeplitz(array2));
