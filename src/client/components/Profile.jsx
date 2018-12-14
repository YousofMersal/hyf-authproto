import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    if (Object.keys(this.props.user).length > 1) {
      return (
        <div className="userinfo">
          <p> Welcome back {this.props.user.name}!</p>
          <img src={this.props.user.avatar} alt="none available" />
        </div>
      )
    } else {
      return <h1>Please log in to see your profile information</h1>
    }
  }
}
