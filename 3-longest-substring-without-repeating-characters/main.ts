import { assertEquals } from "https://deno.land/std@0.207.0/assert/mod.ts";

function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  for (let i = 0; i < s.length - max; i++) {
    const set = new Set<string>();
    for (let j = i; j < s.length; j++) {
      const c = s[j];
      if (set.has(c)) {
        break;
      }
      set.add(c);
    }
    if (set.size > max) {
      max = set.size;
    }
  }
  return max;
}

Deno.test("Example 1", () => {
  const input: Parameters<typeof lengthOfLongestSubstring> = ["abcabcbb"];

  const output = lengthOfLongestSubstring(...input)!;

  assertEquals(output, 3);
});

Deno.test("Example 2", () => {
  const input: Parameters<typeof lengthOfLongestSubstring> = ["bbbbb"];

  const output = lengthOfLongestSubstring(...input)!;

  assertEquals(output, 1);
});

Deno.test("Example 3", () => {
  const input: Parameters<typeof lengthOfLongestSubstring> = ["pwwkew"];

  const output = lengthOfLongestSubstring(...input)!;

  assertEquals(output, 3);
});

Deno.test("Example 4", () => {
  const input: Parameters<typeof lengthOfLongestSubstring> = ["dvdf"];

  const output = lengthOfLongestSubstring(...input)!;

  assertEquals(output, 3);
});
