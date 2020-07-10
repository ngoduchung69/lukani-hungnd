import React from "react";
import styled from "styled-components";
import CommentOfCustomer from "./CommentOfCustomer";
import Carousel from "react-multi-carousel";
import BrandCarousel from "./BrandCarousel";

const WhatOurCustomerSays = () => {
  return (
    <Wrapper>
      <Cover>
        <TitleBox>
          <Title>What Our Customers Says ?</Title>
          <UnderlineHandmade></UnderlineHandmade>
        </TitleBox>
        <Carousel
          infinite
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
            },
          }}
        >
          <CommentOfCustomer />
          <CommentOfCustomer />
          <CommentOfCustomer />
        </Carousel>
        <BrandCarousel />
      </Cover>
    </Wrapper>
  );
};

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const UnderlineHandmade = styled.div`
  height: 2px;
  width: 100px;
  background-color: #222222;
  margin-bottom: 30px;
`;

const Cover = styled.div`
  margin: 100px 0px;
`;

const Wrapper = styled.div``;

const Title = styled.div`
  font-size: 40px;
  line-height: 48px;
  font-weight: 400;
  display: inline-block;
  margin-bottom: 0;
  text-transform: capitalize;
  position: relative;
  font-family: "Lora", serif;
  padding-bottom: 22px;
  color: #222222;
`;

export default WhatOurCustomerSays;
