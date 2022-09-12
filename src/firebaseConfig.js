import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBkTYrBXqKS9UJkDwdzsDt4VPBUXGJ-Pds",
    authDomain: "authorization-firebase-vue.firebaseapp.com",
    projectId: "authorization-firebase-vue",
    storageBucket: "authorization-firebase-vue.appspot.com",
    messagingSenderId: "445748757914",
    appId: "1:445748757914:web:f03407a78f4f7a8eb02623",
    measurementId: "G-ZDWL74JJNH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };