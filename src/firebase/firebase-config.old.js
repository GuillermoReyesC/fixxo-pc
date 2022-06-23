import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const firebaseConfig = {
    apiKey: "AIzaSyCVz80tSJypLsz0T___JzE0GSEpVH61j34",
    authDomain: "react-app-cursos-64004.firebaseapp.com",
    databaseURL: "https://react-app-cursos-64004-default-rtdb.firebaseio.com",
    projectId: "react-app-cursos-64004",
    storageBucket: "react-app-cursos-64004.appspot.com",
    messagingSenderId: "545644887195",
    appId: "1:545644887195:web:4a7c8fea8958c89f8eda3e"
  };

  const firebaseConfigTesting = {
    apiKey: "AIzaSyA1hAF4vypXYK0ccdlk_TZr7Z2rmpDVV1Q",
    authDomain: "sql-demos-6b0e3.firebaseapp.com",
    projectId: "sql-demos-6b0e3",
    storageBucket: "sql-demos-6b0e3.appspot.com",
    messagingSenderId: "448444339951",
    appId: "1:448444339951:web:d7b3b7ff33a2d873dc2d1a",
    measurementId: "G-7NRRHEG848"
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