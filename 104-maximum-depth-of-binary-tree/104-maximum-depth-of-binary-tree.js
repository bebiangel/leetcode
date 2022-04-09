/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    //
    const maxCount = [0]
    function recursive(node, depth = 0) {
        //
        if(node === null) return 
        depth+=1
        if(node.left === null && node.right === null) {
            maxCount.push(depth)
        }
        recursive(node.left, depth)
        recursive(node.right, depth)
    }
    
    recursive(root)

    return Math.max(...maxCount)
};