// import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3AFj_79rqlqt0IZriWwxPqj6i8hETDuo",
  authDomain: "challenge-2123f.firebaseapp.com",
  projectId: "challenge-2123f",
  storageBucket: "challenge-2123f.appspot.com",
  messagingSenderId: "46712223784",
  appId: "1:46712223784:web:249b5c7a1ed2b19a109d1d",
  measurementId: "G-6DSTVCS1M3"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export {db, auth};