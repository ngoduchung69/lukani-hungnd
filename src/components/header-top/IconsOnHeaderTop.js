import React from "react";
import styled from "styled-components";
import {
  SearchOutlined,
  TeamOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

const IconsOnHeaderTop = () => {
  return (
    <Wrapper>
      <StyledSearch />
      <StyledTeam />
      <StyledHeart />
      <StyledShopping />
      <Counter>2</Counter>
    </Wrapper>
  );
};

const Counter = styled.div`
  position: absolute;
  right: 5px;
  top: 20px;
  height: 20px;
  width: 20px;
  background-color: #79a206;
  border-radius: 50%;
  display:flex;
  justify-content:center;
  align-items:center;
  color:white;
  padding:5px;
  font-size:10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  align-items:center;
`;

const StyledSearch = styled(SearchOutlined)`
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: #79a206;
  }
  margin: 15px;
`;

const StyledTeam = styled(TeamOutlined)`
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: #79a206;
  }
  margin: 15px;
`;

const StyledHeart = styled(HeartOutlined)`
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: #79a206;
  }
  margin: 15px;
`;

const StyledShopping = styled(ShoppingOutlined)`
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: #79a206;
  }
  margin: 15px;
`;

export default IconsOnHeaderTop;
