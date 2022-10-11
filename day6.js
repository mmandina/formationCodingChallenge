// Given a matrix that is monotonically increasing along all
// rows and columns, as well as a value, k, return true if the value exists in the matrix and false otherwise.
let arrayTrue = [
  [0, 0, 0, 1],
  [1, 1, 1, 2],
  [2, 3, 4, 5],
];
// function findInMonotonic(matrix, k) {
//   /* your code here */
//   let nCols=matrix[0].length-1
//   let nRows=matrix.length-1;
//   let rowPos=nRows
//   let colPos=0;
//   while(rowPos>=0&&colPos<=nCols){
// if(matrix[rowPos][colPos]===k){
//     return true;
// }
// if(matrix[rowPos][colPos]>k){
//     rowPos--;
//     continue;
// }
// if(matrix[rowPos][colPos]<k){
//     colPos++;
//     continue;
// }

// }
// return false;

// }

function findInMonotonic(matrix, k) {
  let begCol = 0;
  let endCol = matrix[Math.floor(matrix.length / 2)].length - 1;

  let lo = 0;
  let hi = matrix.length - 1;

  while (lo <= hi) {
    let row = Math.floor((lo + hi) / 2);
    if (k <= matrix[row][endCol] && k >= matrix[row][begCol]) {
      const goodRow = matrix[row];
      while (begCol <= endCol) {
        let ptr = Math.floor((begCol + endCol) / 2);
        if (goodRow[ptr] === k) {
          return true;
        }
        if (goodRow[ptr] > k) {
          endCol = ptr - 1;
        } else {
          begCol = ptr + 1;
        }
      }
      return false;
    }
    if (k > matrix[row][endCol]) {
      lo = row + 1;
      continue;
    } else if (k < matrix[row][begCol]) {
      hi = row - 1;
      continue;
    }
  }
  return false;
}
console.log(findInMonotonic(arrayTrue, 0));
