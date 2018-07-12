import React, { Component } from 'react';
import Navigation from '../navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../header/Header';
import firebase from '../../configuration/firebase';
import { signIn, signOut } from '../../actions';
import { connect } from 'react-redux';
import * as routes from '../../constants/routes';
import LandingPage from '../landing-page';
import AccountPage from '../account-page';
import HomePage from '../home-page';

class Application extends Component {
  componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(
        user =>
          user
            ? this.props.onLoginComplete(user)
            : this.props.onLogoutComplete()
      );
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Navigation />
          <Route
            exact
            path={routes.LANDING}
            component={() => <LandingPage />}
          />
          {this.props.isSignedIn && (
            <Route exact path={routes.HOME} component={() => <HomePage />} />
          )}
          {this.props.isSignedIn && (
            <Route
              exact
              path={routes.ACCOUNT}
              component={() => <AccountPage />}
            />
          )}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.isSignedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoginComplete: user => dispatch(signIn(user)),
    onLogoutComplete: () => dispatch(signOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);
