---
id: debounce
title: 디바운스(debounce) 구현
---

검색 입력창과 같이 잦은 이벤트를 일정 시간으로 묶어 호출 횟수를 줄일 때 디바운스를 사용합니다.

## 사용처 예시

- 입력창 실시간 검색
- 리사이즈 이벤트 처리
- 스크롤 포지션 계산

## 구현 코드

```js showLineNumbers
function debounce(fn, wait = 300) {
  let timer = null;

  const debounced = function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args); // this 바인딩 유지
    }, wait);
  };

  // 대기 중인 작업을 취소할 수 있는 기능
  debounced.cancel = () => {
    if (timer) clearTimeout(timer);
  };

  return debounced;
}
```

## 사용 예

```js showLineNumbers
const onInput = debounce((keyword) => {
  console.log('검색:', keyword);
}, 400);

onInput('ja');
onInput('jav');
onInput('java'); // 마지막 호출만 실행
```
