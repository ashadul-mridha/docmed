import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider , onAuthStateChanged , signOut } from "firebase/auth";
import firebaseAuthInit from "../Firebase/firebase.init";
firebaseAuthInit();


const useFirebase = () => {


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const [user , setUser] = useState({});
    const [isLoading , setIsLoading] = useState(false);

    const loginWithGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth , googleProvider)
        .then(result => {
            setUser(result.user);
            console.log(result.user);
        })
        setIsLoading(false);
    }

    useEffect( () => {
        setIsLoading(true);
        onAuthStateChanged(auth , (user) => {
            if(user){
                setUser(user);
            }else{
                setUser({});
            }
        })
        setIsLoading(false);
    },[]);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then( () => {
            setUser({});
        })
        setIsLoading(false);
    }

    return {
        auth,
        user,
        setUser,
        loginWithGoogle,
        logOut,
        isLoading
    }
}


export default useFirebase;