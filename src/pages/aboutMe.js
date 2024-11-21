import React, { Component } from 'react'
import styled from 'styled-components'

const Template = styled.div`
  width: 100%;
  height: 100%;
  background: radial-gradient(
    600px at 307px 1062px,
    rgba(29, 78, 216, 0.15),
    transparent 80%
  );
  .content {
    font-family: roboto;
    height: 100%;
    .first-container {
      font-size: 50px;
      font-weight: 600;
      background-color: #16423c;
      height: 18%;
      width: 80%;
      padding-left: 10%;
      padding-right: 10%;
      color: white;
      padding-bottom: 2%;
      align-content: end;
    }
    .second-container {
      height: 80%;
      width: 80%;
      padding-left: 10%;
      padding-right: 10%;
      .description {
        font-size: 24px;
        font-weight: 400;
      }
    }
  }
`
class AboutMe extends Component {
  render() {
    return (
      <Template>
        <div className="content">
          <div className="first-container">My Story</div>
          <div className="second-container">
            <div className="icon"></div>
            <div className="description">
              I am a IT software professional with experience in Docker and
              Kubernetes. I am currently working as a top coder at VMock. Prior
              to this role, I served as a software developer intern at Citrix,
              where I honed my expertise in coding and computer skills. I hold a
              degree in Electronics and Communications Engineering from the
              prestigious Indian Institute of Technology, Kharagpur.
            </div>
          </div>
        </div>
      </Template>
    )
  }
}

export default AboutMe
