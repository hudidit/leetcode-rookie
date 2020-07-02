/*
罗马数字转整数

罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。
数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。
这个特殊的规则只适用于以下六种情况：

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

示例 1:
输入: "III"
输出: 3

示例 2:
输入: "IV"
输出: 4

示例 3:
输入: "IX"
输出: 9

示例 4:
输入: "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3.

示例 5:
输入: "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/roman-to-integer
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * 解 1
 * 把所有有含义的字母组合维护在一个哈希表里，再遍历字符串。
 * 先尝试匹配两位的子串，没有则匹配一位。
 * 缺点：速度和内存开销都比较差。
 */
const romanToInt1 = function(r) {
  const map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let result = 0;
  let i = 0;
  const len = r.length;
  while (i < len) {
    if (i <= len - 2 && map[r.substring(i, i + 2)]) {
      result += map[r.substring(i, i + 2)];
      i += 2;
    } else {
      const single = r.substring(i, i + 1);
      result += map[single];
      i ++;
    }
  }
  return result;
}

/**
 * 解 2
 * 这个方法更聪明。关键在于抓住了规律：
 *  正常情况，每一位罗马数字都是在做加法；
 *  特殊情况，当较小的数出现在较大的数左边时，较小的这一位做减法。
 * 优点：逐位遍历即可，不需要执行 i+=2 的操作。
 * LeetCode 显示这个方案的时间和空间复杂度的排名是靠后的，但是翻了一些题解，暂时没有找到其他方案。
 */
const romanToInt2 = function(r) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0, len = r.length; i < len; i ++) {
    if (map[r[i]] < map[r[i + 1]]) {
      result -= map[r[i]];
    } else {
      result += map[r[i]];
    }
  }
  return result;
}

/**
 * 测试用例
 */
console.log(
  romanToInt1('III'),
  romanToInt1('IV'),
  romanToInt1('IX'),
  romanToInt1('LVIII'),
  romanToInt1('MCMXCIV')
)
console.log(
  romanToInt2('III'),
  romanToInt2('IV'),
  romanToInt2('IX'),
  romanToInt2('LVIII'),
  romanToInt2('MCMXCIV')
)