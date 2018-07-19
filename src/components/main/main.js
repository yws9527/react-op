import React, { Component } from 'react'
import {Links} from './exports_main'
import './main.css'

class Main extends Component {

  componentDidMount () {
    console.log('main 组件完成')
  }

  render () {
    return (
      <div className="main">
        <Links />
      </div>
    )
  }
}

export default Main
