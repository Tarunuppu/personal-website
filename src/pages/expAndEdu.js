import { React, Component } from 'react'
import styled from 'styled-components'
import IITKgp from '../assets/IITKgp.png'
import VMock from '../assets/VMock.png'
import Citrix from '../assets/Citrix.png'

const Template = styled.div`
  background-color: #ffd3b6;
  height: 100%;
  width: 100%;
  display: flex;
  .education,
  .experience {
    padding-top: 4%;
    padding-bottom: 7%;
    width: 50%;
    border-right: 2px solid #000;
    .title {
      display: flex;
      justify-content: center;
      font-family: cursive;
      font-size: 40px;
      border: 1px solid #000;
      border-radius: 10px;
      margin: 0 25%;
    }
    .content {
      height: -webkit-fill-available;
      justify-content: center;
      align-items: center;
      margin-left: 50px;
      margin-right: 50px;
      display: flex;
      flex-direction: column;
      .container {
        width: 100%;
        justify-content: start;
        align-items: center;
        display: flex;
        border-radius: 10px;
        padding: 10px;
        .picture {
          width: 120px;
          height: 120px;
          border-radius: 10px;
          margin: 10px;
        }
        .data {
          padding: 10px;
          .highlight {
            font-size: 20px;
            font-weight: 900;
          }
        }
      }
      .container:hover {
        background-color: #698474;
        box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.7);
      }
    }
  }
  .experience {
    .container {
      &.one {
        position: relative;
        top: -100px;
      }
      &.two {
        position: relative;
        top: 100px;
      }
    }
  }
`

class ExpAndEdu extends Component {
  render() {
    return (
      <Template>
        <div className="education">
          <div className="title">Education</div>
          <div className="content">
            <div className="container">
              <img className="picture" src={IITKgp} />
              <div className="data">
                <p className="highlight">IIT Kharagpur</p>
                <p>B.Tech in Electronics and Electrical Communications</p>
                <p>Jul 2018 - Apr 2022</p>
              </div>
            </div>
          </div>
        </div>
        <div className="experience">
          <div className="title">Experience</div>
          <div className="content">
            <div className="container one">
              <img className="picture" src={VMock} />
              <div className="data">
                <p className="highlight">VMock</p>
                <p>Software Developer / Full Stack Developer</p>
                <p>Aug 2022 - Present</p>
              </div>
            </div>
            <div className="container two">
              <img className="picture" src={Citrix} />
              <div className="data">
                <p className="highlight">Citrix</p>
                <p>Software Developer Intern</p>
                <p>Summer Intern, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </Template>
    )
  }
}

export default ExpAndEdu
