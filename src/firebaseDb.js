import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCa-HD1JTdDxeIq6DKsAgwn6TxbIQe6FOU",
    authDomain: "activity4firebaseapp.firebaseapp.com",
    projectId: "activity4firebaseapp",
    storageBucket: "activity4firebaseapp.appspot.com",
    messagingSenderId: "595728092433",
    appId: "1:595728092433:web:a04ae49a27ddc8836090b0",
    measurementId: "G-12069J2VE1"
  };

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
