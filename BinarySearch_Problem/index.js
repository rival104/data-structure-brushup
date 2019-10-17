// 938. Range Sum of BST
//
// Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).
//
// The binary search tree is guaranteed to have unique values.
//
//
//
// Example 1:
//
// Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
// Output: 32
// Example 2:
//
// Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
// Output: 23

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let sum = 0;
    const traversal = (root, L, R) =>{
        if(!root.left && !root.right){
            return;
        }

        if(root.left){
            if(root.left.val >= L && root.left.val <= R){
                console.log(root.left.val);
                sum += root.left.val;

            }
            traversal(root.left, L, R);
        }

        if(root.right){
           if(root.right.val >= L && root.right.val <= R){
               // console.log(root.right.val);
                sum += root.right.val;
               console.log(sum);
            }
            traversal(root.right, L, R);
        }
    }

    traversal(root, L, R);
    // console.log(sum);
    if(root.val >= L && root.val <= R){
            sum += root.val;
    }
    return sum;
};
