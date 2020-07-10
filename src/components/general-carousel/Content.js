import React from "react";
import styled from "styled-components";

const Content = () => {
  return (
    <Wrapper>
      <AmazingFromLukani>AMAZING FROM Lukani</AmazingFromLukani>
      <BigSaleNewArrivals>
        Big Sale
        <br /> New Arrivals
      </BigSaleNewArrivals>
      <Discount>Discount 20% Off For Lukani Members</Discount>
      <Discover>Discover now</Discover>
    </Wrapper>
  );
};

const Discover = styled.div`
  &:hover {
    background-color: #79a206;
  }
  background: #222222;
  margin-top: 36px;
  font-size: 15px;
  font-weight: 500;
  padding: 0 45px;
  display: inline-block;
  text-transform: uppercase;
  border-radius: 30px;
  height: 65px;
  line-height: 65px;
  color: #fff;
  transition: all 0.3s ease 0s;
  text-decoration: none;
  cursor: pointer;
  font-family: "Rubik", sans-serif;
`;

const Discount = styled.div`
  font-size: 20px;
  line-height: 20px;
  font-style: normal;
  font-weight: 400;
  visibility: visible;
  font-family: "Raleway", sans-serif;
  color: #222222;
`;

const BigSaleNewArrivals = styled.div`
  font-size: 63px;
  line-height: 63px;
  margin-bottom: 23px;
  text-transform: uppercase;
  letter-spacing: -2px;
  color: #222222;
  font-family: "Raleway", sans-serif;
  width: 500px;
`;

const AmazingFromLukani = styled.div`
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  width: 120px;
  /* display: inline-block; */
  margin-bottom: 35px;
  border-left: 2px solid #000000;
  padding-left: 8px;
  font-family: "Rubik", sans-serif;
  color: #222222;
`;

const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  left: 100px;
  top: 200px;
`;

export default Content;
