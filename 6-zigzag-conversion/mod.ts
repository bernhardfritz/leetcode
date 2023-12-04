export function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }
  const rows = new Array(numRows).fill("");
  let row = 0;
  let inc = 1;
  for (let i = 0; i < s.length; i++) {
    rows[row] += s[i];
    if (row === numRows - 1) {
      inc = -1;
    } else if (row === 0) {
      inc = 1;
    }
    row += inc;
  }
  return rows.join("");
}
