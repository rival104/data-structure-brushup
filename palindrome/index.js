// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str){
  // return str.split('').every((char, i)=>{
  //   return char == str[str.length -i -1];
  // });

  let arr = str.split('');

  for(let i = 0; i < arr.length; i++){
    if(str[i] == str[str.length -i -1]){
      if( i === (arr.length -1)){
        return true;
      }
    }
    debugger;
  }
  return false;
}

palindrome("abba");
module.exports = palindrome;

// function palindrome(str) {
//   let reversed = str.split('').reverse().join('');
//
//   return str === reversed;
// }
