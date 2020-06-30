/*
整数反转

给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321
 示例 2:

输入: -123
输出: -321
示例 3:

输入: 120
输出: 21
注意:

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-integer
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * 解 1
 * 把数字转成字符串数组，然后原地交换数组元素。
 * 缺点：创建了字符串、数组，内存占用较多
 */
const reverse1 = function(x) {
    if (x === 0) {
        return x;
    }
    const isNegative = x < 0;
    let str = String(Math.abs(x));
    const arr = str.split('');
    const len = arr.length;
    let tmp;
    for (let i = 0; i < len; i++) {
        const swapIndex = len - 1 - i;
        if (swapIndex <= i) {
            break;
        }
        tmp = arr[i];
        arr[i] = arr[swapIndex];
        arr[swapIndex] = tmp;
    }
    str = arr.join('');
    let result = Number(str);
    const pad = isNegative ? 0 : -1;
    if (result > Math.pow(2, 31) + pad) {
        return 0;
    }
    result = isNegative ? 0 - result : result;
    return result;
};

/**
 * 解 2
 * 还是转成字符串数组，这里直接利用数组的 .reverse() 方法实现反转。
 * 缺点：创建了字符串、数组、内存占用较多
 */
const reverse2 = function(x) {
  const str = String(Math.abs(x)).split('').reverse().join('');
  const num = Number(str);
  const isNegative = x < 0;
  const pad = isNegative ? 0 : -1;
  if (num > Math.pow(2, 31) + pad) {
      return 0;
  }
  return isNegative ? -num : num;
}

/**
 * 解 3
 * 优点：纯数学计算，没有借助其他数据类型，内存占用少。
 */
const reverse3 = function(x) {
  let result = 0;
  const isNegative = x < 0;
  while (x !== 0) {
      result = result * 10 + x % 10;
      x = (x / 10) | 0;
  }
  const pad = isNegative ? 0 : -1;
  if (Math.abs(result) > Math.pow(2, 31) + pad) {
      return 0;
  }
  return result
}