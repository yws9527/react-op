import React, { Component } from 'react'
import './header.css'
import logo from '../../commons/images/logo.svg'

class Header extends Component {

  componentDidMount () {
    console.log('header 组件完成')
  }

  render () {
    return (
      <div className="header">
        <header className="App-header">
          <div className="header-title"><img src={logo} className="App-logo" alt="logo" /></div>
          <div className="header-title"><h1 className="App-h1">Welcome to React</h1></div>
        </header>
      </div>
    )
  }
}

export default Header
