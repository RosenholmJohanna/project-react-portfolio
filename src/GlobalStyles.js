/* eslint-disable linebreak-style */
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    font-family: 'montserrat';
a {
    text-decoration: none;
    color: black;
}
} `;

export const Project = styled.div`
`

export const Otherprojects = styled.div`
color:black;
`

export const Section = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
`

export const HeaderText = styled.div`
color: black;
max-width: 50%;
margin-top: 5%;

h1 {
    letter-spacing: 0.10rem;
    width: 100vw;
    margin-left: 7%;
    margin-bottom: 2%;
    font-size: 0.8rem;
    font-weight: 100;
}

h2 {
    font-display: flex;
    letter-spacing: 0.10rem;
    max-width: 50vw;
    font-weight: lighter;
    margin-left: 7%;
    font-size: 1.7rem;
}

h3 {
    font-display: flex;
    letter-spacing: 0.10rem;
    max-width: 50vw;
    font-weight: lighter;
    margin-left: 7%;
    font-size: 1rem;
}
`
export const SectionHeading = styled.h4`
color: black;
width: 100%;
display: inline-block;
/* max-width: fit-content; */
/* background-color:#acbdd3; */
font-family: 'Montserrat';
letter-spacing: 0.10rem;
font-size: 1.1rem;
padding: 0.5%;
/* box-shadow: #938690 0px 2px 4px, #544351 0px 2px 2px;  */
text-align: center;
`

export const Heading = styled.div`
font-family: 'Montserrat';
font-size: 1em;
letter-spacing: 0.01em;
//color: #5d80b6;
color: #2f8886;
margin-bottom: 2%;
font-weight: 550;
`
export const ProjectsWrapper = styled.div`
`

export default GlobalStyles;