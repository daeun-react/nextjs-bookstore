import styled from "styled-components";
import { ImCrying } from "react-icons/im";

const Error = () => {
  return (
    <Container>
      <ImCrying color="red" size={24} />
      <p>에러가 발생하였습니다. </p>
    </Container>
  );
};

export default Error;

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
