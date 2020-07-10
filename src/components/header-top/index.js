import React from "react";
import styled from "styled-components";
import DropDownCharacters from "./drop-down-characters";
import IconsOnHeaderTop from "./IconsOnHeaderTop";

const HeaderTop = () => {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
  }
  return (
    <>
      <HidenWrapper id={"navbar"}>
        <WrapperLogo>
          <StyledLogo src={require("../../assets/logo.png")} />
        </WrapperLogo>

        <DropDownCharacters />
        <WrapperInput>
          <StyledInput placeholder={"Search Product..."} />
        </WrapperInput>
        <IconsOnHeaderTop />
      </HidenWrapper>
      <Wrapper>
        <WrapperLogo>
          <StyledLogo src={require("../../assets/logo.png")} />
        </WrapperLogo>

        <DropDownCharacters />
        <WrapperInput>
          <StyledInput placeholder={"Search Product..."} />
        </WrapperInput>
        <IconsOnHeaderTop />
      </Wrapper>
    </>
  );
};

const HidenWrapper = styled.div`
  display: grid;
  z-index: 2;
  grid-template-columns: 2fr 4fr 2fr 2fr;
  background: rgba(999, 999, 999, 0.9);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.11);
  height: 80px;
  width: 100%;
  position: absolute;
  left: 0px;
  position: fixed;
  transition: top 0.3s;
  top: -100px;
`;

const WrapperInput = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const StyledInput = styled.input`
  background: transparent;
  outline: none;
  border: none;
`;

const StyledLogo = styled.img`
  width: 150px;
  height: 30px;
`;

const Wrapper = styled.div`
  z-index: 1;
  display: grid;
  grid-template-columns: 2fr 4fr 2fr 2fr;
  background-color: transparent;
  height: 80px;
  width: 100%;
  position: absolute;
  left: 0px;
  top: 30px;
`;

export default HeaderTop;
