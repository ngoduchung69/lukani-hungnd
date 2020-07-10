import React from "react";
import styled from "styled-components";
import {
  TwitterOutlined,
  GooglePlusOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const AssociationAndDownload = () => {
  return (
    <Wrapper>
      <StyledImg
        height={"30px"}
        width={"150px"}
        src={require("../../assets/logo.png")}
      />
      <RowLine>
        <Element>Payment</Element>
        <Element>affiliates</Element>
        <Element>Contact</Element>
        <Element>Internet</Element>
      </RowLine>
      <RowLine>
        <CircleBox>
          <TwitterOutlined />
        </CircleBox>
        <CircleBox fontSize={"16px"}>f</CircleBox>
        <CircleBox>
          <GooglePlusOutlined />
        </CircleBox>
        <CircleBox>
          <YoutubeOutlined />
        </CircleBox>
      </RowLine>

      <RowLine>
        <StyledImg
          height={"45px"}
          width={"144px"}
          src={require("../../assets/icon-app.jpg")}
        />
        <StyledImg
          height={"45px"}
          width={"144px"}
          src={require("../../assets/icon1-app.jpg")}
        />
      </RowLine>
    </Wrapper>
  );
};

const Element = styled.a`
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;
  &:hover {
    color: #79a206;
  }
  color: black;
  text-transform: capitalize;
  margin: 10px;
`;

const RowLine = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;

const CircleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.fontSize || "14px"};
  background-color: #f2f2f2;
  &:hover {
    background-color: #79a206;
    color: white;
  }
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  font-family: "Rubik", sans-serif;
  margin: 5px;
`;

const StyledImg = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: 5px;
`;

export default AssociationAndDownload;
