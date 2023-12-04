import { assertEquals } from "https://deno.land/std@0.207.0/assert/mod.ts";
import { convert } from "./mod.ts";

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
