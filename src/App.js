import logo from './logo.svg'
import React, { Component } from 'react'
import styled from 'styled-components'
import './App.css'
import Profile from './pages/profile'
import AboutMe from './pages/aboutMe'
import Skills from './pages/skills'
import ExpAndEdu from './pages/expAndEdu'

const Base = styled.div`
  height: 100vh;
  overflow: scroll;
  .page-1,
  .page-2,
  .page-3 {
    width: 100%;
    height: 100%;
    position: sticky;
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
`
class App extends Component {
  render() {
    return (
      <Base>
        <div className="page-1">
          <Profile />
        </div>
        <div className="page-2">
          <Skills />
        </div>
        <div className="page-3">
          <ExpAndEdu />
        </div>
      </Base>
    )
  }
}

export default App
