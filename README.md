# @unction/isEnumerable

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> mixed => Boolean

Determines if the value is an enumerable and if so returns true, else false.

``` javascript
isEnumerable(1) // false
isEnumerable("") // true
isEnumerable([]) // true
isEnumerable({}) // true
isEnumerable(new Map()) // true
isEnumerable(new Set()) // true
isEnumerable(most.from([])) // true
isEnumerable(most.from([])) // true
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/isEnumerable.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/isEnumerable.svg?maxAge=2592000&style=flat-square
