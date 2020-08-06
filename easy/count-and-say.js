/*
外观数列

给定一个正整数 n（1 ≤ n ≤ 30），输出外观数列的第 n 项。
注意：整数序列中的每一项将表示为一个字符串。
「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。前五项如下：
1.     1
2.     11
3.     21
4.     1211
5.     111221
第一项是数字 1
描述前一项，这个数是 1 即 “一个 1 ”，记作 11
描述前一项，这个数是 11 即 “两个 1 ” ，记作 21
描述前一项，这个数是 21 即 “一个 2 一个 1 ” ，记作 1211
描述前一项，这个数是 1211 即 “一个 1 一个 2 两个 1 ” ，记作 111221

示例 1:
输入: 1
输出: "1"
解释：这是一个基本样例。

示例 2:
输入: 4
输出: "1211"
解释：当 n = 3 时，序列是 "21"，其中我们有 "2" 和 "1" 两组，"2" 可以读作 "12"，也就是出现频次 = 1 而 值 = 2；类似 "1" 可以读作 "11"。所以答案是 "12" 和 "11" 组合在一起，也就是 "1211"。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/count-and-say
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

const countAndSay = function(n) {
  if (n === 1) {
    return '1';
  }
  let res = '1';
  let count = 1;
  for (let i = 2; i <= n; i++) {
    const last = res;
    res = '';
    // console.log(i, last);
    for (let j = 0; j < last.length; j++) {
      // 如果下一位和当前位相同，则计数加 1
      if (last[j] === last[j + 1]) {
        // console.log('j === j+1', res);
        count++;
      } else {
        // 如果下一位和当前位不同，则记录{出现次数}和当前数字
        res += `${count}${last[j]}`;
        // 计数重置为 1
        count = 1;
        // console.log('j !== j+1', res);
      }
    }
  }
  return res;
};

/**
 * 测试用例
 */
console.log(
  // countAndSay(1),
  // countAndSay(2),
  // countAndSay(3),
  countAndSay(4),
  // countAndSay(5),
  // countAndSay(6),
);