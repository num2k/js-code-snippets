---
id: uri-decode
title: 문자열 URI 디코드
---

인코딩된 URI 문자열을 디코딩 할때 사용합니다.

## 구문
- `decodeURI(문자열)`: 문자열을 디코딩
- `decodeURIComponent(문자열)`: 문자열을 디코딩

`encodeURI()`로 인코딩된 문자열은 `decodeURI()`로 디코딩 합니다.<br />
`encodeURIComponent()`로 인코딩된 문자열은 `decodeURIComponent()`로 디코딩 합니다.

## 예시
```js showLineNumbers
decodeURI('https://example.com/%EA%B0%90%EC%9E%90%20%EA%B3%A0%EA%B5%AC%EB%A7%88.html');
// 'https://example.com/감자 고구마.html'

decodeURI('https%3A%2F%2Fexample.com%2F%EA%B0%90%EC%9E%90%20%EA%B3%A0%EA%B5%AC%EB%A7%88.html');
// 'https%3A%2F%2Fexample.com%2F감자 고구마.html'

decodeURIComponent('https%3A%2F%2Fexample.com%2F%EA%B0%90%EC%9E%90%20%EA%B3%A0%EA%B5%AC%EB%A7%88.html');
// 'https://example.com/감자 고구마.html'
```
