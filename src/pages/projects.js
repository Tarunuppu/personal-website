import React, { Component } from 'react'
import styled from 'styled-components'
import Bullet from '../assets/bullet.png'
import Logo from '../assets/Logo.png'
import Updown from '../assets/updown.png'

const Template = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  &.tablet{
    flex-direction: column;
  }
  .description {
    padding: 0px 30px;
    height: 100%;
    width: 40%;
    color: white;
    align-content: center;
    &.tablet {
      width: 100%;
      height: 40%;
    }
    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 20px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
    .tagline{
      font-size: 20px;
    }
    ul {
      list-style: none;
      padding-left: 20px;
      li {
        position: relative;
        padding-left: 40px;
        margin: 30px 0px;
        font-size: 16px;
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
          height: 20px;
          background-image: url(${Bullet});
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
    }
  }
  .screenshots {
    height: 100%;
    padding: 30px 0px;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    position: relative;
    &.tablet {
      width: 100%;
      height: 60%;
    }
    img {
      height: 80%;
      max-width: 100%;
      border-radius: 10px;
    }
  }
`
export default class Projects extends Component {
  render() {
    const { isTablet } = this.props
    return (
      <>
        <Template className={isTablet ? 'tablet' : ''}>
          <div className={`description ${isTablet ? 'tablet' : ''}`}>
            <div className="title">
              <img src={Logo} />
              <h1>UpDown</h1>
            </div>
            <br />
            <div className='tagline'>Upload, Download and Done!</div>
            <div>
              <ul>
                <li>
                  Cloud-based file management system is built on a three-tier
                  architecture
                </li>
                <li>
                  It features a modern tech stack with React.js, Python Flask,
                  MySQL and AWS S3
                </li>
                <li>
                  The system includes user authentication, search functionality,
                  and efficient pagination
                </li>
                <li>
                  The interface is designed to be intuitive and user-friendly.
                </li>
                <li>
                  The solution is containerized with Docker for quick
                  deployment.
                </li>
              </ul>
            </div>
          </div>
          <div className={`screenshots ${isTablet ? 'tablet' : ''}`}>
            <img src={Updown} />
          </div>
        </Template>
      </>
    )
  }
}
