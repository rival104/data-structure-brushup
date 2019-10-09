// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {};

  for(let char of str){
    if(!chars[char]){
      chars[char] = 1;
    }else{
      chars[char]++;
    }
  }

  let max = 0;
  let common = '';
  //
  // for(let [key, value] of Object.entries(chars)){
  //   if(value > max){
  //     max = value;
  //     common = key;
  //   }
  // }


  for(let key in chars){
    if(chars[key] > max){
      max = chars[key];
      common = key;
    }
  }
  return common;
}

module.exports = maxChar;
