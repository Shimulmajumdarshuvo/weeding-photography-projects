// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9cS5hCY_zy5JymNfyJUyyFwS9qAzU5Zk",
    authDomain: "wedding-phographer-projects.firebaseapp.com",
    projectId: "wedding-phographer-projects",
    storageBucket: "wedding-phographer-projects.appspot.com",
    messagingSenderId: "829679971319",
    appId: "1:829679971319:web:7c3c9b1045871207249cf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;