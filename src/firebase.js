// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Latest imports
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// OLD imports
// import firebase from 'firebase';

// Config from Firebase APP
const firebaseConfig = {
    apiKey: "AIzaSyCbRD-1vHl8cNfG3h4GFLM8Kes8W85Znxw",
    authDomain: "linkedin-clone-2025.firebaseapp.com",
    projectId: "linkedin-clone-2025",
    storageBucket: "linkedin-clone-2025.firebasestorage.app",
    messagingSenderId: "250165332313",
    appId: "1:250165332313:web:386b67e7005971be256448",
    measurementId: "G-HRX6LB2MS8"
  };

// Connect to Firebase DB
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Get firestore DB
const db = firebaseApp.firestore();
// Access to authentication
const auth = firebase.auth();

export { db, auth };
