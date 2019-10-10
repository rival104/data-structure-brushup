// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//recursive solution
function pyramid(n, row = 0, step = '') {
  const midpoint = Math.floor((2*n -1)/2);
  if(row === n){
    return;
  }

  if(step.length === (2*n -1)){
    console.log(step);
    pyramid(n, row+1);
    return;
  }

  if(midpoint - row <= step.length && midpoint + row >= step.length){
    step += "#";
  }else{
    step += " ";
  }

  pyramid(n, row, step);
}

module.exports = pyramid;

// //iterative solution
// function pyramid(n) {
//   const midpoint = Math.floor((2*n -1)/2);
//   for(let row = 0; row < n; row++){
//     let step = "";
//     for(let col = 0; col < 2*n -1 ; col++){
//       if(midpoint-row <= col && midpoint + row >= col){
//         step += "#";
//       }else{
//         step += " ";
//       }
//     }
//
//     console.log(step);
//   }
// }
