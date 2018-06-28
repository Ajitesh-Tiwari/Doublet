import firebase from '../../configuration/firebase.js';
import Login from './Login';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions';

const mapDispatchToProps = dispatch => {
  return {
    onLoginComplete: user => dispatch(signIn(user)),
    onLogoutComplete: () => dispatch(signOut())
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
