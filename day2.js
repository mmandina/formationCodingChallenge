// Given a 2D rectangular matrix, return all of the values in a single, linear array in spiral order. 
// Start at (0, 0) and first include everything in the first row. Then down the last column, back the last row (in reverse), 
// and finally up the first column before turning right and continuing into the interior of the matrix.

function spiralTraversal(matrix){
let traversed=[];
let rowBegin=0;
let rowEnd=matrix.length-1
let columnBegin=0
let columnEnd=matrix[0].length-1
let direction="right"
while(rowBegin<=rowEnd && columnBegin<=columnEnd){
    switch(direction){

case "right":
    for(let i=columnBegin;i<=columnEnd;i++){
traversed.push(matrix[rowBegin][i])
    }
    direction="down";
    rowBegin++;
    break;

case "down":
    for(let i=rowBegin;i<=rowEnd;i++){
        traversed.push(matrix[i][columnEnd])
            }
            direction="left";
            columnEnd--;
            break;
case "left":
    for(let i=columnEnd;i>=columnBegin;i--){
        traversed.push(matrix[rowEnd][i])
    }
direction="up"
rowEnd--;
break;

case "up":

for(let i=rowEnd;i>=rowBegin;i--){
    traversed.push(matrix[i][columnBegin])
}
direction="right";
columnBegin++;
break;
    }
}
return traversed
}

let matrix=
[
[1,    2,   3,   4],
[5,    6,   7,   8],
[9,   10,  11,  12],
[13,  14,  15,  16 ]
];


console.log(spiralTraversal(matrix))