// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries Your web app's

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBR61GLDAQN9Mlg35kY3lZH7bXJALk0LK8",
    authDomain: "react-disney-plus-app-bbf2b.firebaseapp.com",
    projectId: "react-disney-plus-app-bbf2b",
    storageBucket: "react-disney-plus-app-bbf2b.appspot.com",
    messagingSenderId: "1034404572956",
    appId: "1:1034404572956:web:9acf800b2b8a182efe94d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;