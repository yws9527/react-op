import React, { Component } from 'react';
import logo from '../../commons/images/logo.svg';
import './App.css';
import {getData2} from '../../api/api'

class App extends Component {

  async getData () {
    try {
      debugger
      const {data} = await getData2({ id: '3' })
      console.log(data)
    } catch(e) {
      console.error(e);
    }
  }

  componentDidMount () {
    this.getData()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
