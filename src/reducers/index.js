import { SIGN_IN, SIGN_OUT } from '../constants/action-types';

const initialState = {
  isSignedIn: false,
  userProfile: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userProfile: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userProfile: null };
    default:
      return state;
  }
};
export default rootReducer;

/*
There are two key points for avoiding mutations in Redux:

Using concat(), slice(), and …spread for arrays
Using Object.assign() and …spread for objects
*/
