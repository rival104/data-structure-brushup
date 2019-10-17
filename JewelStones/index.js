// 771. Jewels and Stones
//
// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
//
// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".
//
// Example 1:
//
// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// Example 2:
//
// Input: J = "z", S = "ZZ"
// Output: 0
// Note:
//
// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let count = 0;
    const map = buildCharMap(S);

    for(let i = 0; i<J.length; i++){
        if(map[J.charAt(i)]){
            count += map[J.charAt(i)];
        }
    }

    // for(let char of J){
    //     if(map[char]){
    //         count += map[char];
    //     }
    // }

    return count;
};

function buildCharMap(str){

    let map = {};

    for(let char of str){
        if(!map[char]){
            map[char] = 1;
        }else{
            map[char]++;
        }
    }
    return map;
}
