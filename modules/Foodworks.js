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
                  <li>Frontend development - React + Stylus</li>
                </ul>
              </div>
            </div>

          </div>

          <div className="workShowcase">
            <div className="workContext">
              <p>I joined the small and scrappy Foodworks product team early. Our goal is to build a product roadmap that supports the company's mission of helping people start food businesses. I work closely with the CTO to build our product experiments, from definition to production code.</p>
              <p>Because we are small, our process is extremely lean. We study an opportunity, whiteboard the UX, then jump straight to code. Our approach is to learn fast and iterate on the fly.</p>
              <p><b>I design the UI as I build it.</b></p>
              <img src="/images/fwMark.svg" />
              <h2> Here is an example that sheds light on our approach to product:</h2>
            </div>

            <h1>The atomic unit of this product is <span className="calloutText">the food business</span>.</h1>
            <h2>How we <b>onboard food businesses</b> is key to building a healthy community.</h2>

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

            <h2>Having compiled the components of this atomic unit, we then <b>present the food business</b> in various ways across the product.</h2>

            <div className="workShowcaseImage makerCard">
              <img src="/images/fwMakerCard.jpg" />
            </div>
            <div className="workShowcaseDescription">The card, as displayed in the directory</div>
            <div className="workShowcaseImage makerProfile">
              <img src="/images/fwMakerProfile.jpg" />
            </div>
            <div className="workShowcaseDescription">The business profile page</div>          

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