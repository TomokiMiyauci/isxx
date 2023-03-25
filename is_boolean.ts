// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is `boolean` or not.
 * @param input - Any input.
 * @example
 * ```ts
 * import { isBoolean } from "https://deno.land/x/isx@$VERSION/is_boolean.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isBoolean(true), true)
 * assertEquals(isBoolean(null), false)
 * ```
 */
export function isBoolean(input: unknown): input is boolean {
  return typeof input === "boolean";
}
