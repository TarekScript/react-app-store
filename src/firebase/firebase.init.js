// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_p85-_ncBsMtvXQPe7Edb1YyztjXcpos",
    authDomain: "react-app-store-9ead5.firebaseapp.com",
    projectId: "react-app-store-9ead5",
    storageBucket: "react-app-store-9ead5.firebasestorage.app",
    messagingSenderId: "849541610616",
    appId: "1:849541610616:web:674ab1430ae1cae89c018d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);