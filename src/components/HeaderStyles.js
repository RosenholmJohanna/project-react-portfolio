/* eslint-disable linebreak-style */
import styled from 'styled-components';

export const HeaderStyles = styled.header`
  width: 100vw;
  height: 50vh;
  position:relative;
  background-color:#001126;
  background-size:cover;
  font-family: 'montserrat';
  display:cover;

 img {
    height: 120px;
    width: 120px;
    border-radius: 50%; 
    border: 1px solid white;   
    position:absolute;
    top: 60%;
    right: 5%;
    background-color: white;
    object-fit: cover;

    @media (min-width: 768px) {
    right: 10%;
    height: 180px;
    width: 180px;
}}`