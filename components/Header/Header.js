import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { SiHatenabookmark } from "react-icons/si";

const Header = () => {
  const [text, setText] = useState("");
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${text}`);
  };

  return (
    <HeaderWrapper>
      <SiHatenabookmark color="white" size={36} />
      <HeaderSearchForm onSubmit={onSubmit}>
        <input
          value={text}
          placeholder="검색 내용을 입력해주세요."
          autoComplete="off"
          onChange={(e) => setText(e.target.value)}
        />
      </HeaderSearchForm>
      <div style={{ opacity: 0 }}></div>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 14px;
  background-color: #24292e;
  line-height: 0;
`;
const HeaderSearchForm = styled.form`
  input {
    width: 500px;
    height: 40px;
    margin: 0px 16px;
    padding: 0px 12px;
    background-color: hsla(0, 0%, 100%, 0.125);
    border: none;
    border-radius: 5px;
    outline: none;
    color: white;
    font-size: 14px;

    &::placeholder {
      color: white;
    }
  }
`;
