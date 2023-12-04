/**
 * Definition for singly-linked list.
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  static fromArray(values: number[]): ListNode {
    if (values.length === 0) {
      throw new Error("Illegal argument");
    }
    let listNode = null;
    for (let i = values.length - 1; i >= 0; i--) {
      listNode = new ListNode(values[i], listNode);
    }
    return listNode!;
  }

  static fromBigInt(value: bigint): ListNode {
    const arr = [];
    do {
      arr.push(Number(value % BigInt(10)));
    } while ((value = value / BigInt(10)) !== BigInt(0));
    return ListNode.fromArray(arr);
  }

  toArray(): number[] {
    const arr: number[] = [this.val];
    let listNode = this.next;
    while (listNode !== null) {
      arr.push(listNode.val);
      listNode = listNode.next;
    }
    return arr;
  }

  toBigInt(): bigint {
    return this.toArray().reduce(
      (accumulator, value, index) =>
        accumulator + BigInt(value) * BigInt(10) ** BigInt(index),
      BigInt(0),
    );
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  return ListNode.fromBigInt(l1.toBigInt() + l2.toBigInt());
}
