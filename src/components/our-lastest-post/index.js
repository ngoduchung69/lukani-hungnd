import React from "react";
import styled from "styled-components";
import BlogBlock from "./BlogBlock";
import Carousel from "react-multi-carousel";

const OurLastestPost = () => {
  return (
    <Wrapper>
      <Cover>
        <TitleBox>
          <Title>Our Latest Posts</Title>
          <UnderlineHandmade></UnderlineHandmade>
        </TitleBox>
        <StyledCarousel
      infinite
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 2,
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
<BlogBlock />
<BlogBlock />
<BlogBlock />
<BlogBlock />
    </StyledCarousel>
        
      </Cover>
    </Wrapper>
  );
};

const StyledCarousel = styled(Carousel)`
margin:auto 70px;
`

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top:100px;
`;

const UnderlineHandmade = styled.div`
  height: 2px;
  width: 100px;
  background-color: #222222;
  margin-bottom: 30px;
`;

const Cover = styled.div`
  margin: 100px 0px 0px 0px;
  padding-bottom:100px;
`;

const Wrapper = styled.div`
background-color:#f2f5f1;
`;

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

export default OurLastestPost;
