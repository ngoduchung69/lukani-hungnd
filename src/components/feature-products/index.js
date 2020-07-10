import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ColumnItems from "./ColumnItems";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import withConnect from "./withConnect";

const FeaturedProducts = (props) => {
  const [columnData, setColumnData] = useState([]);
  useEffect(() => {
    props.getFeaturedProducts({ fakeParams: 1 }, (payload) => {
      console.log("getFeaturedProducts", payload);
    });
  }, []);
  useEffect(() => {
    let arrangedData = [];
    let productsData = props.products;
    for (let x = 0; x < props.products.length; x = x + 2) {
      arrangedData.push({
        firstData: productsData[x],
        secondData: productsData[x + 1],
      });
    }
    console.log("arrangedData", arrangedData);
    setColumnData([...arrangedData])
  }, [props.products]);
  return (
    <Wrapper>
      <Cover>
        <TitleBox>
          <Title>Featured Products</Title>
          <UnderlineHandmade></UnderlineHandmade>
        </TitleBox>

        <StyledCarousel infinite responsive={responsive}>
          {columnData.map((value,index)=><ColumnItems key={index} data={value} />)}
        </StyledCarousel>
      </Cover>
    </Wrapper>
  );
};

const StyledCarousel = styled(Carousel)`
  margin: 20px !important;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

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

export default withConnect(FeaturedProducts);
