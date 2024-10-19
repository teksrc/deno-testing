import { assertEquals } from "@std/assert";
import { add } from "./main.ts";

Deno.test("simple test", () => {
  const x = add(2, 3);
  assertEquals(x, 5);
});

import { delay } from "@std/async";

Deno.test("async test", async () => {
  const x = 1 + 2;
  await delay(100);
  assertEquals(x, 3);
});

Deno.test({
  name: "read file test",
  permissions: { read: true },
  fn: () => {
    const data = Deno.readTextFileSync("./somefile.txt");
    console.log("Data: ", data);
    assertEquals(data, "Some random file created by Frank.\n");
  },
});

import { expect } from "@std/expect";

Deno.test("add function adds two numbers correctly", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});
