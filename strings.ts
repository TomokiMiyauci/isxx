/** Whether the value is Hex color or not.
 * @param value - Any `string`.
 * ```ts
 * import { isHexColorFormat } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isHexColorFormat("#000000"), true)
 * assertEquals(isHexColorFormat("#FFF"), true)
 * assertEquals(isHexColorFormat("#ggg"), false)
 * ```
 */
export function isHexColorFormat(value: string): boolean {
  const hex3 = /^#[a-f\d]{3}$/i;
  const hex6 = /^#[a-f\d]{6}$/i;

  return hex3.test(value) || hex6.test(value);
}

type TimeHour = string;
type TimeMinute = string;
type TimeSecond = string;

type TimeNumoffset = `${"+" | "-"}${TimeHour}:${TimeMinute}`;
type TimeOffset = "Z" | TimeNumoffset;

type PartialType = `${TimeHour}:${TimeMinute}:${TimeSecond}`;

type DateFullyear = string;
type DateMonth = string;
type DateMday = string;

/** Types for date format. */
export type DateFormat = `${DateFullyear}-${DateMonth}-${DateMday}`;

/** Types for time format. */
export type TimeFormat = `${PartialType}${TimeOffset}`;

const FULL_DATE =
  "(?:\\d{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\\d|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[1-9]\\d(?:0[48]|[2468][048]|[13579][26])|(?:[2468][048]|[13579][26])00)-02-29)";

/** Whether the value is RFC 3339 date format or not.
 * The format compliant with {@link https://www.rfc-editor.org/rfc/rfc3339#section-5.6 RFC 3339, 5.6. Internet Date/Time Format, full-date}
 *
 * ```ts
 * import { isRfc3339DateFormat } from "https://deno.land/x/isx@$VERSION/mod.ts";
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
 * assertEquals(isRfc3339DateFormat("0000-01-01"), true);
 * assertEquals(isRfc3339DateFormat("0000-00-00"), false);
 * ```
 */
export function isRfc3339DateFormat(value: string): value is DateFormat {
  return new RegExp(`^${FULL_DATE}$`).test(value);
}

const ReFullTime =
  "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d(?:Z|[+-][01]\\d:[0-5]\\d)";

/** Whether the value is RFC 3339 time format or not.
 * The format compliant with {@link https://www.rfc-editor.org/rfc/rfc3339#section-5.6 RFC 3339, 5.6. Internet Date/Time Format, full-time}
 *
 * ```ts
 * import { isRfc3339TimeFormat } from "https://deno.land/x/isx@$VERSION/mod.ts";
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
 * assertEquals(isRfc3339TimeFormat("00:00:00+00:00"), true);
 * assertEquals(isRfc3339TimeFormat("23:59:59Z"), true);
 * assertEquals(isRfc3339TimeFormat("24:00:00Z"), false);
 * ```
 */
export function isRfc3339TimeFormat(value: string): value is TimeFormat {
  return new RegExp(`^${ReFullTime}$`).test(value);
}
