import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBBqokzeuy0_HwfxB-HP1voYq7jvb08znk",
    authDomain: "expo--signin-firebase-fbfb6.firebaseapp.com",
    projectId: "expo--signin-firebase-fbfb6",
    storageBucket: "expo--signin-firebase-fbfb6.appspot.com",
    messagingSenderId: "144923866405",
    appId: "1:144923866405:web:edb88212812ce73bc396cc",
    measurementId: "G-5784PJX9Q4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);