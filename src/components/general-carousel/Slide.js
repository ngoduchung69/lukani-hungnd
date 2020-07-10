import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

const Slide = () => {
  return (
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
      <StyledImg src={require("../../assets/slider7.jpg")} />
      <StyledImg src={require("../../assets/slider8.jpg")} />
      <StyledImg src={require("../../assets/slider9.jpg")} />
    </Carousel>
  );
};

const StyledImg = styled.img`
  height: 100vh;
  width: 100%;
`;

export default Slide;
