import React from "react";
import Carousel from "react-multi-carousel";
import styled from 'styled-components'

const BrandCarousel = () => {
  return (
    <StyledCarousel
      infinite
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 6,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 4,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 5,
        },
      }}
    >
      <StyledImg src={require("../../assets/brand3.png")} />
      <StyledImg src={require("../../assets/brand4.png")} />
      <StyledImg src={require("../../assets/brand5.png")} />
      <StyledImg src={require("../../assets/brand3.png")} />
      <StyledImg src={require("../../assets/brand4.png")} />
      <StyledImg src={require("../../assets/brand5.png")} />
      <StyledImg src={require("../../assets/brand3.png")} />
      <StyledImg src={require("../../assets/brand4.png")} />
      <StyledImg src={require("../../assets/brand5.png")} />
    </StyledCarousel>
  );
};

const StyledCarousel = styled(Carousel)`
margin:50px;
`

const StyledImg = styled.img`

`

export default BrandCarousel;
