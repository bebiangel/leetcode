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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    //
    const result = []
    const stack = []
    if(root === null) {
        return result
    }
    
    let currNode = root
    while(currNode || stack.length > 0) {
        if(currNode !== null) {
            stack.push(currNode)
            currNode = currNode.left
        } else {
            currNode = stack.pop()
            result.push(currNode.val)
            currNode = currNode.right
        }
    }
    return result
};