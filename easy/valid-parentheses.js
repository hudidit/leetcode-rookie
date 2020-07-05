/*
有效的括号

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:
输入: "()"
输出: true

示例 2:
输入: "()[]{}"
输出: true

示例 3:
输入: "(]"
输出: false

示例 4:
输入: "([)]"
输出: false

示例 5:
输入: "{[]}"
输出: true

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * 解
 * 从左到右遍历，用一个栈来存放左括号，遇到右括号则从栈中弹出一个左括号进行校验。
 * 合法的括号组合，在遍历结束后，栈一定是空的。
 */
const isValid = function(s) {
  if (s.length === 0) {
    return true;
  }
  const stack = [];
  const lefts = new Set(['(', '[', '{']);
  const rights = new Set([')', ']', '}']);
  const match = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  for (let i = 0, len = s.length; i < len; i ++) {
    if (lefts.has(s[i])) {
      stack.push(s[i]);
    } else if (rights.has(s[i])) {
      const left = stack.pop();
      if (left === match[s[i]]) {
        continue;
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};

/**
 * 测试用例
 */
console.log(
  isValid(''),
  isValid('()'),
  isValid('()[]{}'),
  isValid('(]'),
  isValid('([)]'),
  isValid('{[]}')
)