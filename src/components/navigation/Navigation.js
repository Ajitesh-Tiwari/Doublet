import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { connect } from 'react-redux';
import './styles.css';
import UserProfileCard from '../user-profile-card';

const Navigation = ({ isSignedIn }) => (
  <div className="navigation">
    <div>
      <UserProfileCard />
    </div>
    {isSignedIn ? <NavigationAuth /> : <NavigationNonAuth />}
  </div>
);

const NavigationAuth = () => (
  <ul className="list-group">
    <li class="list-group-item">
      <Link to={routes.LANDING}>About</Link>
    </li>
    <li class="list-group-item">
      <Link to={routes.HOME}>Home</Link>
    </li>
    <li class="list-group-item">
      <Link to={routes.ACCOUNT}>Account</Link>
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul className="list-group">
    <li class="list-group-item">
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
