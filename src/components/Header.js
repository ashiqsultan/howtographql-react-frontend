import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import { AUTH_TOKEN } from '../constants'


class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <div className="flex pa1 justify-between nowrap orange">
        <div className="flex flex-fixed black">
          <div className="fw7 mr1"><strong>Hacker News</strong></div>
          <Link to="/" className="ml1 no-underline black">Show All</Link>
          <div className="ml1">|</div>
          <Link to="/search" className="ml1 no-underline black">search</Link>

          <div className="ml1">|</div>
          {authToken && (
            <Link to="/create" className="ml1 no-underline black">Create New</Link>
          )}

          <div className="ml1">|</div>
          <div className="flex flex-fixed">
            {authToken ? (
              <div className="ml1 pointer black"
                onClick={() => {
                  localStorage.removeItem(AUTH_TOKEN)
                  this.props.history.push(`/`)
                }}>logout</div>
            ) : (
                <Link to="/login" className="ml1 no-underline black">Login</Link>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)