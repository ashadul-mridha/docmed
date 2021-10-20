import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider , onAuthStateChanged , signOut } from "firebase/auth";
import firebaseAuthInit from "../Firebase/firebase.init";
firebaseAuthInit();


const useFirebase = () => {


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const [user , setUser] = useState({});
    const [isLoading , setIsLoading] = useState(true);

    const loginWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth , googleProvider)
        
        
    }

    useEffect( () => {
        onAuthStateChanged(auth , (user) => {
            if(user){
                setUser(user);
            }else{
                setUser({});
            }
        })
        setIsLoading(false);
    }, []);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then( () => {
            setUser({});
        }).finally(
            () => {
                setIsLoading(false);
            }
        )
    }

    return {
        auth,
        user,
        setUser,
        loginWithGoogle,
        logOut,
        isLoading,
        setIsLoading
    }
}


export default useFirebase;