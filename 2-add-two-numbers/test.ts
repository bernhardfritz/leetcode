import { assertEquals } from "https://deno.land/std@0.207.0/assert/mod.ts";
import { addTwoNumbers, ListNode } from "./mod.ts";

Deno.test("Example 1", () => {
  const input: Parameters<typeof addTwoNumbers> = [
    ListNode.fromArray([2, 4, 3]),
    ListNode.fromArray([5, 6, 4]),
  ];

  const output = addTwoNumbers(...input)!;

  assertEquals(output.toArray(), [7, 0, 8]);
});

Deno.test("Example 2", () => {
  const input: Parameters<typeof addTwoNumbers> = [
    ListNode.fromArray([0]),
    ListNode.fromArray([0]),
  ];

  const output = addTwoNumbers(...input)!;

  assertEquals(output.toArray(), [0]);
});

Deno.test("Example 3", () => {
  const input: Parameters<typeof addTwoNumbers> = [
    ListNode.fromArray([9, 9, 9, 9, 9, 9, 9]),
    ListNode.fromArray([9, 9, 9, 9]),
  ];

  const output = addTwoNumbers(...input)!;

  assertEquals(output.toArray(), [8, 9, 9, 9, 0, 0, 0, 1]);
});

Deno.test("Example 4", () => {
  const input: Parameters<typeof addTwoNumbers> = [
    ListNode.fromArray([
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
    ]),
    ListNode.fromArray([5, 6, 4]),
  ];

  const output = addTwoNumbers(...input)!;

  assertEquals(output.toArray(), [
    6,
    6,
    4,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
  ]);
});
