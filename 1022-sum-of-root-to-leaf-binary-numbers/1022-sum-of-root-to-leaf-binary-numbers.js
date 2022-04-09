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
var sumRootToLeaf = function(root) {
    //
    const binaries = []

    function recursive(node, val = '') {
        if(node === null) return
        
        const binary = `${val}${node.val}`;
        // 노드의 왼쪽과 오른쪽이 null이면 binary값 
        if(node.left === null && node.right === null) {
            binaries.push(binary)
        }
        
        recursive(node.left, binary)
        recursive(node.right, binary)
    }
    
    recursive(root, '')
    
    // ['100', '110'] string 값 이진법 -> 정수로 변환 하여 합 계산
    return binaries.reduce((pre, curr) => {
        return pre += parseInt(curr, 2)
    }, 0)
};