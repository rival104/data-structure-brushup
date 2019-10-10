// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB){
  return filterString(stringA) === filterString(stringB);
}

function filterString(str){
  return str.replace(/[^\w]/g,"")
            .toLowerCase()
            .split('')
            .sort()
            .join();
}

module.exports = anagrams;

//first solution

// function anagrams(stringA, stringB) {
//   //filter out the cases not needed
//   const wordA = stringA.replace(/[^\w]/g,"").toLowerCase();
//
//   const wordB = stringB.replace(/[^\w]/g,"").toLowerCase();
//
//   console.log(wordB);
//   //create a character map to compare the strings.
//   let wordMapA = buildcharMap(wordA);
//   let wordMapB = buildcharMap(wordB);
//
//   //compare the two map if they are equal
//   if(wordA.length !== wordB.length){
//     return false;
//   }
//
//   for(let prop in wordMapA){
//     if(wordMapA[prop] !== wordMapB[prop]){
//       return false;
//     }
//   }
//   return true;
// }
//
// function buildcharMap(str){
//   const charMap = {};
//   for(let char of str){
//     if(!charMap[char]){
//       charMap[char] = 1;
//     }else{
//       charMap[char]++;
//     }
//   }
//   return charMap;
// }
