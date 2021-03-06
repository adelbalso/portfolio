import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className="Work WorkInner">

        <div className="workWrapper amicusWork">
          <div className="coverWrapper">
            <div className="photoArea">
              
              <div className="coverPhotoWrapper">
                <div className="coverPhoto amicusPhoto">
                  <div className="glassPane" />
                  <img className="coverPhoto" src="../images/Amicus2.jpg" />
                </div>
              </div>

            </div>

            <div className="titleArea">
              <div className="titleAreaContent">
                <h1 className="workHeader">Amicus</h1>
                <p className="secondary">Our mission was to help political campaigns and non-profits turn their supporters into active fundraisers an advocates, via a call tool and direct mail tool.</p>

                <p className="workSubtitle">Lead Designer <span className="secondary">|</span> 2012 - 2014 <span className="secondary">|</span> NYC</p>
                <a target="__blank" href="http://www.amicushq.com">amicushq.com</a>
                <div className="dividerLine"></div>
                <ul>
                  <li>Design Management and Strategy</li>
                  <li>UX/UI Design</li>
                  <li>Frontend development</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="workShowcase">
            <h1>The Amicus call and direct mail tools offered interactions that stretched <span className="calloutText">beyond the web browser</span>.</h1>
            <div className="workShowcaseImage callToolVideo">
              <video src="https://zippy.gfycat.com/RipeElectricHind.mp4" autoPlay="autoplay" loop="true" />
            </div>
            <div className="workShowcaseDescription">The interface provides users with basic information about the prospect, a call script, and call actions. They dial in to the tool with their phones or directly through their computer, initiating an auto-dialing call session.</div>
            
            <div className="workShowcaseImage homepageVideo">
              <video src="https://giant.gfycat.com/JealousCompassionateKid.mp4" autoPlay="autoplay" loop="true" />
            </div>
            <div className="workShowcaseDescription">The Amicus homepage serves a single purpose - to generate quality leads. We appealed to basic human psychology with a large banner photograph and literal pointing to a prominent call to action, but we've also created a natural filter by requiring 4 fields in our signup form.</div>
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