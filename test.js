
import {test} from "tap";

import isEnumerable from "./";

test("Array", ({same, end}) => {
  same(
    isEnumerable([]),
    true
  );

  end();
});

test("Object", ({same, end}) => {
  same(
    isEnumerable({}),
    true
  );

  end();
});

test("Set", ({same, end}) => {
  same(
    isEnumerable(new Set()),
    true
  );

  end();
});

test("Map", ({same, end}) => {
  same(
    isEnumerable(new Map()),
    true
  );

  end();
});

test("String", ({same, end}) => {
  same(
    isEnumerable(""),
    true
  );

  end();
});

test("Non-enumerable", ({same, end}) => {
  same(
    isEnumerable(false),
    false
  );

  end();
});
