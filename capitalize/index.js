// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// //second solution - utilize js library
function capitalize(str) {
  const words = [];

  for(let word of str.split(' ')){
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(' ');
}

module.exports = capitalize;

// //first solution
//
// function capitalize(str) {
//   let sentence = "";
//   let capital = true;
//
//   for(let char of str){
//     if(char !== " " && capital){
//       sentence += char.toUpperCase();
//       capital = false;
//     }else if(char === " "){
//       sentence += char;
//       capital = true;
//     }else{
//       sentence += char;
//     }
//   }
//   return sentence;
// }



// //third solution - alternative to first
// function capitalize(str) {
//   let sentence = str[0].toUpperCase();
//
//   for(let i=1; i<str.length; i++){
//     if(str[i - 1] === ' '){
//       sentence += str[i].toUpperCase();
//     }else{
//       sentence += str[i];
//     }
//   }
//   return sentence;
// }
