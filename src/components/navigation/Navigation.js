import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../../constants/routes';
import { signIn, signOut } from '../../actions';
import { connect } from 'react-redux';

const Navigation = ({ isSignedIn }) => (
  <div>{isSignedIn ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={routes.LANDING}>About</Link>
    </li>
    <li>
      <Link to={routes.HOME}>Home</Link>
    </li>
    <li>
      <Link to={routes.ACCOUNT}>Account</Link>
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={routes.LANDING}>About</Link>
    </li>
  </ul>
);

const mapStateToProps = state => {
  return {
    isSignedIn: state.isSignedIn
  };
};

export default connect(mapStateToProps)(Navigation);
