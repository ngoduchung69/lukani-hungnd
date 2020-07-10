import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styled from "styled-components";
import "antd/dist/antd.css";

const DropDownCharacter = ({ data }) => {
  const menu = (
    <Menu>
      <div>
        <WrapperRow>
          {data.data.map((value1, index1) => (
            <WrapperColumn key={index1 + 100}>
              {value1.title && <Title>{value1.title}</Title>}
              {value1.data.map((value2, index2) => (
                <Element key={index2 + 1000}>{value2}</Element>
              ))}
            </WrapperColumn>
          ))}
        </WrapperRow>
      </div>
    </Menu>
  );
  return (
    <>
      {data.data.length > 0 ? (
        <Dropdown overlay={menu}>
          <StyledCharacterHover
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
          >
            {data.title} <DownOutlined />
          </StyledCharacterHover>
        </Dropdown>
      ) : (
        <StyledCharacterHover
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
        >
          {data.title}
        </StyledCharacterHover>
      )}
    </>
  );
};

const WrapperRow = styled.div`
  display: flex;
  padding: 20px;
`;

const WrapperColumn = styled.div`
  margin-right: 50px;
`;

const Title = styled.div`
  font-size: 15px;
  line-height: 24px;
  text-transform: capitalize;
  font-weight: 500;
  display: block;
  margin-bottom: 12px;
  transition: all 0.3s ease 0s;
  font-family: "Rubik";
  &:hover {
    color: #79a206;
  }
  text-decoration: none;
  cursor: pointer;
`;

const Element = styled.div`
  font-size: 14px;
  font-weight: 400;
  display: block;
  line-height: 32px;
  text-transform: capitalize;
  transition: all 0.3s ease 0s;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #79a206;
  }
  /* font-family: "Rubik"; */
`;

const StyledCharacterHover = styled.a`
  color: black;
  line-height: 37px;
  transition: all 0.3s ease 0s;
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 500;
  font-family: "Rubik";
margin:10px;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  &:hover {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    color: #79a206;
  }
`;

export default DropDownCharacter;
