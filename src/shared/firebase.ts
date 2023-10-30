import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAYjJ-G3jPipBsnFF5yQH9LfHJ0cwFikDc",
  authDomain: "myauthenticate-d54f4.firebaseapp.com",
  databaseURL: "https://myauthenticate-d54f4.firebaseio.com",
  projectId: "myauthenticate-d54f4",
  storageBucket: "myauthenticate-d54f4.appspot.com",
  messagingSenderId: "823238400387",
  appId: "1:823238400387:web:cd48bfab7ec22c0d557eb6",
  measurementId: "G-M4TX4XQCXV"
};

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();

export default storage;

