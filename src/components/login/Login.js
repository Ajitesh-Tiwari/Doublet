import React, { Component } from 'react';
import firebase from '../../configuration/firebase';

class Login extends Component {
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      if (user == null) {
        this.props.onLogoutComplete();
        return;
      }

      this.props.onLoginComplete(user);
    });
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  onLoginClick = () => {
    this.props.isSignedIn
      ? firebase.auth().signOut()
      : firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };

  render() {
    return (
      <button
        onClick={this.onLoginClick}
        type="button"
        className="btn btn-primary"
      >
        {this.props.isSignedIn ? 'SIGN OUT' : 'SIGN IN'}
      </button>
    );
  }
}

export default Login;
