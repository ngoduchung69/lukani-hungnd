import React from "react";
import styled from "styled-components";

const InformationColumn = ({ data }) => {
  return (
    <Wrapper>
      <TitleBox>
        <Title>{data.title}</Title>
        <UnderlinedHandmade />
      </TitleBox>
      {data.data.map((value, index) => (
        <Element key={index}>{value}</Element>
      ))}
    </Wrapper>
  );
};

const Element = styled.a`
  display: block;
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;
  &:hover {
    color: #79a206;
  }
  color: black;
  text-transform: capitalize;
`;

const UnderlinedHandmade = styled.div`
  height: 2px;
  width: 40px;
  background-color: black;
`;

const TitleBox = styled.div`
margin-bottom:20px;
`;

const Wrapper = styled.div`
margin:15px;
`;

const Title = styled.div`
  color: black;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 0px;
  padding-bottom: 5px;
  text-transform: uppercase;
  font-weight: 500;
  position: relative;
  font-family: "Rubik", sans-serif;
`;

export default InformationColumn;
