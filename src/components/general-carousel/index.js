import React from 'react';
import Slide from './Slide';
import Content from './Content';
import styled from 'styled-components'

const GeneralCarousel = () => {
    return (
        <Wrapper>
            <Slide />
            <Content />
        </Wrapper>
    );
};

const Wrapper = styled.div`
position:relative;
`

export default GeneralCarousel;