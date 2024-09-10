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
margin: 0% 3% 0% 3%;
text-align: left;
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
      Hello! I&apos;m a student at Technigos frontend developer bootcamp.  
      In my jobs, I have seen opportunities where digital tools in many ways 
      would have made it easier for both customers and patients in different ways. 
      In the future, I hope to be able to, not only develop ideas - but also be 
      involved in building the product itself. 
      </IntroText>
    </IntroStyles>
  );
}
  
export default Intro;
  
