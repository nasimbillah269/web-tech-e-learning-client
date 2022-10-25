// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAoPFAtkJJiyWeR2kVx43kXhtsOTKVtT0",
    authDomain: "web-tect-e-learning.firebaseapp.com",
    projectId: "web-tect-e-learning",
    storageBucket: "web-tect-e-learning.appspot.com",
    messagingSenderId: "593230724844",
    appId: "1:593230724844:web:4fac03b4bf865c7286afc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;