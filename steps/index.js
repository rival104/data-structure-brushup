// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//recursive solution
function steps(n, row = 0, step = '') {
  if(n === row){
    return;
  }

  if(n === step.length){
    console.log(step);
    steps(n, row + 1);
    return;
  }

  if(row >= step.length){
    step += "#";
  }else{
    step += " ";
  }
  steps(n, row, step);
}

module.exports = steps;

// //iterative solution
// function steps(n) {
//   for(let row = 0; row < n; row++){
//     let step = "";
//     for(let col = 0; col < n; col++){
//       if(row >= col){
//         step += "#";
//       }else{
//         step += " ";
//       }
//     }
//     console.log(step);
//   }
// }
