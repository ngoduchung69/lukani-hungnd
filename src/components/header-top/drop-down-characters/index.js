import React from "react";
import DropDownCharacter from "./DropDownCharacter";
import { fakeData } from "./fakeData";
import styled from 'styled-components'

const DropDownCharacters = () => {
  return (
    <Wrapper>
      <DropDownCharacter data={fakeData.home} />
      <DropDownCharacter data={fakeData.shop} />
      <DropDownCharacter data={fakeData.blog} />
      <DropDownCharacter data={fakeData.pages} />
      <DropDownCharacter data={fakeData.contactUs} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
`

export default DropDownCharacters;
