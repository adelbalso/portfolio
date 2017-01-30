import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className="Work">

        <div className="workWrapper farmigoWork">
          <div className="coverWrapper">
            <div className="photoArea">
              <div className="coverPhotoWrapper">
                <div className="coverPhoto farmigoPhoto"></div>
              </div>
            </div>

            <div className="titleArea">
              <div className="titleAreaContent">
                <h1 className="workHeader">Farmigo</h1>
                <p className="secondary">Our mission was to create a food system that&#39;s better for everyone, from farmers to eaters. As a grocery service, the design team&#39;s challenge was to create a beautiful food experience that is enabled by the digital product.</p>

                <p className="workSubtitle">Director of Design <span className="secondary">|</span> 2014 - 2016 <span className="secondary">|</span> Brooklyn</p>
                <div className="dividerLine"></div>
                <ul>
                  <li>Design Management and Strategy</li>
                  <li>UX/UI Design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="workShowcase">
            <h1>The atomic unit of this product is <span className="calloutText">the food business</span>.</h1>
            <div className="workShowcaseImage makerCard"></div>
            <div className="workShowcaseDescription">The card, as displayed in the directory</div>
            <div className="workShowcaseImage makerProfile"></div>
            <div className="workShowcaseDescription">The business profile page</div>
          
            <h1>How we <span className="calloutText">onboard food businesses</span> is key to building a healthy community.</h1>
            <img className="workShowcaseImage" src="../images/fwOnboard1.jpg" />
            <p className="workShowcaseDescription">We created a simple, 3-step onboarding flow.</p>
            <img className="workShowcaseImage" src="../images/fwOnboardTags.gif" />
            <p className="workShowcaseDescription">Being discovered is key, so we push businesses to tag themselves with search keywords.</p>
            <img className="workShowcaseImage onboardAnimation" src="../images/onboardingAnimation.gif" />
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