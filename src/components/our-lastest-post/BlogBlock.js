import React from "react";
import styled from "styled-components";
import {
    WechatOutlined
  } from '@ant-design/icons';

const BlogBlock = () => {
  return (
    <Wrapper>
      <StyledImg src={require("../../assets/blog2.jpg")} />
      <Content>
        <Title>Libero lorem</Title>
        
          <Author>By <p style={{color:"#79a206",display:'inline'}}>admin / July 16, 2019</p></Author>
        
        <Paragraph>
          Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu
          ex. Aenean posuere libero eu augue condimentum rhoncus praesent
        </Paragraph>
        <FoorterBog>
<ContinueReading>Continue Reading</ContinueReading>
<View>
<WechatOutlined style={{marginRight:'10px'}} />
0
</View>
        </FoorterBog>
      </Content>
    </Wrapper>
  );
};

const View = styled.div`
font-size:17px;
display:flex;
align-items:center;
`

const ContinueReading = styled.a`
font-size: 14px;
line-height: 14px;
text-decoration: underline;
font-style: normal;
font-weight: 400;
visibility: visible;
/* font-family: "Rubik", sans-serif; */
color:black;
&:hover {
    text-decoration: underline;
    color: #79a206;
  }
`

const FoorterBog = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`

const Paragraph = styled.div`
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 15px;
  padding-bottom: 21px;
  font-style: normal;
  font-weight: 400;
  visibility: visible;
  font-family: inherit;
  color: #222222;
  border-bottom:solid 1px #e1e1e1;
`;

const Author = styled.div`
  font-size: 13px;
  line-height: 15px;
  font-style: normal;
  font-weight: 400;
  visibility: visible;
  font-family: inherit;
  margin-bottom:20px;
`;

const Title = styled.a`
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color:black;
  &:hover {
    color: #79a206;
  }
`;

const Content = styled.div`
margin-top:20px;
`;

const StyledImg = styled.img`
  width: 370px;
  height: 230px;
`;

const Wrapper = styled.div`
  height: 461px;
  width: 370px;
`;

export default BlogBlock;
