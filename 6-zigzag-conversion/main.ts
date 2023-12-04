import { assertEquals } from "https://deno.land/std@0.207.0/assert/mod.ts";

function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }
  const rows = new Array(numRows).fill('');
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
  return rows.join('');
}

Deno.test("Example 1", () => {
  const input: Parameters<typeof convert> = ["PAYPALISHIRING", 3];

  const output = convert(...input)!;

  assertEquals(output, "PAHNAPLSIIGYIR");
});

Deno.test("Example 2", () => {
  const input: Parameters<typeof convert> = ["PAYPALISHIRING", 4];

  const output = convert(...input)!;

  assertEquals(output, "PINALSIGYAHRPI");
});

Deno.test("Example 3", () => {
  const input: Parameters<typeof convert> = ["A", 1];

  const output = convert(...input)!;

  assertEquals(output, "A");
});

Deno.test("Example 4", () => {
  const input: Parameters<typeof convert> = ["A", 2];

  const output = convert(...input)!;

  assertEquals(output, "A");
});

Deno.test("Example 5", () => {
  const input: Parameters<typeof convert> = ["AB", 1];

  const output = convert(...input)!;

  assertEquals(output, "AB");
});