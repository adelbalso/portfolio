import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="content Contact">
        <div className="contactList">
          <ul className="ContactOptions">
            <li className="contactOption">
              <a href='mailto:a.delbalso@gmail.com'>Email</a>
            </li>
            <li className="contactOption">
              <a target="__blank" href='http://www.twitter.com/a_delbalso'>Twitter</a>
            </li>
            <li className="contactOption">
              <a target="__blank" href='http://www.instagram.com/adelbalso'>Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
})