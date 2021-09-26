import Image from "next/image";
import styled from "styled-components";
import formatNumber from "../../utils/formatNumber";
import formatDateTime from "../../utils/formatDateTime";

const NA = "NA";
const AVAILABLE = "정상판매";

function Book({ book }) {
  const {
    title,
    thumbnail,
    url,
    authors,
    publisher,
    datetime,
    price,
    sale_price,
    status,
  } = book;

  return (
    <LI>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <article>
          <Thumbnail>
            <Image
              src={thumbnail ? thumbnail : "/no-picture.jpg"}
              alt={thumbnail ? "표지 썸네일" : "썸네일 없음"}
              width={120}
              height={170}
            />
          </Thumbnail>
          <Title>{title}</Title>
          <Infomation>
            <div>
              <dt aria-label="지은이" />
              <dd>{authors[0] || NA}</dd>
            </div>
            <div>
              <dt aria-label="출판사" />
              <dd>{publisher || NA}</dd>
            </div>
            <div>
              <dt aria-label="출판 날짜" />
              <dd>{datetime ? formatDateTime(datetime) : NA}</dd>
            </div>
            <div>
              <dt aria-label="가격" />
              <dd className="price">
                {status === AVAILABLE
                  ? formatNumber(sale_price > 0 ? sale_price : price)
                  : NA}
              </dd>
            </div>
          </Infomation>
        </article>
      </a>
    </LI>
  );
}

const LI = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  padding: 20px;
`;

const Title = styled.h3`
  width: 280px;
  margin: 16px auto;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Thumbnail = styled.div`
  display: flex;
  justify-content: center;
`;

const Infomation = styled.dl`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;

  div + div {
    margin-top: 8px;
  }

  div:last-child {
    color: #f15f5f;
  }

  .price {
    font-size: 14px;
    font-weight: 600;

    &::before {
      content: "₩";
      margin-right: 10px;
    }
  }
`;

export default Book;
