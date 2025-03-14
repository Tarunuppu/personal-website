import React, { Component } from 'react'
import styled from 'styled-components'
import Bullet from '../assets/bullet.png'
import Logo from '../assets/Logo.png'
import Updown from '../assets/updown.png'

const Template = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  .description {
    padding: 0px 30px;
    height: 100%;
    width: 40%;
    color: white;
    align-content: center;
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
    ul {
      list-style: none;
      padding-left: 20px;
      li {
        position: relative;
        padding-left: 40px;
        margin: 30px 0px;
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
    height: calc(100% - 60px);
    padding: 30px 0px;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    position: relative;
    img {
      height: 80%;
      border-radius: 10px;
    }
  }
`
export default class Projects extends Component {
  render() {
    return (
      <>
        <Template>
          <div className="description">
            <div className="title">
              <img src={Logo} />
              <h1>UpDown</h1>
            </div>
            <br />
            <div>Upload, Download and Done!</div>
            <br />
            <br />
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
          <div className="screenshots">
            <img src={Updown} />
          </div>
        </Template>
      </>
    )
  }
}
