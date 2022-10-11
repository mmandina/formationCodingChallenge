let arrayTrue=
[[0, 0, 0, 1],
[1, 1, 1, 2],
[2, 3, 4, 5]] 
let arrayFalse=
[[0, 0, 0, 1],
[1, 1, 3, 2],
[2, 3, 4, 5]]

function isMatrixMonotonic(array){
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[0].length;j++){
            if(i===0&&j===0){
                continue; 
            }else
            if(i===0){
                if(array[i][j-1]>array[i][j]){
                    return false;
                }
            }else
            if(j===0){
                if(array[i-1][j]>array[i][j]){
                    return false;
                }
            }else{
                if(array[i-1][j]>array[i][j]||array[i][j-1]>array[i][j]){
                    return false;
                }
            }
    }
}
return true;
}

console.log(isMatrixMonotonic(arrayTrue))
console.log(isMatrixMonotonic(arrayFalse))
