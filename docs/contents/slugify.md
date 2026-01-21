---
id: slugify
title: 문자열을 URL 슬러그로 변환(slugify)
sidebar_position: 3
---

문자열을 소문자/하이픈 형태의 URL-safe 슬러그로 변환합니다. 한글도 영문자로 치환하거나 제거 규칙을 적용할 수 있습니다.

## 간단 구현

```js showLineNumbers
function slugify(input) {
  return input
    .toString()
    .toLowerCase()
    .trim()
    // 1. 한글, 영문, 숫자만 남기고 나머지 특수문자 제거
    // \u1100-\u11FF (초성), \u3130-\u318F (자모), \uAC00-\uD7AF (완성형)
    .replace(/[^a-z0-9가-힣\s-]/g, '')
    // 2. 공백을 하이픈으로 변경
    .replace(/[\s_]+/g, '-')
    // 3. 하이픈이 중복되면 하나로 축소
    .replace(/-+/g, '-')
    // 4. 양 끝에 남은 하이픈 제거
    .replace(/^-+|-+$/g, '');
}
```

## 사용 예

```js showLineNumbers
slugify('Hello World!') // 'hello-world'
slugify('자바스크립트 팁 모음') // '자바스크립트-팁-모음'
```
