import React, {Component} from 'react'
import './links.css'
import Items from './items'

class Links extends Component {
  render () {
    return (
      <div className="links">
        <h4 className="links-h4">文档列表</h4>
        <Items />
      </div>
    )
  }
}

export default Links