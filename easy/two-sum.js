/*
两数之和

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * 解 1
 * 优点：只遍历一次
 * 缺点：map 占用内存
 */
const twoSum1 = function(nums, target) {
  const visited = new Map();
  const len = nums.length;
  for (let i = 0; i < len; i++) {
      const other = target - nums[i];
      if (typeof visited.get(other) !== 'undefined') {
          return [visited.get(other), i];
      }
      visited.set(nums[i], i);
  }
  return [];
};

/**
* 解 2
* 优点：没有创建新的对象或数组，内存占用少
* 缺点：因为用了 indexOf, 本质上还是两次遍历
*/
const twoSum2 = function(nums, target) {
  const len = nums.length;
  let i = 0;
  let curr = nums.shift();
  while (nums.length) {
      // 注意：由于前面的元素被弹出了，因此这里的下标不是原始下标，返回之前需要算好
      const otherIndex = nums.indexOf(target - curr);
      if (otherIndex > -1) {
          return [i, otherIndex + i + 1];
      }
      curr = nums.shift();
      i++;
  }
}