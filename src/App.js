import React, { Component } from 'react'
import JumbotronComponent from './components/JumbotronComponent'
import NavbarComponent from './components/NavbarComponent'

export class App extends Component {
  state = {
    title: 'CRUD REACT'
  }
  render() {
    const { title } = this.state;
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent title={title}/>
      </div>
    )
  }
}

export default App

