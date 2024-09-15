/* eslint-disable linebreak-style */
import styled from 'styled-components';

export const HeaderStyles = styled.header`
  width: 100vw;
  height: 50vh;
  position:relative;
  background-size:cover;
  font-family: 'montserrat';
  display:cover;

 img {
    height: 120px;
    width: 120px;
    border-radius: 50%; 
    border: 1px solid white;   
    position:absolute;
    top: 40%;
    right: 5%;
    background-color: #84c69b;
    object-fit: cover;

    @media (min-width: 768px) {
    right: 10%;
    height: 180px;
    width: 180px;
}}`

export const SubHeaderText = styled.h1`
  color: #2f8886;
  margin: 0;
`