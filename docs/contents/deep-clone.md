---
id: deep-clone
title: 객체 깊은 복사(Deep Clone)
sidebar_position: 2
---

얕은 복사로는 중첩 객체가 공유되기 때문에 예상치 못한 변경이 발생할 수 있습니다. 깊은 복사를 사용해 안전하게 복제합니다.

## 빠른 방법 (구조 단순, JSON 호환일 때)

```ts showLineNumbers
export function deepCloneByJSON<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
```

- 장점: 매우 빠르고 간단
- 단점: `Date`, `Map`, `Set`, `undefined`, 함수 등은 손실됩니다.

## 범용 방법 (재귀)

```ts showLineNumbers
export function deepClone<T>(input: T, weak = new WeakMap()): T {
  if (input === null || typeof input !== 'object') return input as T;
  if (weak.has(input as any)) return weak.get(input as any);

  if (input instanceof Date) return new Date(input) as any;
  if (input instanceof RegExp) return new RegExp(input) as any;
  if (input instanceof Map) return new Map(Array.from(input, ([k, v]) => [deepClone(k, weak), deepClone(v, weak)])) as any;
  if (input instanceof Set) return new Set(Array.from(input, (v) => deepClone(v, weak))) as any;

  const output: any = Array.isArray(input) ? [] : {};
  weak.set(input as any, output);
  for (const [k, v] of Object.entries(input as any)) {
    output[k] = deepClone(v as any, weak);
  }
  return output;
}
```

## 사용 예

```ts showLineNumbers
const a = { when: new Date(), list: [1, { v: 2 }], map: new Map([[1, new Set([1,2])]]) };
const b = deepClone(a);

b.list[1].v = 3;
console.log(a.list[1].v); // 2 (원본 불변)
```
