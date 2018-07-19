import './App.css';
import React, { Component } from 'react';
import {Header, Main, Footer} from '../exports'
import {getData2} from '../../api/api'
class App extends Component {

  async getData () {
    try {
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
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App
