---
id: slugify
title: 문자열을 URL 슬러그로 변환(slugify)
sidebar_position: 3
---

문자열을 소문자/하이픈 형태의 URL-safe 슬러그로 변환합니다. 한글도 영문자로 치환하거나 제거 규칙을 적용할 수 있습니다.

## 간단 구현

```ts showLineNumbers
export function slugify(input: string): string {
  return input
    .normalize('NFKD') // 분해 정규화 (악센트 분리)
    .replace(/[\u0300-\u036f]/g, '') // 결합 문자 제거
    .toLowerCase()
    .replace(/[^a-z0-9\u3131-\u318E\uAC00-\uD7A3\s-]/g, '') // 영문/숫자/한글만 남기기
    .trim()
    .replace(/\s+/g, '-') // 공백 -> 하이픈
    .replace(/-+/g, '-');  // 하이픈 연속 -> 하나
}
```

## 사용 예

```ts showLineNumbers
slugify('Hello World!') // 'hello-world'
slugify('자바스크립트 팁 모음') // '자바스크립트-팁-모음'
```
