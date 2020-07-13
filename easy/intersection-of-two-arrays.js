/*
两个数组的交集 II
给定两个数组，编写一个函数来计算它们的交集。

示例 1：
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]

示例 2:
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[4,9]

说明：
输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
我们可以不考虑输出结果的顺序。

进阶：
如果给定的数组已经排好序呢？你将如何优化你的算法？
如果 nums1 的大小比 nums2 小很多，哪种方法更优？
如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/intersection-of-two-arrays-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * 解 1
 * 简单粗暴的遍历。注意 indexOf 其实也是一次遍历，只不过借助了内置的 API。时间复杂度应该是 O(m*n)。
 * 注意在 arr2 中找到相同元素后，需要将其删除，避免被重复计算。
 */
const intersect1 = function(arr1, arr2) {
  const result = [];

  let item = arr1.shift();
  while (typeof item !== 'undefined') {
    const j = arr2.indexOf(item);
    if (j > -1) {
      // 移除已找到的元素
      arr2.splice(j, 1);
      result.push(item);
      // 任一数组遍历完了就退出
      if (arr2.length === 0) {
        break;
      }
    }
    item = arr1.shift();
  }

  return result;
};

/**
 * 解 2
 * 假如两个数组已排序，整体思路还是遍历，但是可以在适当时机提前退出。
 */
const intersectSorted = function(arr1, arr2) {
  const result = [];

  let item = arr1.shift();
  while (typeof item !== 'undefined') {
    // 如果已经比 arr2 最大的元素还大，就不用继续遍历了
    if (item > arr2[arr2.length - 1]) {
      break;
    }
    const j = arr2.indexOf(item);
    if (j > -1) {
      // 移除已找到的元素
      arr2.splice(j, 1);
      result.push(item);
      // 任一数组遍历完了就退出
      if (arr2.length === 0) {
        break;
      }
    }
    item = arr1.shift();
  }

  return result;
};

let intersect;
intersect = intersect1;
// intersect = intersectSorted;

/**
 * 测试用例
 */
console.log(
  intersect([], []), // []
  intersect([1,2], [3,4]), // []
  intersect([1,2], [1,1]), // [1]
  intersect([1,2,2,1], [2,2]), // [2,2]
  intersect([4,9,5], [9,4,9,8,4]), // [4,9]
  intersect([6,6,4,4,0,0,8,1,2], [6]), // [6]
  // 数组已排序
  intersect([1,2,3,3,4,5], [3,5,5,6]), // [3,5]
);