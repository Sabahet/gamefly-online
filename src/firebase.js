import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyA8eUiKKVp9ID-Pw-r13ZSOUp3GR2xnm0A",
  authDomain: "gamefly-online.firebaseapp.com",
  projectId: "gamefly-online",
  storageBucket: "gamefly-online.appspot.com",
  messagingSenderId: "231154165803",
  appId: "1:231154165803:web:998fe22bbadf09e191226e"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {auth};
  export default db;
