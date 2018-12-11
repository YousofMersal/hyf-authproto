import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
  // Redirect,
  // withRouter
} from 'react-router-dom'
import Login from '../components/Login'
import Public from '../components/Public'
import Protected from '../components/Protected'
import Register from '../components/Register'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Public} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/protected" component={Protected} />
          <Route exact path="/Register" component={Register} />
        </div>
      </Router>
    )
  }
}
