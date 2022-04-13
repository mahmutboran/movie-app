

import { initializeApp } from "firebase/app";


import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings


const firebaseConfig = {
    apiKey: "AIzaSyBk-lqnXssXNNVVlY5QNH-MCzGxtW80NjI",
    authDomain: "moviea-6d09f.firebaseapp.com",
    projectId: "moviea-6d09f",
    storageBucket: "moviea-6d09f.appspot.com",
    messagingSenderId: "730911131460",
    appId: "1:730911131460:web:d0416a5ddb6a26436bb911"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);



export const createUser = async (email, password, navigate) => {
    try {
        let userCredential = await createUserWithEmailAndPassword(auth, email, password)
        navigate("/")
        console.log(userCredential);
    } catch (err) {
        alert(err.message)
    }

}

export const signIn = async (email, password, displayName,navigate) => {
    try {
        let userCredential = await signInWithEmailAndPassword(auth, email, password)
        await updateProfile(auth.user, {
            displayName: displayName,
          });
        navigate("/")
        console.log(userCredential);
    } catch (err) {
        alert(err.message)
    }

}




export const logOut = () =>{
    signOut(auth)
    alert("logout")
}
export const userObserver = (setUser) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // ...
      } else {
        // User is signed out
        setUser(false);
      }
    });
  };

  export const googleLogin = async (navigate) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
        // ...
      });

}