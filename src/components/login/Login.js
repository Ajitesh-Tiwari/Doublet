import React, { Component } from 'react';
import firebase from '../../configuration/firebase';
import { connect } from 'react-redux';

class Login extends Component {
  onLoginClick = () => {
    this.props.isSignedIn
      ? firebase.auth().signOut()
      : firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };

  render() {
    return (
      <div>
        <button
          onClick={this.onLoginClick}
          type="button"
          className="btn btn-primary"
        >
          {this.props.isSignedIn ? 'SIGN OUT' : 'SIGN IN'}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.isSignedIn
  };
};

export default connect(mapStateToProps)(Login);
