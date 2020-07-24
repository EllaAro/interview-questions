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
const diameterOfBinaryTree = root => {
    
    if ( root === undefined || root === null ) return 0;
    
     let ans = 1;
    
    const dfs = (node) => {
    
    if ( node === null ) return 0;
    
    let left = dfs(node.left);
    
    let right = dfs(node.right);
        
    ans = Math.max(ans, left+right+1)    
    
    return  1+ Math.max(left,right);
    }
    
    
    dfs(root);
    
    return ans - 1;
   
};

