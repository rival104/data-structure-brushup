// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  //filter out the cases not needed
  const wordA = stringA.replace(/[^\w]/g,"").toLowerCase();

  const wordB = stringB.replace(/[^\w]/g,"").toLowerCase();

  console.log(wordB);
  //create a character map to compare the strings.
  let wordMapA = {};
  let wordMapB = {};

  for(let char of wordA){
    if(!wordMapA[char]){
      wordMapA[char] = 1;
    }else{
      wordMapA[char]++;
    }
  }
  console.log(wordMapA);
  for(let char of wordB){
    if(!wordMapB[char]){
      wordMapB[char] = 1;
    }else{
      wordMapB[char]++;
    }
  }

  //compare the two map if they are equal
  if(wordA.length === wordB.length){
    for(let prop in wordMapA){
      if(wordMapA[prop] !== wordMapB[prop]){
        return false;
      }
    }

    return true;
  }
  return false;
}

module.exports = anagrams;
