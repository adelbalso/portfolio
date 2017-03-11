import React from 'react'
import Work from './Work'
import Contact from './Contact'

export default React.createClass({
  render() {
    return (
      <div className="Home">
        <div className="homeContent">
          <div className="profilePhoto">
          </div>
          <div className="profileText">
            <div className="profileTextContent">
              <h1>Hello! I&#39;m Adrian Del Balso.</h1>
              <h1>I make <span className="calloutText">digital products</span> in Brooklyn.</h1>
              <h1>I am currently director of product at <a target="__blank" href="http://www.thefoodworks.com">the Foodworks.</a></h1>
            </div>
          </div>
        </div>

        <div className="whatIDoSection">
          <div className="whatIDoContent content framedContent">
            <div>
              <h1 className="whatIDoTitle">What I do</h1>
              <ul>
                <li>
                  <h2 className="listTitle">Product Management</h2>
                  <p>Working with customers and stakeholders to define the problem and opportunity landscape.</p>
                </li>
                <li>
                  <h2 className="listTitle">UX/UI Design</h2>
                  <p>Defining concepts and bringing them to life to test and build.</p>
                </li>
                <li>
                  <h2 className="listTitle">User Research</h2>
                  <p>User testing, surveying, data analysis, competitor analysis, etc.</p>
                </li>
                <li>
                  <h2 className="listTitle">Frontend Development</h2>
                  <p>HTML, CSS, and just enough javascript to keep the trains moving.</p>
                  <p>(I built this site with <span className="react"><img src="../images/react.svg" /><b>React</b></span> 💪 )</p>
                </li>
                <li className="last">
                  <h2 className="last listTitle">Team Management</h2>
                  <p>Building and empowering amazing product teams.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Work />

        <Contact />

      </div>
    )
  }
})