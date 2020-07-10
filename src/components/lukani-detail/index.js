import React from "react";
import styled from "styled-components";
import DisplayImage from "./DisplayImage";
import Content from "./Content";

const LukaniDetail = () => {
  return (
    <Wrapper>
      <Cover>
        <DisplayImage />
        <Content />
      </Cover>
    </Wrapper>
  );
};

const Cover = styled.div`
  margin: 100px 130px 0px 130px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap:6rem;
  padding-bottom:100px;
  border-bottom:solid 1px #e1e1e1;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default LukaniDetail;
