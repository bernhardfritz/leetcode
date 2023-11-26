import { assertEquals } from "https://deno.land/std@0.207.0/assert/mod.ts";

function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  throw new Error("No solution!");
}

Deno.test("Example 1", () => {
  const input: Parameters<typeof twoSum> = [[2, 7, 11, 15], 9];

  const output = twoSum(...input);

  assertEquals(output, [0, 1]);
});

Deno.test("Example 2", () => {
  const input: Parameters<typeof twoSum> = [[3, 2, 4], 6];

  const output = twoSum(...input);

  assertEquals(output, [1, 2]);
});

Deno.test("Example 3", () => {
  const input: Parameters<typeof twoSum> = [[3, 3], 6];

  const output = twoSum(...input);

  assertEquals(output, [0, 1]);
});
