import React, { Component } from 'react'
// import userSignin from '../components/AJAX'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from '../components/Login'
import Public from '../components/Public'
import Protected from '../components/Protected'
import Register from '../components/Register'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Public page</Link>
              </li>
              <li>
                <a href={`http://localhost:${process.env.PORT}/auth/github`}>
                  login
                </a>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </nav>
          <Route exact path="/" component={Public} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/protected" component={Protected} />
          <Route exact path="/Register" component={Register} />
        </div>
      </Router>
    )
  }
}
