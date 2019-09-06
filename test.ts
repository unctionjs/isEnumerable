
import isEnumerable from "./index";

test("Array", () => {
  expect(isEnumerable([])).toEqual(true);
});

test("Object", () => {
  expect(isEnumerable({})).toEqual(true);
});

test("Set", () => {
  expect(isEnumerable(new Set())).toEqual(true);
});

test("Map", () => {
  expect(isEnumerable(new Map())).toEqual(true);
});

test("String", () => {
  expect(isEnumerable("")).toEqual(true);
});

test("Non-enumerable", () => {
  expect(isEnumerable(false)).toEqual(false);
});
