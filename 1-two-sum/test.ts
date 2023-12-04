import { assertEquals } from "https://deno.land/std@0.207.0/assert/mod.ts";
import { twoSum } from "./mod.ts";

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
