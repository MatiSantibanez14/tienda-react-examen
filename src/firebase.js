// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-I6nv3RcQlLvhWRzFTtDu03nJdAfShew",
  authDomain: "tienda-react-a3952.firebaseapp.com",
  projectId: "tienda-react-a3952",
  storageBucket: "tienda-react-a3952.firebasestorage.app",
  messagingSenderId: "512747063256",
  appId: "1:512747063256:web:22a41219f612cb9301d4ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);