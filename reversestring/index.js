// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//sol 3
function reverse(str) {
    return str.split('').reduce((reversed, character)=> reversed = character + reversed,'');
}

//sol 2
// function reverse(str){
//   let reversed = '';
//
//   // for(let char of str){
//   //   reversed = char + reversed;
//   // }
//
//   for(let i = 0; i< str.length; i++){
//     reversed = str.charAt(i) + reversed;
//   }
//   return reversed;
//
// }

//sol 1
// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

module.exports = reverse;
