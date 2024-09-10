/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
import React from 'react';
import styled from 'styled-components';
//import { IntroStyles } from "./IntroStyles";

const IntroStyles = styled.div`
/* background-color:#f7f8f9; */
background-color:#00072D;
font-family: 'montserrat';
padding: 4% 0% 4% 0%;
`

const IntroText = styled.p`
letter-spacing: 0.1rem;
font-weight: lighter;
line-height: 20px; 
font-size: 0.8rem;
margin: 0% 3% 3% 3%;
text-align: center;
color:white;

@media (min-width: 768px) {
    font-size: 0.8rem;
    margin: 0% 10% 0% 10%;
    line-height: 20px; 
}
`

export const Intro = () => {
  return (
    <IntroStyles>
      <IntroText>
      Frondend development with focus on 
      websecurity at Jensen in stockholm. 
      </IntroText>
    </IntroStyles>
  );
}
  
export default Intro;
  
