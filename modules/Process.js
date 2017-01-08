import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="content Process">
        <div className="processSteps">

          <div className="stepWrapper gatherContextWrapper activeStep">
            <div className="stepTitle">
              <div className="stepNumber">1</div>
              <h1 className="stepName">Gather Context</h1>
            </div>
            <div className="stepContent">
              <h2>Purpose: Lay the groundwork based on the project</h2>
              <ul className="processSteps">
                <li className="processStep">Meet the team</li>
                <li className="processStep">Identify key stakeholders in the product</li>
                <li className="processStep">Learn key goals/metrics of success</li>
                <li className="processStep">Identify relevant existing data to leverage into the project</li>
                <li className="processStep">Document core assumptions about current usage of the product</li>
                <li className="processStep">Create design plan addressing the unique aspects of the team and context</li>
              </ul>
            </div>
          </div>

          <div className="stepWrapper researchWrapper">
            <div className="stepTitle">
              <div className="stepNumber">2</div>
              <h1 className="stepName">Research</h1>
            </div>
            <div className="stepContent">
              <h2>Purpose: Understand the problem</h2>
              <ul className="processSteps">
                <li className="processStep">Meet the team</li>
                <li className="processStep">Identify key stakeholders in the product</li>
                <li className="processStep">Learn key goals/metrics of success</li>
                <li className="processStep">Identify relevant existing data to leverage into the project</li>
                <li className="processStep">Document core assumptions about current usage of the product</li>
                <li className="processStep">Create design plan addressing the unique aspects of the team and context</li>
              </ul>
            </div>
          </div>

          <div className="stepWrapper designWrapper">
            <div className="stepTitle">
              <div className="stepNumber">3</div>
              <h1 className="stepName">Design</h1>
            </div>
            <div className="stepContent">
              <h2>First, I lay the groundwork based on the project:</h2>
              <ul className="processSteps">
                <li className="processStep">Meet the team</li>
                <li className="processStep">Identify key stakeholders in the product</li>
                <li className="processStep">Learn key goals/metrics of success</li>
                <li className="processStep">Identify relevant existing data to leverage into the project</li>
                <li className="processStep">Document core assumptions about current usage of the product</li>
                <li className="processStep">Create design plan addressing the unique aspects of the team and context</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    )
  }
})