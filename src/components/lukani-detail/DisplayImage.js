import React from 'react';
import styled from 'styled-components'

const DisplayImage = () => {
    return (
        <Wrapper>
            <StyledImg src={require("../../assets/img-top-vogue3.png")} />
        </Wrapper>
    );
};

const StyledImg = styled.img`

`

const Wrapper = styled.div`
display:flex;
justify-content:center;
`

export default DisplayImage;