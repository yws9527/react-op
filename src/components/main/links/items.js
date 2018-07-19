import React, {Component} from 'react'
import './items.css'

class Items extends Component {
  render () {
    return (
      <div className="items">
        <ul className="links-ul">
          <li className="links-li">
            <div className="item-title">flex 弹性盒布局</div>
            <div className="item-links">链接链接链接</div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Items