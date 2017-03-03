import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className="Work WorkInner">

        <div className="workWrapper foodworksWork">
          <div className="coverWrapper">
            <div className="photoArea">
              <div className="coverPhotoWrapper">
                <div className="coverPhoto fwPhoto">
                  <div className="glassPane" />
                  <img src="/images/fwCover.jpg" />
                </div>
              </div>
            </div>

            <div className="titleArea">
              <div className="titleAreaContent">
                <h1 className="workHeader">Foodworks</h1>
                <p className="secondary">Foodworks is aiming to change the landscape of food from the ground up. The mission is to empower a community of food entrepreneurs to start and grow quality brands.</p>
                <a href="http://thefoodworks.com" target="__blank" className="workLink">thefoodworks.com</a>

                <p className="workSubtitle">Director of Product <span className="secondary">|</span> 2016 <span className="secondary">|</span> NYC</p>
                <div className="dividerLine"></div>
                <ul>
                  <li>Product Management and Strategy</li>
                  <li>UX/UI Design</li>
                  <li>Frontend development - React.js + Stylus</li>
                </ul>
              </div>
            </div>

          </div>

          <div className="workShowcase">
            <h1>The atomic unit of this product is <span className="calloutText">the food business</span>.</h1>
            <div className="workShowcaseImage makerCard">
              <img src="/images/fwMakerCard.jpg" />
            </div>
            <div className="workShowcaseDescription">The card, as displayed in the directory</div>
            <div className="workShowcaseImage makerProfile">
              <img src="/images/fwMakerProfile.jpg" />
            </div>
            <div className="workShowcaseDescription">The business profile page</div>
          
            <h1>How we <span className="calloutText">onboard food businesses</span> is key to building a healthy community.</h1>
            <div className="workShowcaseImage">
              <img className="workShowcaseImage" src="../images/fwOnboard1.jpg" />
            </div>
            <p className="workShowcaseDescription">We created a simple, 3-step onboarding flow.</p>
            <div className="workShowcaseImage">
              <img className="workShowcaseImage" src="../images/fwOnboardTags.gif" />
            </div>
            <p className="workShowcaseDescription">Being discovered is key, so we push businesses to tag themselves with search keywords.</p>
            <div className="workShowcaseImage">
              <img className="workShowcaseImage onboardAnimation" src="../images/onboardingAnimation.gif" />
            </div>
            <p className="workShowcaseDescription">Delightful animations - a tactic to combat dropoff.</p>

          </div>

          <section className="calloutSection contactMe">
            <div className="contactMeContent">
              <h1>Let's chat?</h1>
              <p>Thanks so much for browsing my work. If you liked it, I'd love to hear from you.</p>
              <a className="button" href="mailto:a.delbalso@gmail.com">Say hello</a>
            </div>
          </section>

        </div>

      </div>
    )
  }
})