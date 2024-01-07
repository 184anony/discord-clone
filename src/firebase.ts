import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBLR5LnUmApy-eGxPPr9XUYQ-SzeJBKcxA",
    authDomain: "discord-clone-44864.firebaseapp.com",
    projectId: "discord-clone-44864",
    storageBucket: "discord-clone-44864.appspot.com",
    messagingSenderId: "714277333901",
    appId: "1:714277333901:web:5e1662672dab9cab61ebc4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
