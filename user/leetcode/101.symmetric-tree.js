/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 */

// @lc code=start
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root === null) {
        return true;
    } else {
        return treeSym(root.left, root.right);
    }
};

function treeSym(left, right) {
    if (left !== null && right !== null) {
        return left.val === right.val && treeSym(left.left, right.right) && treeSym(left.right, right.left);
    }
    else if (left === null && right === null) {
        console.log('heree111e', left?.val, right?.val);
        return true;
    } else if ((left === null && right !== null) || (right === null && left !== null)) {
        console.log('hereee', left?.val, right?.val);
        return false;
    }
}

// @lc code=end

