import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyA7uFxKfRtXIvxJGxJg0Ek5JtKT6aEBVgM',
  authDomain: 'doublet-b3ed8.firebaseapp.com',
  databaseURL: 'https://doublet-b3ed8.firebaseio.com',
  projectId: 'doublet-b3ed8',
  storageBucket: 'doublet-b3ed8.appspot.com',
  messagingSenderId: '836237403449'
};
firebase.initializeApp(config);

export default firebase;
