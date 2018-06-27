import React, { Component } from 'react';
import firebase from '../../configuration/firebase';

class Login extends Component {
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      this.props.onLoginComplete(user);
    });
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    return (
      <button
        onClick={this.props.onLoginClick}
        type="button"
        className="btn btn-primary"
      >
        {this.props.isSignedIn ? 'SIGN OUT' : 'SIGN IN'}
      </button>
    );
  }
}

export default Login;
