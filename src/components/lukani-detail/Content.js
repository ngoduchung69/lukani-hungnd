import React from "react";
import styled from "styled-components";

const Content = () => {
  return (
    <div>
      <WellcomeLukani>Welcome to Lukani store</WellcomeLukani>
      <LukaniHistory>Lukani History</LukaniHistory>
      <Paragraph>
        Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis
        eget maecenas sedurna malesuada consectetuer.<br /><br />Ornare integer commodo
        mauris et ligula purus, praesent cubilia laboriosam viverra. Mattis id
        rhoncus. Integer lacus eu volutpat fusce. Elit etiam phasellus suscipit
        suscipit dapibus, condimentum tempor quis, turpis luctus dolor sapien
        vivamus.
      </Paragraph>
      <StyledImg src={require("../../assets/singnature.png")} />
      <Author>
      john doe <Name>– CEO Lukani</Name>
      </Author>
    </div>
  );
};

const Wrapper = styled.div`

`

const Name = styled.div`
font-family: 'Raleway', sans-serif;
display:inline;
`

const Author = styled.div`

font-size: 14px;
line-height: 25px;
text-transform: uppercase;
margin-top: 16px;
font-style: normal;
font-weight: 400;
visibility: visible;
font-family: "Rubik", sans-serif;
color: #222222;
`

const StyledImg = styled.img`

`

const Paragraph = styled.div`
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 25px;
  font-style: normal;
  font-weight: 400;
  visibility: visible;
  font-family: 'Raleway', sans-serif;
  color: black;
`;

const LukaniHistory = styled.div`
  font-size: 40px;
  line-height: 48px;
  font-weight: 400;
  font-family: "Lora", serif;
  margin-bottom: 30px;
  color:#222222;
`;

const WellcomeLukani = styled.div`
  color: #79a206;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 7px;
  font-family: "Rubik";
`;

export default Content;
