import React from 'react';
import styled from 'styled-components';
import Expbackground from './assets/background.jpg'

const Container = styled.div`
  padding: 20px;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${Expbackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  
  h1 {
    margin-bottom: 20px;
    font-size: 24px;
  }
  
  p {
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 1.5;
  }
  
  a {
    display: inline-block;
    background-color: #B03052;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    margin-top: 20px;
  }
`;

const MobileApp = () => {
    return (
        <Container>
            <h1>Tarun's Portfolio</h1>
            <p>
                This site is optimized for larger screens.
                For the best experience, please visit on a desktop device.
            </p>
            <p>
                You can still access a simplified version of my resume below.
            </p>
            <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download="Tarun_Uppu_Resume.pdf">
                Download Resume
            </a>
        </Container>
    );
};

export default MobileApp;