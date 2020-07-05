/*
合并两个有序链表

将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例：
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

示例：
输入：2->3->4, 1->1->1
输出：1->1->1->2->3->4

实例：
输入：5->7->9, 2->4->6
输出：2->4->5->6->7->9

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-two-sorted-lists
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 解 1
 * 遍历 l1, l2
 * 缺点：代码逻辑很绕。时间复杂度较高，对于 l1 上的节点，每次都要遍历整个 l2。
 * 时间复杂度：O(m*n)
 */
const mergeTwoLists1 = function(l1, l2) {
  let node1 = l1;
  let nextNode1;
  let node2 = l2;
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  // 遍历 l1
  while (node1) {
    nextNode1 = node1.next;
    let lastNode2;
    // 遍历 l2
    while (node2) {
      // 大于当前位，则继续向后查找
      if (node1.val >= node2.val) {
        lastNode2 = node2;
        node2 = node2.next;
        // l2 遍历完了，把 node1 接到 l2 后面
        if (!node2) {
          lastNode2.next = node1;
          return l2;
        }
      } else {
        // 小于当前位
        if (lastNode2) {
          // 插入当前位的前面
          lastNode2.next = node1;
          node1.next = node2;
        } else {
          // 插到当前位的前面，把当前的 node1 作为新的 l2
          node1.next = node2;
          l2 = node1;
        }
        break;
      }
    }
    // 遍历 l1 的下一个节点
    node1 = nextNode1;
    // 重新把 node2 指向 l2，因为前面 l2 的指向可能被改变过
    node2 = l2;
  }
  return l2;
}

/**
 * 解 2
 * 递归
 * 优点：时间复杂度低。代码简洁。
 * 时间复杂度：O(m+n)
 */
const mergeTwoLists = function(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.val >= l2.val) {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  } else {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }
}

/**
 * 测试用例
 */
console.log(
  mergeTwoLists(
    {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 4,
          next: null
        }
      }
    },
    {
      val: 1,
      next: {
        val: 3,
        next: {
          val: 4,
          next: null
        }
      }
    }
  ),
  mergeTwoLists(
    {
      val: 1,
      next: {
        val: 3,
        next: {
          val: 4,
          next: null
        }
      }
    },
    {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 4,
          next: null
        }
      }
    }
  ),
  mergeTwoLists(
    {
      val: 1,
      next: {
        val: 1,
        next: {
          val: 1,
          next: null
        }
      }
    },
    {
      val: 2,
      next: {
        val: 2,
        next: {
          val: 2,
          next: null
        }
      }
    }
  ),
  mergeTwoLists(
    {
      val: 5,
      next: {
        val: 6,
        next: {
          val: 7,
          next: null
        }
      }
    },
    {
      val: 2,
      next: {
        val: 2,
        next: {
          val: 2,
          next: null
        }
      }
    }
  ),
)