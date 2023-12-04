export function lengthOfLongestSubstring(s: string): number {
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
