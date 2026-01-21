---
id: debounce
title: 디바운스(debounce) 구현
sidebar_position: 1
---

검색 입력창과 같이 잦은 이벤트를 일정 시간으로 묶어 호출 횟수를 줄일 때 디바운스를 사용합니다.

## 사용처 예시

- 입력창 실시간 검색
- 리사이즈 이벤트 처리
- 스크롤 포지션 계산

## 구현 코드

```ts showLineNumbers
export function debounce<T extends (...args: any[]) => void>(fn: T, wait = 300) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: any[]) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...(args as Parameters<T>)), wait);
  };
}
```

## 사용 예

```ts showLineNumbers
const onInput = debounce((keyword: string) => {
  console.log('검색:', keyword);
}, 400);

onInput('ja');
onInput('jav');
onInput('java'); // 마지막 호출만 실행
```
