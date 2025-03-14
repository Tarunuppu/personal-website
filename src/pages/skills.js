import React, { Component } from 'react'
import styled from 'styled-components'
import Html from '../assets/Html.png'
import Css from '../assets/Css.png'
import JavaScript from '../assets/JavaScript.png'
import Python from '../assets/Python.png'
import Php from '../assets/Php.png'
import Jquery from '../assets/Jquery.png'
import Bootstrap from '../assets/Bootstrap.png'
import ReactImage from '../assets/React.png'
import C from '../assets/C.png'
import Cplusplus from '../assets/Cplusplus.png'
import Flask from '../assets/Flask.png'
import Laravel from '../assets/Laravel.png'
import Nodejs from '../assets/Nodejs.png'
import Uwsgi from '../assets/Uwsgi.png'
import Docker from '../assets/Docker.png'
import K8s from '../assets/K8s.png'
import AWS from '../assets/AWS.png'
import Mysql from '../assets/Mysql.png'
import MongoDb from '../assets/MongoDb.png'
import Git from '../assets/Git.png'
import Expbackground from '../assets/background.jpg'

const Template = styled.div`
  //   background-color: #fcfaee;
  //   background-size: cover;
  //   background-position: center;
  //   background-repeat: no-repeat;
  //   background-image: url(${Expbackground});
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .page-title {
    height: 15%;
    width: 60%;
    font-size: 40px;
    display: flex;
    align-items: end;
    justify-content: center;
    font-family: cursive;
    border-bottom: 1px solid white;
    color: white;
    margin-bottom: 10px;
  }
  .skills {
    height: 80%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        width: 100px;
        max-height: 100px;
        margin: 25px;
        padding: 20px;
        transition: width 0.5s ease, max-height 0.5s ease,
          background-color 0.5s ease, box-shadow 0.5s ease,
          border-radius 0.5s ease, margin 0.5s ease;
        &:hover {
          width: 120px;
          max-height: 120px;
          box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          background-color: white;
          margin: 15px;
        }
      }
    }
  }
  .skills {
    width: 80%;
  }
`
class Skills extends Component {
  render() {
    return (
      <Template>
        <div className="page-title">
          <div>Skills</div>
        </div>
        <div className="skills">
          <div>
            <img src={Html} />
            <img src={Css} />
            <img src={JavaScript} />
            <img src={Python} />
            <img src={Php} />
            <img src={C} />
            <img src={Cplusplus} />
          </div>
          <div>
            <img src={Jquery} />
            <img src={Bootstrap} />
            <img src={ReactImage} />
            <img src={Nodejs} />
            <img src={Flask} />
            <img src={Laravel} />
          </div>
          <div>
            <img src={AWS} />
            <img src={Docker} />
            <img src={K8s} />
            <img src={Uwsgi} />
            <img src={Mysql} />
            <img src={MongoDb} />
            <img src={Git} />
          </div>
        </div>
      </Template>
    )
  }
}

export default Skills
