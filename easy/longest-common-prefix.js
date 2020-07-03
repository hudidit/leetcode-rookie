/*
最长公共前缀

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:
输入: ["flower","flow","flight"]
输出: "fl"

示例 2:
输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。

说明:
所有输入只包含小写字母 a-z 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-common-prefix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * 解
 * “最长公共前缀”的长度一定不大于数组中任一字符串的长度，
 * 所以可以假设任一字符串为“最长公共前缀”，然后对其他字符串进行校验。
 */
const longestCommonPrefix = function(strs) {
  if (strs.length < 1) return '';
  let common = '';
  const first = strs[0];
  let strIndex = 0;
  let curr = first[strIndex];
  while (curr) {
    let isCommon = true;
    for (let wordIndex = 1, len = strs.length; wordIndex < len; wordIndex ++) {
      if (strs[wordIndex][strIndex] !== curr) {
        isCommon = false;
        break;
      }
    }
    if (!isCommon) {
      break;
    }
    common += curr;
    strIndex ++;
    curr = first[strIndex];
  }
  return common;
};

/**
 * 测试用例
 */
console.log(
  longestCommonPrefix(["flower","flow","flight"]),
  longestCommonPrefix(["dog","racecar","car"])
);