import React, { Component } from 'react'
import styled from 'styled-components'
import profileImage from '../assets/profile.jpg'
import avatar from '../assets/Avatar.png'
const Template = styled.div`
  background-color: #ecdfcc;
  height: 100%;
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
  width: 40%;
  height: 100%;
  justify-content: center;
  color: #674636;
  .title {
    font-size: 70px;
    font-weight: 600;
    color: #180161;
  }
  .description {
    font-size: 30px;
    font-weight: 400;
    color: #982b1c;
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
    .education,
    .skills {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 17%;
      aspect-ratio: 1;
      border-radius: 50%;
      align-content: center;
      color: white;
      font-size: 20px;
      margin-right: 10px;
      transition: width 0.5s ease, font-size 0.5s ease;
      height: fit-content;
      cursor: pointer;
    }

    .resume:hover,
    .work:hover,
    .contact:hover,
    .education:hover,
    .skills:hover {
      width: 23%;
      font-size: 25px;
    }
    .resume {
      background-color: #a04747;
    }
    .work {
      background-color: #16325b;
    }
    .contact {
      background-color: #fabc3f;
    }
    .education {
      background-color: #fa812f;
    }
    .skills {
      background-color: #6a1e55;
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
            <div className="resume">Resume</div>
            <div className="skills">Skills</div>
            <div className="work">Work</div>
            <div className="education">Education</div>
            <div className="contact">Contact</div>
          </div>
        </Intro>
      </Template>
    )
  }
}

export default Profile
