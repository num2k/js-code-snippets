---
id: deep-clone
title: 객체 깊은 복사(Deep Clone)
---

얕은 복사로는 중첩 객체가 공유되기 때문에 예상치 못한 변경이 발생할 수 있습니다. 깊은 복사를 사용해 안전하게 복제합니다.

## 빠른 방법 (구조 단순, JSON 호환일 때)

```js showLineNumbers
function deepCloneByJSON(obj) {
  return JSON.parse(JSON.stringify(obj));
}
```

- 장점: 매우 빠르고 간단
- 단점: `Date`, `Map`, `Set`, `undefined`, 함수 등은 손실됩니다.

## 범용 방법 (재귀)

```js showLineNumbers
function deepClone(input, weak = new WeakMap()) {
  if (input === null || typeof input !== 'object') return input;
  if (weak.has(input)) return weak.get(input);

  if (input instanceof Date) return new Date(input);
  if (input instanceof RegExp) return new RegExp(input);
  if (input instanceof Map) return new Map(Array.from(input, ([k, v]) => [deepClone(k, weak), deepClone(v, weak)]));
  if (input instanceof Set) return new Set(Array.from(input, (v) => deepClone(v, weak)));

  const output = Array.isArray(input) ? [] : {};
  weak.set(input, output);
  for (const [k, v] of Object.entries(input)) {
    output[k] = deepClone(v, weak);
  }
  return output;
}
```


## 더 현대적인 방법: structuredClone()
최신 브라우저와 Node.js(v17+) 환경이라면, 직접 구현한 함수 대신 네이티브 API를 사용할 수 있습니다. <br />
`structuredClone()`은 2022년을 기점으로 모든 주요 브라우저의 안정 버전에 포함되었습니다.

## 사용 예

```js showLineNumbers
const a = { when: new Date(), list: [1, { v: 2 }], map: new Map([[1, new Set([1,2])]]) };
const b = deepClone(a);
const c = structuredClone(a);

b.list[1].v = 3;
c.list[1].v = 4;
console.log(a.list[1].v); // 2 (원본 불변)
```
