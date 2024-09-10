/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable spaced-comment*/
/* eslint-disable no-trailing-spaces*/
/* eslint-disable no-multiple-empty-lines*/
import React from 'react';
import styled from 'styled-components';
//import GlobalStyles from 'GlobalStyles'
//import { TechStyles } from "./TechStyles";

export const Tech = () => {
  return (
    <TechStyles>
    <TechText><Highlighted>JavaScript</Highlighted> ES6,
     RestAPIs, mob-programming,pair-programming, Github, Redux, Node.js,
    <Highlighted> React</Highlighted> Flexbox, JSX<Highlighted> Node.js </Highlighted>
    </TechText>
    </TechStyles>
    );
  };

export default Tech;

const TechStyles = styled.div`
background-color:#00072D;
font-family: 'montserrat';
text-align:center;
padding: 1%;
`

const TechText = styled.p`
line-height: 1.5;
font-size: 0.8rem;
letter-spacing: 0.15rem;
font-weight: 100;
margin: 0px 1px 15px 1px;
text-align: center;
color: white;

  @media (min-width: 768px) {
  font-size: 14px;
  margin: 0% 15% 0% 15%;
  }
`

const Highlighted = styled.span`
color:#2e5894;
margin-top: 0;
font-weight: 900;
`