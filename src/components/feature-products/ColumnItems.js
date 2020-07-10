import React from "react";
import styled, { keyframes } from "styled-components";
import { Rate } from "antd";
import { StarOutlined } from "@ant-design/icons";
import {
  ShoppingCartOutlined,
  RetweetOutlined,
  HeartOutlined,
  EyeOutlined,
} from "@ant-design/icons";

const ColumnItems = ({ data }) => {
  return (
    <Wrapper>
      <WrapperItem>
        <StyledImg src={require("../../assets/product7.jpg")} />
        <Discount>{data.firstData.discount}</Discount>
        <InteractIcons>
          <StyledShopping />
          <StyledRetweet />
          <StyledHeart />
          <StyledEye />
        </InteractIcons>
        <InformationBox>
          <Rate value={data.firstData.star} character={<StarOutlined />} />

          <ProductName>{data.firstData.productName}</ProductName>
          <PriceBox>
            <RealPrice>£{data.firstData.newPrice}.00</RealPrice>
            <OldPrice>£{data.firstData.oldPrice}00</OldPrice>
          </PriceBox>
        </InformationBox>
      </WrapperItem>
      <WrapperItem>
        <StyledImg src={require("../../assets/product7.jpg")} />
        <Discount>{data.secondData.discount}</Discount>
        <InteractIcons>
          <StyledShopping />
          <StyledRetweet />
          <StyledHeart />
          <StyledEye />
        </InteractIcons>
        <InformationBox>
          <Rate value={data.secondData.star} character={<StarOutlined />} />

          <ProductName>{data.secondData.productName}</ProductName>
          <PriceBox>
            <RealPrice>£{data.secondData.newPrice}00</RealPrice>
            <OldPrice>£{data.secondData.oldPrice}00</OldPrice>
          </PriceBox>
        </InformationBox>
      </WrapperItem>
    </Wrapper>
  );
};

const StyledShopping = styled(ShoppingCartOutlined)`
  &:hover {
    color: #79a206;
  }
  padding: 15px;
`;

const StyledRetweet = styled(RetweetOutlined)`
  &:hover {
    color: #79a206;
  }
  padding: 15px;
`;

const StyledHeart = styled(HeartOutlined)`
  &:hover {
    color: #79a206;
  }
  padding: 15px;
`;

const StyledEye = styled(EyeOutlined)`
  &:hover {
    color: #79a206;
  }
  padding: 15px;
`;

const breatheAnimation = keyframes`
 0% { opacity:0  }
 25% {   opacity: 0.25 }
 50% {  opacity: 0.5 }
 75% {  opacity: 0.75 }
 100% {  opacity: 1}
`;

const InteractIcons = styled.div`
  position: absolute;
  background-color: white;
  font-size: 18px;
  color: black;
  cursor: pointer;
  bottom: 100px;
  opacity: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceBox = styled.div`
  display: flex;
  justify-content: center;
`;

const OldPrice = styled.div`
  text-decoration: line-through;
  font-weight: 400;
  font-size: 12px;
  margin-left: 5px;
  font-family: "Rubik", sans-serif;
  color: #222222;
`;

const RealPrice = styled.div`
  color: #79a206;
  font-weight: 500;
  font-size: 15px;
  font-family: "Rubik", sans-serif;
`;

const ProductName = styled.a`
  transition: all 0.3s ease 0s;
  font-size: 14px;
  font-weight: 400;
  text-transform: capitalize;
  &:hover {
    color: #79a206;
  }
  color: #000;
  margin: 0px 0px 10px 0px;
`;

const InformationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Discount = styled.div`
  top: 11px;
  left: 11px;
  text-transform: uppercase;
  color: #ffffff;
  background: #dc0f0f;
  font-size: 14px;
  height: 24px;
  line-height: 24px;
  padding: 0 14px;
  text-align: center;
  display: block;
  border-radius: 2px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  visibility: visible;
  font-family: "Rubik", sans-serif;
`;

const StyledImg = styled.img`
  height: 240px;
  width: 240px;
`;

const WrapperItem = styled.div`
  margin: 5px;
  width: 240px;
  height: 345px;
  position: relative;
  &:hover {
    ${InteractIcons} {
      animation-name: ${breatheAnimation};
      animation-duration: 0.3s;
      opacity: 1;
    }
  }
`;

export default ColumnItems;
