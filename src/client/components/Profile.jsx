import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    console.log(this.props.user)
    return (
      <div className="userinfo">
        <p> Welcome back {this.props.user.name}!</p>
        <img src={this.props.user.avatar} alt="none available" />
      </div>
    )
  }
}
