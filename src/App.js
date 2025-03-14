import logo from './logo.svg'
import React, { Component } from 'react'
import styled from 'styled-components'
import './App.css'
import Profile from './pages/profile'
import AboutMe from './pages/aboutMe'
import Skills from './pages/skills'
import ExpAndEdu from './pages/expAndEdu'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Expbackground from './assets/background.jpg'

const Base = styled.div`
  height: 100vh;
  overflow: scroll;
  background-image: url(${Expbackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .page-1,
  .page-2,
  .page-3,
  .page-4,
  .page-5 {
    width: 100%;
    height: 100%;
    // position: sticky;
    top: 0;
  }
  .page-1 {
    z-index: 1;
  }
  .page-2 {
    z-index: 2;
  }
  .page-3 {
    z-index: 3;
  }
  .page-4 {
    z-index: 4;
  }
  .page-5 {
    z-index: 5;
  }
`
class App extends Component {
  scrollPage = (page) => {
    let pageId = `page-${page}`
    let pageElement = document.getElementById(pageId)
    pageElement.scrollIntoView({ behavior: 'smooth' })
  }
  render() {
    return (
      <Base>
        <div id="page-1" className="page-1">
          <Profile scrollPage={this.scrollPage} />
        </div>
        <div id="page-2" className="page-2">
          <Skills />
        </div>
        <div id="page-3" className="page-3">
          <ExpAndEdu />
        </div>
        <div id="page-4" className="page-4">
          <Projects />
        </div>
        <div id="page-5" className="page-5">
          <Contact />
        </div>
      </Base>
    )
  }
}

export default App
