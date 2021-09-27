import Head from "next/head";
import styled from "styled-components";
import { FiSmile } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <Head>
        <title>bookstore | 도서 검색 사이트</title>
        <meta name="description" content={`Kakao Book API 도서 검색 사이트`} />
      </Head>
      <Container>
        <FiSmile color="gray" size={32} />
        <h1>도서 검색 사이트</h1>
        <h2>WELCOME!</h2>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: gray;
  font-size: 16px;
  line-height: 1.5;

  svg {
    margin: 10px;
  }
`;
