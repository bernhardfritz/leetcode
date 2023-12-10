export function reverse(x: number): number {
  const signum = x < 0 ? -1 : 1;
  x *= signum;
  const arr = [];
  while (x >= 1) {
    const remainder = x % 10;
    arr.push(remainder);
    x = (x - remainder) / 10;
  }
  let y = 0;
  for (let i = 0; i < arr.length; i++) {
    const j = arr.length - 1 - i;
    const summand = arr[i] * 10 ** j;
    if (2 ** 31 - 1 - summand < y) {
      return 0;
    }
    y += summand;
  }
  return y * signum;
}
