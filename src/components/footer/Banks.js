import React from "react";
import styled from "styled-components";

const Banks = () => {
  return (
    <Wrapper>
      <Content>
        Copyright © 2020 <GreenWords>Lukani</GreenWords> All Right Reserved.
      </Content>
      <img style={{marginRight:'40px'}} src={require("../../assets/payment.png")} />
    </Wrapper>
  );
};



const GreenWords = styled.a`
  color: #79a206;
  &:hover {
    text-decoration: underline;
    color: #79a206;
  }
`;

const Content = styled.div`
  text-transform: capitalize;
  line-height: 25px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  visibility: visible;
  /* font-family: "Rubik", sans-serif; */
  color: #222222;
  margin-left:40px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
`;

export default Banks;
