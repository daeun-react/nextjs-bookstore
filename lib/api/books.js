import axios from ".";

const headers = {
  Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`,
};

export const getBooks = (params) =>
  axios.get("", {
    headers,
    params,
  });
