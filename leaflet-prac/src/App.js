import React, { Component } from 'react'
import axios from 'axios'
import Map from './components/Map'
import './App.css';


 class App extends Component {
  state = {
    incidents: [],
  }
  render() {
    return (
      <div>
        <Map incidents={this.state.incidents}/>
      </div>
    )
  }
}

export default App
