import React from 'react';
import styled from 'styled-components'
import InformationColumn from './InformationColumn';
import {fakeData} from './fakeData'
import AssociationAndDownload from './AssociationAndDownload';
import Banks from './Banks';

const Footer = () => {
    return (
        <Cover>
<Wrapper>
            <InformationColumn data={fakeData.myAccount} />
            <InformationColumn data={fakeData.information} />
            <AssociationAndDownload />
            <InformationColumn data={fakeData.myAccount} />
            <InformationColumn data={fakeData.customerService} />
        </Wrapper>
        <Banks />
        </Cover>
        
    );
};

const Cover = styled.div``

const Wrapper = styled.div`
display:flex;
justify-content:space-evenly;
padding:100px 30px;
border-bottom:solid 1px #e1e1e1;
`

export default Footer;