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
import './styles.css';

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
        <div className="application">
          <Header />
          <div className="content row">
            <div className="left-content col-md-4 col-lg-3 col-xl-2">
              <Navigation />
            </div>
            <div className="right-content col-md-auto">
              <Route
                exact
                path={routes.LANDING}
                component={() => <LandingPage />}
              />
              {this.props.isSignedIn && (
                <Route
                  exact
                  path={routes.HOME}
                  component={() => <HomePage />}
                />
              )}
              {this.props.isSignedIn && (
                <Route
                  exact
                  path={routes.ACCOUNT}
                  component={() => <AccountPage />}
                />
              )}
            </div>
          </div>
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
