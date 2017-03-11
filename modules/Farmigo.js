import React from 'react'
import Contact from './Contact'

export default React.createClass({
  render () {
    return (
      <div className="Work WorkInner">

        <div className="workWrapper farmigoWork">
          <div className="coverWrapper">
            <div className="photoArea">
              <div className="coverPhotoWrapper">
                <div className="glassPane" />
                <div className="coverPhoto farmigoPhoto">
                  <div className="glassPane" />
                  <img src="/images/farmigoCover.jpg" />
                </div>
              </div>
            </div>

            <div className="titleArea">
              <div className="titleAreaContent">
                <h1 className="workHeader">Farmigo</h1>
                <p className="secondary">Our mission was to create a food system that&#39;s better for everyone, from farmers to eaters. As a grocery service, the design team&#39;s challenge was to create a beautiful food experience that is enabled by the digital product.</p>

                <p className="workSubtitle">Director of Design <span className="secondary">|</span> 2014 - 2016 <span className="secondary">|</span> Brooklyn</p>
                <div className="dividerLine"></div>
                <ul>
                  <li>Design Management</li>
                  <li>Product Strategy</li>
                  { /* <li>UX/UI Design</li>
                  <li>User Research</li> */ } 
                </ul>
              </div>
            </div>
          </div>

          <div className="workShowcase">

            <div className="workContext">
              <p>As director of design, I was responsible for building out the design team, managing our process, and of course... designing! The design team covered the following functions of Farmigo's product organization:</p>
              <ul className="functions">
                <li className="column-2-1">
                  <h2 className="label">Defining product candidates</h2>
                  <p className="description">Observing our users to identify product needs, as well as defining inventive ideas</p>
                </li>
                <li className="column-2-1">
                  <h2 className="label">User research</h2>
                  <p className="description">Monitoring user behavior and collecting feedback on ongoing design projects</p>
                </li>
                <li className="column-2-1">
                  <h2 className="label">UX/UI design</h2>
                  <p className="description">Creating everything from wireframes to mockups to interactive prototypes</p>
                </li>
                <li className="column-2-1">
                  <h2 className="label">Prototyping</h2>
                  <p className="description">Testing prototypes to better inform the build process</p>
                </li>
              </ul>

              <h2> Here is an example of the design team's work:</h2>
            </div>

            <h1>One of the design team's top priorities was finding ways to boost <span className="calloutText">average order value</span>.</h1>
            <h2 className="">In other words, <b>how might we encourage our customers to spend more on their Farmigo groceries each week?</b></h2>
            <div className="subWorkHeader">
              <img src="/images/farmigoChart.svg" />
              <p>We identified over 20 tactics that could move that metric. In order to prioritize our efforts, we created a scoring criteria across multiple variables, which we used to build a backlog.</p>
              <p>The following are some of the tactics we tested and implemented:</p>
            </div>
            
            <h2><b>Tactic 1:</b> Gift with minimum purchase</h2>
            <div className="workShowcaseImage">
              <img src="/images/giftMin1.png" />
              <img src="/images/giftMin2.png" />
            </div>
            <div className="workShowcaseDescription">We monitored how likely our users were to increase their overall spend if we incentivized them to make a minimum purchase.</div>
            
            <h2><b>Tactic 2:</b> Volume discounts</h2>
            <div className="workShowcaseImage">
              <img src="/images/volume1.png" />
            </div>
            <div className="workShowcaseDescription">We offered bulk savings on items directly from the item cards in the marketplace to encourage purchasing higher quanitites of individual items.</div>

            <h2><b>Tactic 3:</b> Targeted product suggestions</h2>
            <div className="workShowcaseImage">
              <img src="/images/farmigoLanding.jpg" />
              <img src="/images/farmigoCross.jpg" />
            </div>
            <div className="workShowcaseDescription">We promoted targeted suggestions across the user journey, from where they land in the market through product pages and at cehckout.</div>

          </div>

          <section className="calloutSection contactMe">
            <div className="contactMeContent">
              <h1>Want to learn more?</h1>
              <p>If you're interested in working together, I'd be happy to shed more light on this work.</p>
              <a className="button" href="mailto:a.delbalso@gmail.com">Say hello</a>
            </div>
          </section>

        </div>

      </div>
    )
  }
})