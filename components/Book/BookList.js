import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { useSelector } from "../../store";
import Book from "./Book";

function BookList({ books }) {
  const { loading, data, error } = useSelector((state) => state.book);
  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생...</div>;
  if (!data.length) return <div>검색 결과가 없습니다.</div>;

  return (
    <UL>
      {data.map((book) => (
        <Book key={uuidv4()} book={book} />
      ))}
    </UL>
  );
}

export default BookList;

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
