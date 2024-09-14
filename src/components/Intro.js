/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
import React from 'react';
import styled from 'styled-components';


const IntroStyles = styled.div`
background-color:#001126;
font-family: 'montserrat';
padding: 4% 0% 4% 0%;
`

const IntroText = styled.p`
letter-spacing: 0.1rem;
font-weight: lighter;
line-height: 20px; 
font-size: 0.8rem;
margin: 0% 3% 3% 3%;

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
      Hi! My name is Johanna, and I’m studying to become a full-stack developer.
      On the frontend, my focus is on performance optimization and user experience, 
      while on the backend I try to
      specialize in database and API management. 
      I also have a keen eye for design and awareness of security aspects.
      I’ve always had a strong interest in IT and technology, but it was during my
      career as a radiology nurse that I realized how technology
      improve workflows and patient care. This inspired me to switch careers,
      with the hope of contributing to the creation and development of
      impactful digital products.
      I’ve studied web development through Technigo bootcamp from Aug 2022 to Jan 2023,
      and currently studying frontend and backend development with a focus on web security at
      Jensen Yrkeshögskola in Stockholm, with graduation in June 2025.
      </IntroText>
    </IntroStyles>
  );
}
  
export default Intro;
  
