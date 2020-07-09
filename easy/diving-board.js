/**
跳水板

你正在使用一堆木板建造跳水板。有两种类型的木板，其中长度较短的木板长度为shorter，长度较长的木板长度为longer。
你必须正好使用k块木板。编写一个方法，生成跳水板所有可能的长度。

返回的长度需要从小到大排列。

示例：

输入：
shorter = 1
longer = 2
k = 3
输出： {3,4,5,6}

提示：
0 < shorter <= longer
0 <= k <= 100000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/diving-board-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * 解
 * 粗暴的遍历方法。注意特殊情况下的提前返回。
 */
const divingBoard = function(shorter, longer, k) {
  if (k <= 0) {
    return [];
  }
  if (shorter === longer) {
    return [shorter * k];
  }
  const res = [];
  let lNum = 0;
  for (; lNum <= k; lNum ++) {
    const total = lNum * longer + (k - lNum) * shorter;
    res.push(total);
  }
  return res;
}

/**
 * 测试用例
 */
console.log(
  divingBoard(1, 2, 3),
  divingBoard(3, 3, 0),
)