---
id: uri-escape
title: 문자열 URI 이스케이프 처리
---
URI에 한글이 포함되면 그대로 사용할 수 없기 때문에 인코딩이 필요합니다. 인코딩에 쓰이는 메소두는 두종류가 있으며, 대상이 되는 문자가 각각 다릅니다. <br />
단 숫자, `-`, `_`, `.`, `!`, `~`, `*`, `'`, `(`, `)`는 이스케이프 처리되지 않습니다.

## 구문
- `encodeURI(문자열)`: 문자열을 인코딩
- `encodeURIComponent`: 문자열을 인코딩

## 예시
```js showLineNumbers
encodeURI('https://example.com/감자 고구마.html');
// 'https://example.com/%EA%B0%90%EC%9E%90%20%EA%B3%A0%EA%B5%AC%EB%A7%88.html'

encodeURIComponent('https://example.com/감자 고구마.html');
// 'https%3A%2F%2Fexample.com%2F%EA%B0%90%EC%9E%90%20%EA%B3%A0%EA%B5%AC%EB%A7%88.html'
```

`encodeURIComponent()`는 `encodeURI()`보다 이스케이프를 처리하는 문자의 종류가 더 많습니다. (
`/`, `?`, `&`, `=`, `+`, `:`, `@`, `$`, `;`, `,`, `#`)
