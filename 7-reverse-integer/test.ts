import { assertEquals } from "https://deno.land/std@0.207.0/assert/mod.ts";
import { reverse } from "./mod.ts";

Deno.test("Example 1", () => {
  const input: Parameters<typeof reverse> = [123];

  const output = reverse(...input)!;

  assertEquals(output, 321);
});

Deno.test("Example 2", () => {
  const input: Parameters<typeof reverse> = [-123];

  const output = reverse(...input)!;

  assertEquals(output, -321);
});

Deno.test("Example 3", () => {
  const input: Parameters<typeof reverse> = [120];

  const output = reverse(...input)!;

  assertEquals(output, 21);
});

Deno.test("Example 4", () => {
  const input: Parameters<typeof reverse> = [1534236469];

  const output = reverse(...input)!;

  assertEquals(output, 0);
});
