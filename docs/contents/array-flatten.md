---
id: array-flatten
title: 다차원 배열 평탄화(flatten)
sidebar_position: 4
---

중첩 배열을 단일 차원으로 평탄화합니다.

## 간단 구현 (단계 지정)

```ts showLineNumbers
export function flatten<T>(arr: any[], depth = 1): T[] {
  return depth > 0
    ? arr.reduce<any[]>((acc, v) => acc.concat(Array.isArray(v) ? flatten<T>(v, depth - 1) : v), [])
    : (arr as T[]).slice();
}
```

## 무한 평탄화

```ts showLineNumbers
export function flattenDeep<T>(arr: any[]): T[] {
  return arr.flat ? (arr.flat(Infinity) as T[]) : flatten<T>(arr, Number.POSITIVE_INFINITY);
}
```

## 사용 예

```ts showLineNumbers
flatten([1, [2, [3, 4]], 5], 2); // [1, 2, 3, 4, 5]
flattenDeep([1, [2, [3, 4]], 5]); // [1, 2, 3, 4, 5]
```
