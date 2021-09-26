import styled from "styled-components";
import { wrapper } from "../../store";
import { bookActions } from "../../store/book";
import { getBooks } from "../../lib/api/books";
import BookList from "../../components/Book/BookList";

const text = () => {
  return (
    <Container>
      <BookList />
    </Container>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query }) => {
      const { text } = query;
      const { page } = store.getState().book;

      try {
        store.dispatch(bookActions.setLoading());
        const { data } = await getBooks({
          query: text,
          size: 9,
          target: "title",
          page: Number(page + 1),
        });
        store.dispatch(bookActions.getSuccess({ query: text, data }));
      } catch (error) {
        store.dispatch(bookActions.getFailure());
      }
      return { props: {} };
    }
);

export default text;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;