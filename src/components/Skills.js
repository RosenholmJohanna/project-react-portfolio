/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
import React from 'react';
import styled from 'styled-components';
import { SectionHeading, Heading } from 'GlobalStyles';

export const Skills = () => {
  return (
    <Section>
      <SectionHeading>SKILLS</SectionHeading>
      <SkillsContainer>
        <div>
          <Heading>CODE</Heading>
          <p>HTML5</p>
          <p>CSS</p>
          <p>JavaScript ES6</p>
          <p>React</p>
          <p>Redux</p>
          <p>Node.js</p>
          <p>MongoDB</p>
          <p>MySQL</p>
        </div>

        <div>
          <Heading>TOOLBOX</Heading>
          <p>Git</p>
          <p>VS Code</p>
          <p>Google Cloud Platform</p>
          <p>Postman</p>
          <p>Figma</p>
          <p>Git Bash</p>
          <p>WIM</p>
        </div>

        <div>
          <Heading>MORE</Heading>
          <p>Agile methodology</p>
          <p>Mob-programming</p>
          <p>Pair-programming</p>
          <p>Project Management</p>
          <p>Database Management</p>
          <p>web security</p>
        </div>
      </SkillsContainer>
    </Section>
  );
};

export default Skills;

const Section = styled.section`
background-color:#001126;
color: white;
text-align: center;
align-items: center;
justify-content: center;
padding-bottom: 3%;

`
const SkillsContainer = styled.div`
margin-top: 7%;
margin-bottom: 7%;
text-align: center;
align-items: start;
justify-content: center;
font-size: 0.8rem;
display: grid;
grid-gap: 15px;
grid-template-columns: 1fr 1fr;
  

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: 10%;
    margin-right: 10%;
  }
`
