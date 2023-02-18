// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAZUAAAS_Vjk1fWj1gHnVAi-K3tjo4M1E",
  authDomain: "social-app-818ac.firebaseapp.com",
  projectId: "social-app-818ac",
  storageBucket: "social-app-818ac.appspot.com",
  messagingSenderId: "845611566640",
  appId: "1:845611566640:web:a3d3a23ff0c4890d9acff5",
  measurementId: "G-PVTC91XW5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;