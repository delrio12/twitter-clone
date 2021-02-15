import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBP-s2C4mY8LfhOEAxyf4LWDEKKWnZ5G5k",
    authDomain: "twitter-clone-55b33.firebaseapp.com",
    databaseURL: "https://twitter-clone-55b33.firebaseio.com",
    projectId: "twitter-clone-55b33",
    storageBucket: "twitter-clone-55b33.appspot.com",
    messagingSenderId: "552624724541",
    appId: "1:552624724541:web:93c08cfead1ed401afe854",
    measurementId: "G-RT25CEM99W"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;