import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD88idkYz84lplC8rGIjWWfGsRsq1pt1gg",
    authDomain: "mj-portfolio-4e6bc.firebaseapp.com",
    databaseURL: "https://mj-portfolio-4e6bc.firebaseio.com",
    projectId: "mj-portfolio-4e6bc",
    storageBucket: "mj-portfolio-4e6bc.appspot.com",
    messagingSenderId: "438759712407",
    appId: "1:438759712407:web:30d3aebefb5c95e37b2bd2",
    measurementId: "G-M53E6QEQRH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();