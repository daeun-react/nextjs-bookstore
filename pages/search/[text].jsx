import Head from "next/head";
import styled from "styled-components";
import { wrapper } from "../../store";
import { bookActions } from "../../store/book";
import { getBooks } from "../../lib/api/books";
import BookList from "../../components/Book/BookList";

const text = ({ text }) => {
  return (
    <>
      <Head>
        <title>bookstore | {text} 검색</title>
        <meta
          name="description"
          content={`${text}에 대한 Kakao Book API 결과 페이지`}
        />
      </Head>
      <Container>
        <BookList />
      </Container>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query }) => {
      const { text } = query;
      try {
        store.dispatch(bookActions.setLoading());
        const { data } = await getBooks({
          query: text,
          size: 9,
          target: "title",
          page: 1,
        });
        store.dispatch(
          bookActions.getSuccess({ query: text, data, loadMore: false })
        );
      } catch (error) {
        store.dispatch(bookActions.getFailure());
        throw Error();
      }
      return { props: { text } };
    }
);

export default text;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
