import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
 var fbconfig = {
    apiKey: "AIzaSyCebAvEl15Xi303sK9RHTXhEmFp4X92bqU",
    authDomain: "netninja-pubg.firebaseapp.com",
    databaseURL: "https://netninja-pubg.firebaseio.com",
    projectId: "netninja-pubg",
    storageBucket: "netninja-pubg.appspot.com",
    messagingSenderId: "969330039682"
  };
  firebase.initializeApp(fbconfig);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default fbconfig;