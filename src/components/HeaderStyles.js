/* eslint-disable linebreak-style */
import styled from 'styled-components';

export const HeaderStyles = styled.header`
  width: 100vw;
  height: 50vh;
  position:relative;
  /* background-image: url('https://images.pexels.com/photos/2889494/pexels-photo-2889494.jpeg?auto=compress&cs=tinysrgb&w=1600');  */
  background-color:#00072D;
  background-size:cover;
  font-family: 'montserrat';
  display:cover;

 img {
  /* padding:2px; */
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
}

 }
`