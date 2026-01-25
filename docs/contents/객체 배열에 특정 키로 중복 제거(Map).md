---
id: obj-array-deduplication
title: 객체 배열에 특정 키로 중복 제거
---
API 데이터를 처리할 때 ID 값이 중복된 데이터를 걷어내야 하는 경우에 사용합니다.

```js showLineNumbers
function uniqueBy(arr, key) {
  return [
    ...new Map(arr.map((item) => [item[key], item])).values()
  ];
} 
```
## 사용 예
```js showLineNumbers
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Charlie' }
];

uniqueBy(users, 'id'); // [{ id: 1, name: 'Charlie' }, { id: 2, name: 'Bob' }]
```
