import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
  // Redirect,
  // withRouter
} from 'react-router-dom'
import Login from '../components/Login'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Login} />
      </Router>
    )
  }
}
