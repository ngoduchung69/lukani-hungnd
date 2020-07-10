import React from "react";
import styled from "styled-components";
import { MailOutlined } from "@ant-design/icons";

const EmailForDiscount = () => {
  return (
    <Wrapper>
      <Cover>
        <TitleBox>
          <Title>
            Get <GreenCharacters> 20% Off </GreenCharacters> Your Next Order
          </Title>
          <UnderlineHandmade></UnderlineHandmade>
          <InputBox>
            <InputHead>
              <StyledMail />
              <StyledInput placeholder={"Enter your email"} />
            </InputHead>

            <Subcribe>Subcribe</Subcribe>
          </InputBox>
        </TitleBox>
      </Cover>
    </Wrapper>
  );
};

const InputHead = styled.div`
  display: flex;
`;

const StyledMail = styled(MailOutlined)`
  font-size: 25px;
  margin: 0px 15px 0px 0px;
  color: black;
`;

const Subcribe = styled.a`
  &:hover {
    color: #79a206;
  }
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  height: 100%;
  border: 0;
  transition: 0.3s;
  padding: 0;
  background: inherit;
  color: black;
`;

const StyledInput = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  width: 450px;
  color: black;
`;

const InputBox = styled.div`
  display: flex;
  padding-bottom: 10px;
  border-bottom: solid 1px black;
  width: 600px;
  justify-content: space-between;
`;

const GreenCharacters = styled.div`
  color: #79a206;
  margin: auto 15px;
`;

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
  margin-bottom: 100px;
`;

const Cover = styled.div`
  margin: 100px 0px;
`;

const Wrapper = styled.div`
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
`;

const Title = styled.div`
  font-size: 40px;
  line-height: 48px;
  font-weight: 400;
  display: flex;
  margin-bottom: 0;
  text-transform: capitalize;
  position: relative;
  font-family: "Lora", serif;
  padding-bottom: 22px;
  color: #222222;
`;

export default EmailForDiscount;
