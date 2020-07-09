/*
实现 strStr()

实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

示例 1:
输入: haystack = "hello", needle = "ll"
输出: 2

示例 2:
输入: haystack = "aaaaa", needle = "bba"
输出: -1

说明:
当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/implement-strstr
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * 解
 * 双指针，一个指向 haystack 的字符，一个指向 needle 的字符
 */
const strStr = function(haystack, needle) {
  // 根据题目要求，needle 为空时返回 0
  if (needle.length === 0) {
    return 0;
  }
  let result = -1;
  let i = 0;
  let ni = 0;
  while (i < haystack.length) {
    if (haystack[i] === needle[ni]) {
      // 记录起始位置
      if (result === -1) {
        result = i;
      }
      // needle 完全匹配，返回结果
      if (ni === needle.length - 1) {
        return result;
      }
      // 两个指针都移动一位
      i ++;
      ni ++;
    } else {
      // 当前有正在匹配的子串，需要进行一些重置操作
      if (result !== -1) {
        // needle 指针回到第一位
        ni = 0;
        // haystack 指针回到此次匹配的起始位置的后一位
        i = result + 1;
        // 回到初始值
        result = -1;
      } else {
        // 当前没有在匹配的子串，继续遍历
        i ++;
      }
    }
  }
  return -1;
};

/**
 * 测试用例
 */
console.log(
  strStr('', ''), // 0
  strStr('a', 'a'), // 0
  strStr('hello', 'll'), // 2
  strStr('aaaaa', 'bba'), // -1
  strStr('mississippi', 'issipi'), // -1
);