import React, { Component } from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
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
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  .page-title {
    height: 60px;
    width: 60%;
    font-size: calc(1.375rem + 1.5vw);
    display: flex;
    align-items: end;
    justify-content: center;
    color: white;
    margin: 10px 0px;
  }
  
  .skills-container {
    width: 100%;
  }
  
  .skill-item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .skill-icon {
    width: 70%;
    aspect-ratio: auto;
    padding: 11%;
    transition: background-color 0.5s ease, box-shadow 0.5s ease,
      border-radius 0.5s ease, padding 0.5s ease;
    
    &:hover {
      padding: 10%;
      box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.2);
      border-radius: 10px;
      background-color: white;
    }
  }
`

class Skills extends Component {
  render() {
    const skillsData = [
      { name: 'Python', image: Python },
      { name: 'JavaScript', image: JavaScript },
      { name: 'C++', image: Cplusplus },
      { name: 'Flask', image: Flask },
      { name: 'UWSGI', image: Uwsgi },
      { name: 'AWS', image: AWS },
      { name: 'PHP', image: Php },
      { name: 'C', image: C },
      { name: 'Bootstrap', image: Bootstrap },
      { name: 'Kubernetes', image: K8s },
      { name: 'Git', image: Git },
      { name: 'React', image: ReactImage },
      { name: 'Node.js', image: Nodejs },
      { name: 'HTML', image: Html },
      { name: 'Laravel', image: Laravel },
      { name: 'CSS', image: Css },
      { name: 'Docker', image: Docker },
      { name: 'jQuery', image: Jquery },
      { name: 'MySQL', image: Mysql },
      { name: 'MongoDB', image: MongoDb },
    ];

    return (
      <Template>
        <div className="page-title">
          <div>Skills</div>
        </div>

        <div className="skills-container">
          <div className="container">
            <div className="row">
              {skillsData.map((skill, index) => (
                <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 skill-item">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="skill-icon"
                    title={skill.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Template>
    )
  }
}

export default Skills