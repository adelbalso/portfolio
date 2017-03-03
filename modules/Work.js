import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    return (
      <div className="Work">
        <div className="content">

          <h1 className="workHeader">Some of my work</h1>

          <div className="workCards">
            <Link to="/foodworks">
              <div className="workCard">
                <div className="logo foodworksLogo" />
              </div>
            </Link>
          </div>

          <div className="workCards">
            <Link to="/farmigo">
              <div className="workCard">
                <div className="logo farmigoLogo" />
              </div>
            </Link>
          </div>

          <div className="workCards">
            <Link to="/amicus">
              <div className="workCard">
                <div className="logo amicusLogo" />
              </div>
            </Link>
          </div>

          { /* <h1 className="workHeader subHeader">Side Projects</h1>*/ }

        </div>

      </div>
    )
  }
})