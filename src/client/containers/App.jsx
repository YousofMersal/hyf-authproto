import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import LoginButton from '../components/LoginButton'
import Public from '../components/Public'
import Profile from '../components/Profile'
import { getProfileInfo, isLoggedIn } from '../api/apiCalls'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { isAuthenticated: false, user: {} }
  }

  componentDidMount() {
    isLoggedIn()
      .then(res => {
        res
          ? this.setState({
              isAuthenticated: true
            })
          : this.setState({
              isAuthenticated: false
            })
      })
      .then(() => {
        if (this.state.isAuthenticated) {
          getProfileInfo().then(res => this.setState({ user: res.data }))
        }
      })
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              {this.state.isAuthenticated ? (
                <Link to="/profile">Profile</Link>
              ) : null}
              <li>
                <Link to="/">Landing Page</Link>
              </li>
              <LoginButton isAuthenticated={this.state.isAuthenticated} />
            </ul>
          </nav>
          <Route exact path="/" component={Public} />
          <Route
            exact
            path="/profile"
            component={props => <Profile {...props} user={this.state.user} />}
          />
        </div>
      </Router>
    )
  }
}
