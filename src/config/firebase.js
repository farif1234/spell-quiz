// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCjKq7j8M1XtI6-ioS1lrhYIbTbIHpNNbk",
    authDomain: "spellwell-40273.firebaseapp.com",
    projectId: "spellwell-40273",
    storageBucket: "spellwell-40273.appspot.com",
    messagingSenderId: "78864432666",
    appId: "1:78864432666:web:45816dfae227c9ef075ba3",
    measurementId: "G-VWQ8SBV52K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
