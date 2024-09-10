/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable no-trailing-spaces */  
/* eslint-disable no-multiple-empty-lines */
import React from 'react';
import styled from 'styled-components';
import { Section } from 'GlobalStyles';

export const Footer = () => {
  return (
    <Section>
      <FooterStyles>
        <FooterText> Johanna Rosenholm </FooterText>
        <FooterText> rosenholm.johanna88@gmail.com </FooterText>
        <FooterText> +46(0) 70 980 90 30 </FooterText>
      </FooterStyles>
    </Section>
  );
};

export default Footer;

const FooterStyles = styled.div`
font-family: 'montserrat';
text-align:center;
background-color:#f7f8f9;
color: black;
text-align: center;
padding: 5% 5% 5% 5%;
`

const FooterText = styled.div`
font-size: 0.8rem;
text-align: left;
letter-spacing: 0.10rem;
line-height: 30px; 
`