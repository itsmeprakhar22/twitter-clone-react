// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFJ65mmhIO0JP_74AZ35PP_GK_DluNTL0",
  authDomain: "fwitter-1cee2.firebaseapp.com",
  projectId: "fwitter-1cee2",
  databaseURL: "https://fwitter-1cee2-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "fwitter-1cee2.appspot.com",
  messagingSenderId: "512273882311",
  appId: "1:512273882311:web:2e7714e52ba7b957cd32e2",
  measurementId: "G-ZP7T69R0GN"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export default db;