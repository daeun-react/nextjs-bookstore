# [Next.js] KAKAO API 이용한 도서 검색 사이트

## [🔗 배포 링크](https://nextjs-bookstore-qmq50qu8h-daeun-react.vercel.app)

## 시연 영상

![시연 영상](https://user-images.githubusercontent.com/67173064/134850359-5edd678f-a247-4ccf-9eec-1d02fc162ff4.gif)

## 요구 사항 및 구현 기능

- [x] axios를 활용하여 Kakao API 책 정보 불어오기
- [x] Intersection Observer를 활용하여 무한스크롤 적용
  - [x] 데이터 로딩 시, Spinner 구현
  - [x] 더 이상 불러올 데이터가 없는 경우, API 요청하지 않음
- [x] 검색 결과에 따라 `<title>, <meta>` 내용 변경
- [x] 에러 발생 시 보여질 `_error.js, 404.js` 구현

## 설치 및 시작 방법

```js
- git clone https://github.com/daeun-react/nextjs-bookstore.git
- cd nextjs-bookstore
- npm install
- .env 파일 설정
- npm run dev
```

```js
//.env
NEXT_PUBLIC_KAKAO_API_URL=https://dapi.kakao.com/v3/search/book
NEXT_PUBLIC_KAKAO_API_KEY=xxxx
```
