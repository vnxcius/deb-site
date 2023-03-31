// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf__LV82-iqw8qjMEVoYMawxJ0PS23qm0",
  authDomain: "olie-art.firebaseapp.com",
  projectId: "olie-art",
  storageBucket: "olie-art.appspot.com",
  messagingSenderId: "727729107070",
  appId: "1:727729107070:web:dc090f82e10a028abee82f",
  measurementId: "G-YR4NFHSQEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);