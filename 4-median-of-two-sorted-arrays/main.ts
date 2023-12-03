import { assertEquals } from "https://deno.land/std@0.207.0/assert/mod.ts";

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let combined = [];
  let i, j;
  for (i = 0, j = 0; i < nums1.length && j < nums2.length;) {
    combined.push(nums1[i] <= nums2[j] ? nums1[i++] : nums2[j++]);
  }
  combined = combined.concat(nums1.slice(i), nums2.slice(j));
  const h = (combined.length / 2) >> 0;
  return combined.length % 2 === 0
    ? (combined[h - 1] + combined[h]) / 2
    : combined[h];
}

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
