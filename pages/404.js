import styled from "styled-components";
import { ImCrying } from "react-icons/im";

const NotFound = () => {
  return (
    <Container>
      <ImCrying color="red" size={24} />
      <p>404 에러가 발생하였습니다. </p>
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  svg {
    margin: 10px;
  }

  p {
    color: red;
  }
`;
