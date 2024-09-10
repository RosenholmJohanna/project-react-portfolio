/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable spaced-comment */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
import React from 'react';
import styled from 'styled-components';
import { FaStackOverflow, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { Section } from 'GlobalStyles';

const Social = () => {
    return (
  <Section>
   
    <IconStyles>
     <a 
       href="https://www.linkedin.com/in/johanna-rosenholm-932942109/"
       role="button"
       target="_blank"  
       alt="Linkedin logo"
       rel="noreferrer">
       <FaLinkedin />
     </a>
      <a
        href="https://github.com/RosenholmJohanna"
        role="button"
        target="_blank"  
        alt="Github logo"
        rel="noreferrer">
       <FaGithubSquare />
      </a>

      <a  
        href="https://stackoverflow.com/users/19392281/johanna-rosenholm"
        role="button"
        target="_blank"  
        alt="StackOverflow logo"
        rel="noreferrer">
        <FaStackOverflow />
      </a>
    </IconStyles>
  </Section>
    );
};

export default Social;


const IconStyles = styled.div`
font-family: 'montserrat';
text-align:center;
background-color:#f7f8f9;
padding-top:3%;
padding-bottom: 2%;

a {
justify-content: center;
font-size: 40px;
/* color:#b9aba3; */
color:#00072D;
margin: 5%;
}
`