import { SIGN_IN, SIGN_OUT } from '../constants/action-types';

export const signIn = userProfile => ({ type: SIGN_IN, payload: userProfile });
