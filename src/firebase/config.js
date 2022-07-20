// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKWQSu8RjQV3od_zw-09rdbZVQcFPssxA",
  authDomain: "my-firegram-30afa.firebaseapp.com",
  projectId: "my-firegram-30afa",
  storageBucket: "my-firegram-30afa.appspot.com",
  messagingSenderId: "115487977782",
  appId: "1:115487977782:web:a3147db553efdb25e24397"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const projectStorage  = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage,projectFirestore,timeStamp};
