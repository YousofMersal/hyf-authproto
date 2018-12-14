import React, { Component } from 'react'

export default class LoginButton extends Component {
  render() {
    if (!this.props.isAuthenticated) {
      return (
        <li>
          <a href="http://localhost:9001/auth/github" className="loginbutton">
            login
          </a>
        </li>
      )
    } else {
      return (
        <li>
          <a href="http://localhost:9001/" className="loginbutton">
            logout
          </a>
        </li>
      )
    }
  }
}
