// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWg9DIIoShS6-ydm9DYAKoaJa5CesnXYc",
  authDomain: "react-exam-38e11.firebaseapp.com",
  projectId: "react-exam-38e11",
  storageBucket: "react-exam-38e11.appspot.com",
  messagingSenderId: "262504088252",
  appId: "1:262504088252:web:4d514a7e9961a740fbc6b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)



export const SignUpMethodEmail = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password)
  };
 
  export const SignInMethodEmail = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password)
  };

  export const GoogleAuth = async () => {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider)
 };