

import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut ,GoogleAuthProvider} from "firebase/auth";

//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings


const firebaseConfig = {
    apiKey: "AIzaSyDFOKyRfuM40883VtcF-QDkPgsJLwmfBzk",
    authDomain: "inclass-59e08.firebaseapp.com",
    projectId: "inclass-59e08",
    storageBucket: "inclass-59e08.appspot.com",
    messagingSenderId: "673684559725",
    appId: "1:673684559725:web:d14fdf0d03795de3c56c64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// const db = app.firestore()
// console.log(db);

export const createUser = async (email, password, navigate) => {
    try {
        let userCredential = await createUserWithEmailAndPassword(auth, email, password)
        navigate("/")
        console.log(userCredential);
    } catch (err) {
        alert(err.message)
    }

}

export const signIn = async (email, password, navigate) => {
    try {
        let userCredential = await signInWithEmailAndPassword(auth, email, password)
        navigate("/")
        console.log(userCredential);
    } catch (err) {
        alert(err.message)
    }

}

export const googleResigter = async ()=>{
    try {
        let googlelog =  await GoogleAuthProvider();
        console.log(googlelog)
    }catch(err){
alert(err.message)
    }
}

export const logOut = () =>{
    signOut(auth)
    alert("logout")
}