import { React, Component } from 'react'
import styled from 'styled-components'
import IITKgp from '../assets/IITKgp.png'
import VMock from '../assets/VMock.png'
import Citrix from '../assets/Citrix.png'
import Expbackground from '../assets/background.jpg'

const Template = styled.div`
  height: 100vh;
  width: 100%;
  .template-background {
    height: 100%;
    width: 100%;
    display: flex;
    .education,
    .experience {
      position: relative;
      padding-top: 4%;
      padding-bottom: 7%;
      width: 50%;
      border-right: 2px solid #000;
      .title {
        display: flex;
        justify-content: center;
        height: 20%;
        font-size: calc(1.375rem + 1.5vw);
        color: white;
        margin: 0 25%;
      }
      .content {
        height: 80%;
        justify-content: space-around;
        align-items: center;
        margin-left: 50px;
        margin-right: 50px;
        display: flex;
        flex-direction: column;
        .container {
          width: 100%;
          height: 30%;
          position: relative;
          justify-content: start;
          align-items: center;
          display: flex;
          border-radius: 10px;
          padding: 10px;
          box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.2);
          transition: box-shadow 0.5s ease;
          .picture {
            height: 80%;
            aspect-ratio: 1;
            border-radius: 10px;
            margin: 10px;
          }
          .data {
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 5px;
            color: rgba(255, 255, 255, 0.5);
            .highlight {
              font-size: 20px;
              font-weight: 900;
            }
            p {
              margin-bottom: 0;
            }
            transition: color 0.5s ease;
          }
        }
      }
    }
    .experience {
      &.education{
        width: 100%;
        .title {
          align-items: center;
        }
      }
      .container:hover {
        box-shadow: 0 0 15px 5px rgba(211, 118, 118, 1) !important;
        .line {
          background: rgba(211, 118, 118);
        }
        .point {
          background: rgba(211, 118, 118);
        }
        .data {
          color: white;
        }
      }
    }
    .education {
      .container:hover {
        box-shadow: 0 0 15px 5px rgba(183, 224, 255, 1) !important;
        .line {
          background: #b7e0ff;
        }
        .point {
          background: #b7e0ff;
        }
        .data {
          color: white;
        }
      }
    }
    .point {
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #000;
      &.edu {
        right: -60px;
        transform: translateX(1px);
      }
      &.exp {
        left: -60px;
        transform: translateX(-1px);
      }
      transition: background-color 0.5s ease;
    }
    .line {
      position: absolute;
      width: 50px;
      background: #000;
      height: 1px;
      &.edu {
        right: -50px;
      }
      &.exp {
        left: -50px;
      }
      transition: background-color 0.5s ease;
    }
  }
`

class ExpAndEdu extends Component {
  render() {
    const { isTablet } = this.props
    return (
      <Template>
        <div className="template-background">
          {!isTablet &&
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
                  <div className="point edu"></div>
                  <div className="line edu"></div>
                </div>
              </div>
            </div>
          }
          <div className={`experience ${isTablet ? 'education' : ''}`}>
            <div className="title">{isTablet ? 'Exp & Edu' : 'Experience'}</div>
            <div className="content">
              <div className="container">
                <img className="picture" src={VMock} />
                <div className="data">
                  <p className="highlight">VMock {isTablet && "(Experience)"}</p>
                  <p>Software Developer / Full Stack Developer</p>
                  <p>Aug 2022 - Present</p>
                </div>
                {!isTablet && <>
                  <div className="point exp"></div>
                  <div className="line exp"></div>
                </>}
              </div>
              {isTablet && <div className="container">
                <img className="picture" src={IITKgp} />
                <div className="data">
                  <p className="highlight">IIT Kharagpur (Education)</p>
                  <p>B.Tech in Electronics and Electrical Communications</p>
                  <p>Jul 2018 - Apr 2022</p>
                </div>
              </div>}
              <div className="container">
                <img className="picture" src={Citrix} />
                <div className="data">
                  <p className="highlight">Citrix {isTablet && "(Experience)"}</p>
                  <p>Software Developer Intern</p>
                  <p>Summer Intern, 2021</p>
                </div>
                {!isTablet && <>
                  <div className="point exp"></div>
                  <div className="line exp"></div>
                </>}
              </div>
            </div>
          </div>
        </div>
      </Template>
    )
  }
}

export default ExpAndEdu
