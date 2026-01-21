---
id: array-flatten
title: 다차원 배열 평탄화(flatten)
sidebar_position: 4
---

중첩 배열을 단일 차원으로 평탄화합니다.

## 간단 구현 (단계 지정)

```js showLineNumbers
function flatten(arr, depth = 1) {
  return depth > 0
    ? arr.reduce((acc, v) => acc.concat(Array.isArray(v) ? flatten(v, depth - 1) : v), [])
    : arr.slice();
}
```

## 무한 평탄화

```js showLineNumbers
function flattenDeep(arr) {
  return arr.flat ? (arr.flat(Infinity)) : flatten(arr, Number.POSITIVE_INFINITY);
}
```

## 사용 예

```js showLineNumbers
flatten([1, [2, [3, 4]], 5], 2); // [1, 2, 3, 4, 5]
flattenDeep([1, [2, [3, 4]], 5]); // [1, 2, 3, 4, 5]
```
