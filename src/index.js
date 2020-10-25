
// You should implement your task here.

module.exports = function towelSort (matrix) {
let array = [];
  let arr1 =array ;
  let arr2 =arr1;
  let mat =matrix;
  if(mat=== undefined || mat.length == 0) {
    return arr2
  } 
  else {
    mat.forEach((i, j) => {
        j % 2 === 1 ? array.push(i.reverse()) : array.push(i);
      }
    );
    return array.reduce((acc, val) => acc.concat(val));
    
  }
  }
