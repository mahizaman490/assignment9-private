// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALPnccBo4bK-rQgmGcrH3lr65F7hGQnEA",
  authDomain: "assignment9-with-firebase.firebaseapp.com",
  projectId: "assignment9-with-firebase",
  storageBucket: "assignment9-with-firebase.appspot.com",
  messagingSenderId: "606770628193",
  appId: "1:606770628193:web:7777ddb9f41e70a80c4c20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;