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
                  <li>UX/UI Design</li>
                  <li>User Research</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="workShowcase">

            <h1>The design team's top priority was finding ways to boost <span className="calloutText">average order value</span> (AOV).</h1>
            <p className="subWorkHeader">In other words, <b>how might we encourage our customers to spend more on their Farmigo groceries each week?</b></p>
            
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

            <div className="workContext workWrapupStatement">
              <h2>There are just some examples of the many tactics we employed to boost AOV.</h2>
              <p>All in all, we attempted about a dozen different tactics as part of the Design team's goal of boosting AOV.</p>
              <img src="/images/farmigoIcon.svg" />
            </div>

          </div>

          <Contact />

        </div>

      </div>
    )
  }
})