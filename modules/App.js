import React from 'react'
import { Link } from 'react-router'
import Home from './Home'

export default React.createClass({
  render() {
    return (
      <div className="appWrapper">
        <div className="nav">
          <div className="brand">
            <div className="navLink"><Link to="/" activeClassName="active">Adrian Del Balso&#39;s Portfolio</Link></div>
          </div>
          <ul role="nav" className="navLinks">
            { /* <li className="navLink"><Link to="/about" activeClassName="active">About</Link></li> */}
            { /* <li className="navLink"><Link to="/process" activeClassName="active">Process</Link></li> */}
            { /* <li className="navLink"><Link to="/work" activeClassName="active">Work</Link></li> */}
            { /* <li className="navLink"><Link to="/contact" activeClassName="active">Contact</Link></li> */ }
          </ul>
        </div>

        {this.props.children || <Home/>}

      </div>
    )
  }
})
