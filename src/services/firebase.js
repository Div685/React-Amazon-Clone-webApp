import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBGmlq9lSw35VpW4TDUkMUZhYo3TynrTrc",
  authDomain: "clone-webapp.firebaseapp.com",
  databaseURL: "https://clone-webapp.firebaseio.com",
  projectId: "clone-webapp",
  storageBucket: "clone-webapp.appspot.com",
  messagingSenderId: "1052308401174",
  appId: "1:1052308401174:web:fda205ddaccc3149339937",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
