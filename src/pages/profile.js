import React, { Component } from 'react'
import styled from 'styled-components'
import profileImage from '../assets/profile.jpg'
import avatar from '../assets/Avatar.png'
const Template = styled.div`
  //   background-color: #ecdfcc;
  height: 100vh;
  width: 100%;
  color: white;
  font-family: roboto;
  align-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  justify-content: center;
  color: #674636;
  .title {
    font-size: 5vw;
    font-weight: 600;
    color: white;
  }
  .description {
    font-size: 2.1vw;
    font-weight: 400;
    color: white;
  }
  .nav-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 18px;
    width: 100%;
    .resume,
    .work,
    .contact,
    .project,
    .skills {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 17%;
      aspect-ratio: 1;
      border-radius: 50%;
      align-content: center;
      color: white;
      font-size: 1.2vw;
      margin-right: calc(3% + 5px);
      transition: width 0.5s ease, font-size 0.5s ease, box-shadow 0.5s ease,
        margin-right 0.5s ease;
      height: fit-content;
      cursor: pointer;
      box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.2);
    }

    .resume:hover,
    .work:hover,
    .contact:hover,
    .project:hover,
    .skills:hover {
      //   width: 23%;
      font-size: 1.7vw;
      //   margin-right: 5px;
      box-shadow: 0 0 15px 5px rgba(183, 224, 255, 1) !important;
    }
    .resume {
      position: relative;
      a {
        text-decoration: none;
        color: white;
        opacity: 1;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
      }
      .download-icon {
        position: absolute;
        display:  none;
        font-size: 1.2vw;
      }
      &:hover{
        a {
          opacity: 0;
        }
        .download-icon {
          display: block;
        }
      }
    }
  }
`
const ImgBlock = styled.div`
  width: 40%;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100%;
  .flip-container {
    width: 70%;
    position: relative;
    aspect-ratio: 1;
    transition: transform 1s;
    transform-style: preserve-3d;
    &:hover {
      transform: rotateY(180deg);
    }
    .front,
    .back {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      backface-visibility: hidden;
      object-fit: cover;
    }
    .back {
      transform: rotateY(180deg);
      background-color: #d0b8a8;
    }
  }
`

class Profile extends Component {
  render() {
    const { scrollPage } = this.props
    return (
      <Template>
        <ImgBlock>
          <div className="flip-container">
            <img src={profileImage} className="front" />
            <img src={avatar} className="back" />
          </div>
        </ImgBlock>
        <Intro>
          <div className="title">Hi, I'm Tarun.</div>
          <div className="description">I build web applications</div>
          <div className="nav-list">
            <div className="resume">
              <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download="Tarun_Uppu_Resume.pdf" >Resume
              </a>
              <span className="download-icon">
                <i className="fas fa-download"></i>
              </span>
            </div>
            <div className="skills" onClick={() => scrollPage(2)}>
              Skills
            </div>
            <div className="work" onClick={() => scrollPage(3)}>
              Edu & Exp
            </div>
            <div className="project" onClick={() => scrollPage(4)}>
              Projects
            </div>
            <div className="contact" onClick={() => scrollPage(5)}>
              Contact
            </div>
          </div>
        </Intro>
      </Template>
    )
  }
}

export default Profile
