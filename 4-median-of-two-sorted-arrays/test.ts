import { assertEquals } from "https://deno.land/std@0.207.0/assert/mod.ts";
import { findMedianSortedArrays } from "./mod.ts";

Deno.test("Example 1", () => {
  const input: Parameters<typeof findMedianSortedArrays> = [[1, 3], [2]];

  const output = findMedianSortedArrays(...input)!;

  assertEquals(output, 2);
});

Deno.test("Example 2", () => {
  const input: Parameters<typeof findMedianSortedArrays> = [[1, 2], [3, 4]];

  const output = findMedianSortedArrays(...input)!;

  assertEquals(output, 2.5);
});
