import React from "react";
import styled from "styled-components";

const CommentOfCustomer = () => {
  return (
    <Wrapper>
      <StyledImg src={require("../../assets/testimonials-icon.png")} />
      <Comment>
        “ When a beautiful design is combined with powerful technology, <br />
        it truly is an artwork. I love how my website operates and looks with
        this theme. Thank you for the awesome
        <br /> product. ”
      </Comment>
      <StyledImg src={require("../../assets/testimonial2.png")} />
      <Author>Amber Laha / CEO of DND</Author>
    </Wrapper>
  );
};

const Author = styled.div`
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
  visibility: visible;
  font-family: "Rubik", sans-serif;
  color: #222222;
  font-style: normal;
`;

const Comment = styled.div`
  font-size: 17px;
  font-style: italic;
  margin-bottom: 0;
  padding: 0 147px;
  line-height: 30px;
  text-align: center;
  font-weight: 400;
  visibility: visible;
  color: #222222;
  margin-top:20px;
`;

const StyledImg = styled.img`

margin:20px;`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default CommentOfCustomer;
