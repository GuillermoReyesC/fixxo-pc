import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const firebaseConfig = {
  apiKey: "AIzaSyDjQDa_wW7OKCXo3m5ogrlrWCVHFdi_ZAE",
  authDomain: "nor-project-65f39.firebaseapp.com",
  databaseURL: "https://nor-project-65f39-default-rtdb.firebaseio.com",
  projectId: "nor-project-65f39",
  storageBucket: "nor-project-65f39.appspot.com",
  messagingSenderId: "584114213509",
  appId: "1:584114213509:web:f0f0069b355e5eca5c8fec",
  measurementId: "G-1TS767WXFH"
  };

  const firebaseConfigTesting = {
    apiKey: "AIzaSyDjQDa_wW7OKCXo3m5ogrlrWCVHFdi_ZAE",
  authDomain: "nor-project-65f39.firebaseapp.com",
  databaseURL: "https://nor-project-65f39-default-rtdb.firebaseio.com",
  projectId: "nor-project-65f39",
  storageBucket: "nor-project-65f39.appspot.com",
  messagingSenderId: "584114213509",
  appId: "1:584114213509:web:f0f0069b355e5eca5c8fec",
  measurementId: "G-1TS767WXFH"
  };

  if (process.env.NODE_ENV === 'test') {
    // Testing 
    firebase.initializeApp(firebaseConfigTesting);
  } else {
    // Prod/Dev
    firebase.initializeApp(firebaseConfig);
  }

  


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}