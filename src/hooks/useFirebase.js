import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider , onAuthStateChanged , signOut } from "firebase/auth";
import firebaseAuthInit from "../Firebase/firebase.init";
firebaseAuthInit();


const useFirebase = () => {


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const [user , setUser] = useState({});

    const loginWithGoogle = () => {
        signInWithPopup(auth , googleProvider)
        .then(result => {
            setUser(result.user);
            console.log(result.user);
        })
    }

    useEffect( () => {
        onAuthStateChanged(auth , (user) => {
            if(user){
                setUser(user);
            }else{
                setUser({});
            }
        })
    },[]);

    const logOut = () => {
        signOut(auth)
        .then( () => {
            setUser({});
        })
    }

    return {
        user,
        loginWithGoogle,
        logOut
    }
}


export default useFirebase;