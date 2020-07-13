/*
搜索插入位置

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:
输入: [1,3,5,6], 5
输出: 2

示例 2:
输入: [1,3,5,6], 2
输出: 1

示例 3:
输入: [1,3,5,6], 7
输出: 4

示例 4:
输入: [1,3,5,6], 0
输出: 0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/search-insert-position
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * 解 1
 * 遍历
 */
const searchInsert1 = function(nums, target) {
  // 特殊情况处理
  if (nums.length === 0) {
    return 0;
  }
  if (target < nums[0]) {
    return 0;
  }
  if (target > nums[nums.length - 1]) {
    return nums.length;
  }
  // 遍历
  for (let i = 0, len = nums.length; i < len; i ++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};

/**
 * 解 2
 * 二分查找
 */
const searchInsert2 = function(nums, target) {
  // 特殊情况处理
  if (nums.length === 0) {
    return 0;
  }
  if (target < nums[0]) {
    return 0;
  }
  if (target > nums[nums.length - 1]) {
    return nums.length;
  }
  // 二分查找
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
    mid = Math.floor((left + right) / 2);
  }
  return left;
};

/**
 * 测试用例
 */

let searchInsert;
searchInsert = searchInsert1;
// searchInsert = searchInsert2;

console.log(
  searchInsert([], 5),
  searchInsert([1,3,5,6], 5),
  searchInsert([1,3,5,6], 2),
  searchInsert([1,3,5,6], 7),
  searchInsert([1,3,5,6], 0),
);