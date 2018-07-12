import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserProfileCard extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <img
            src={this.props.userProfile.photoURL}
            className="card-img-top"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.userProfile.displayName}</h5>
            <p className="card-text">{this.props.userProfile.email}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.isSignedIn,
    userProfile: state.userProfile
  };
};

export default connect(mapStateToProps)(UserProfileCard);
