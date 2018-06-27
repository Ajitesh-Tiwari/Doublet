import firebase from '../../configuration/firebase.js';
import Login from './Login';
import { connect } from 'react-redux';
import { signIn } from '../../actions';

const mapDispatchToProps = dispatch => {
  return {
    onLoginClick: () =>
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()),
    onLoginComplete: user => dispatch(signIn(user))
  };
};

const mapStateToProps = state => {
  return {
    isSignedIn: state.isSignedIn,
    userProfile: state.userProfile
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
