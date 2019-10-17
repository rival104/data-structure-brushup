// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let counters = [0];
  const array = [root, 'l']
  let level = 0;

  while(array.length > 1){
    const node = array.shift();

    if(node === 'l'){
      array.push('l');
      counters.push(0);
    }else{
      for(let child of node.children){
        array.push(child);
      }

      counters[counters.length - 1]++;
    }
  }
  return counters;
}

module.exports = levelWidth;

// function levelWidth(root) {
//   let counters = [0];
//   const array = [root, 'l']
//   let level = 0;
//
//   while(array.length > 1){
//     const node = array.shift();
//
//     if(node === 'l'){
//       array.push('l');
//       counters.push(0);
//       i++;
//       if(array.length > 1)
//         node = array.shift();
//
//     }
//     for(let child of node.children){
//       array.push(child);
//     }
//
//     counters[i]++;
//
//   }
//   return counters;
// }
