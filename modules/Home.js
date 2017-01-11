import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="Home">
        <div className="content">
          <div className="profilePhoto" />
          <div className="profileText">
            <h1>Hello! I&#39;m Adrian Del Balso.</h1>
            <h1>I&#39;m a <span className="calloutText">digital product designer</span> from Montreal living in Brooklyn.</h1>
            <h1>I am currently director of product at <a target="__blank" href="http://www.thefoodworks.com">the Foodworks.</a></h1>
          </div>
        </div>

        <div className="whatIDoSection">
          <div className="whatIDo">
            <div className="whatIDoContent content">
              <h1 className="whatIDoTitle">What I Do</h1>
              <ul>
                <li>
                  <h2 className="listTitle">Product strategy</h2>
                  <p>Working with customers and stakeholders to define the problem and opportunity landscape.</p>
                </li>
                <li>
                  <h2 className="listTitle">UX/UI Design</h2>
                  <p>Defining concepts and bringing them to life to test and build.</p>
                </li>
                <li>
                  <h2 className="listTitle">User Research</h2>
                  <p>User testing, surveying, data analysis, competitor analysis, etc</p>
                </li>
                <li>
                  <h2 className="listTitle">Frontend Development</h2>
                  <p>HTML, CSS, and just enough javascript to keep the trains moving.</p>
                </li>
                <li className="last">
                  <h2 className="last listTitle">Team Management</h2>
                  <p>Building and empowering amazing product teams.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
})