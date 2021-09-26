import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "../../store";
import { bookActions } from "../../store/book";
import { getBooks } from "../../lib/api/books";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import Book from "./Book";

function BookList() {
  const dispatch = useDispatch();
  const { loading, data, error, page, query, isEnd } = useSelector(
    (state) => state.book
  );
  const loadMoreButtonRef = useRef();

  const loadMore = async () => {
    if (loading) return;
    try {
      dispatch(bookActions.setLoading());
      const { data } = await getBooks({
        query,
        size: 9,
        target: "title",
        page,
      });
      dispatch(bookActions.getSuccess({ query, data, loadMore: true }));
    } catch (error) {
      dispatch(bookActions.getFailure());
    }
  };

  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: loadMore,
    disabled: isEnd,
  });

  if (!data.length) return <Container>검색 결과가 없습니다.</Container>;
  return (
    <>
      <UL>
        {data.map((book) => (
          <Book key={uuidv4()} book={book} />
        ))}
      </UL>
      <div ref={loadMoreButtonRef} />
      {loading && "로딩중..."}
    </>
  );
}

export default BookList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const UL = styled.ul`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  width: 980px;
  margin-top: 10px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
