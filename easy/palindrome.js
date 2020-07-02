/*
回文数

判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:

输入: 121
输出: true
示例 2:

输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
示例 3:

输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。
进阶:

你能不将整数转为字符串来解决这个问题吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/palindrome-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * 解 1
 * 数字转成字符串，逐位比较
 */
const isPalindrome1 = function(x) {
  if (x < 0) return false;
  const str = String(x);
  for (let i = 0, len = str.length; i < len; i++) {
      const other = len - 1 - i;
      if (i >= other) {
          return true;
      }
      if (str.charAt(i) !== str.charAt(other)) {
          return false;
      }
  }
};

/**
 * 解 2
 * 在不用字符串的情况下取出每一位。
 * 需要创建两个工具函数。
 * 优点：没有用到字符串，纯数字计算。内存占用较少。
 * 缺点：数学运算速度较慢，在 LeetCode 上的运行时间比字符串方案的要长。
 */
const isPalindrome2 = function(x) {
  if (x < 0) return false;
  const len = getDigitCount(x);
  let i = 1;
  while(i < len) {
      const other = len - i + 1;
      if (i >= other) {
          return true;
      }
      if (getNthDigitFromRight(x, i) !== getNthDigitFromRight(x, other)) {
          return false;
      }
      i++;
  }
  return true;
}
/**
* 获取从右往左第 n 位数
*/
function getNthDigitFromRight(x, n) {
  return Math.floor((x / Math.pow(10, n - 1)) % 10);
}
/**
* 获取整数的位数
*/
function getDigitCount(x) {
  return Math.floor(
      // 注意 Math.log10(0) === -Infinity
      Math.max(Math.log10(Math.abs(x)), 0)
  ) + 1;
}