/*
路径总和

给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

说明: 叶子节点是指没有子节点的节点。

示例: 
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/path-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 解 1
 * 深度优先遍历，检查每一个叶子节点到根节点的路径总和。
 */
const hasPathSum1 = function(root, sum) {
  // 当前总和
  let currSum = 0;
  let hasPath = false;
  // 深度优先遍历
  function dfs(node) {
    if (!node) {
      return;
    }
    // 当前节点加入总和
    currSum += node.val;
    // 叶子节点
    if (!node.left && !node.right) {
      if (currSum === sum) {
        hasPath = true;
      }
    }
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
    // 当前节点及其子节点遍历完毕，退出总和
    currSum -= node.val;
  }
  dfs(root);
  return hasPath;
}

/**
 * 思考
 * 刚想到一个“优化”方式，即加个判断，减少不必要的遍历。判断逻辑：
 * 如果当前节点到根节点的路径总和已经大于目标和，则停止遍历当前节点的子节点。
 * 但是这忽略了一个问题，题目没有限定节点值一定是正数，因此这个“优化”不可行。
 */


/**
 * 测试用例
 */
const mock1 = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: {
        val: 7
      },
      right: {
        val: 2
      }
    }
  },
  right: {
    val: 8,
    left: {
      val: 13,
    },
    right: {
      val: 4,
      right: {
        val: 1
      }
    }
  }
}

console.log(
  hasPathSum1(mock1, 22),
  hasPathSum1(mock1, 27),
  hasPathSum1(mock1, 23)
)