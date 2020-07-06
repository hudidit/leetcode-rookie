/*
删除排序数组中的重复项

给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

示例 1:
给定数组 nums = [1,1,2],
函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。
你不需要考虑数组中超出新长度后面的元素。

示例 2:
给定 nums = [0,0,1,1,1,2,2,3,3,4],
函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
你不需要考虑数组中超出新长度后面的元素。
 
说明:
为什么返回数值是整数，但输出的答案是数组呢?
请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
你可以想象内部操作如下:

// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * 解 1
 * 使用一个 map 来记录已经出现过的数字
 * 缺点：map 占用了较多的内存空间
 */
const removeDuplicates1 = function(nums) {
  let i = 0;
  const len = nums.length;
  const map = new Map();
  while(i < len) {
    const n = nums[i];
    if (!map.has(n)) {
      map.set(n, true);
      nums[map.size - 1] = n;
    }
    i ++;
  }
  return map.size;
}

/**
 * 解 2
 * 使用一个下标来标记去重后的元素位置。由于数组是升序的，因此在遍历数组时，每个元素仅需要与新数组的最后一个元素比较。
 * 优点：没有使用额外的对象来存放数据。（但是 LeetCode 上显示的内存占用和解 1 基本一样，不太理解）
 */
const removeDuplicates2 = function(nums) {
  if (!nums.length) {
    return 0;
  }
  let i = 1;
  const len = nums.length;
  // 去重后的下标
  let newI = 0;
  nums[newI] = nums[0];
  while (i < len) {
    if (nums[i] !== nums[newI]) {
      newI ++;
      nums[newI] = nums[i];
    }
    i ++;
  }
  return newI + 1;
}

/**
 * 测试用例
 */
console.log(
  removeDuplicates1([1,1,2]),
  removeDuplicates1([0,0,1,1,1,2,2,3,3,4])
);
console.log(
  removeDuplicates2([1,1,2]),
  removeDuplicates2([0,0,1,1,1,2,2,3,3,4])
);