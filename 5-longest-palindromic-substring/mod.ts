function intDivision(dividend: number, divisor: number) {
  return (dividend / divisor) >> 0;
}

function isPalindrome(s: string, start: number, end: number) {
  const mid = start + intDivision(end - start, 2);
  for (let i = start, j = end - 1; i < mid; i++, j--) {
    if (s[i] !== s[j]) {
      return false;
    }
  }
  return true;
}

export function longestPalindrome(s: string): string {
  for (let i = s.length; i >= 1; i--) {
    for (let j = 0; j + i <= s.length; j++) {
      if (isPalindrome(s, j, j + i)) {
        return s.slice(j, j + i);
      }
    }
  }
  throw new Error("This should never happen!");
}
