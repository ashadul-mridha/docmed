import { createUserWithEmailAndPassword , updateProfile  } from '@firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebaseAuthInit from '../../../Firebase/firebase.init';
import useAuth from '../../../hooks/useAuth';
firebaseAuthInit();

const Registration = () => {

    const {loginWithGoogle , auth , setUser , setIsLoading  } = useAuth();

    //set email and pw and name
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [name , setName] = useState('');

    //set error message 
    const [errorMessage , setErrorMessage] = useState('');

    //login with google
    const handleLoginWithGoogle = () => {
        loginWithGoogle()
        .catch( (error) => {
            setErrorMessage(error.message);
        }).finally(
            () => {
                setIsLoading(false);
            }
        )
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const registerWithEmail = (e) => {

        e.preventDefault();

        createUserWithEmailAndPassword(auth , email , password)
        .then( result => {
            setUser({});
            updateName();
        }).catch( (error) => {
            setErrorMessage(error.message);
        })

    }
    
    const updateName = () => {
        updateProfile(auth.currentUser , {
            displayName: name
        }).then( () => {

        }).catch( (error) => {
            setErrorMessage(error.message);
        })
    }

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="text-center">
                         <img src={'https://i.ibb.co/TKkZsvQ/download.webp'} className="img-fluid" alt="" />
                    </div>

                    <form onSubmit={registerWithEmail} className="mt-3">
                        <input onBlur={handleName} type="text" className="form-control py-2" placeholder="Name" /> <br />
                        <input onBlur={handleEmail} type="text" className="form-control py-2" placeholder="Email" /> <br />
                        <input onBlur={handlePassword} type="text" className="form-control py-2" placeholder="Password" /> <br />
                        <input type="submit" value="Register" className="form-control btn btn-danger py-2"  />
                    </form>
                    <div className="py-3">
                        <h3 className="text-warning text-center">OR</h3>
                    </div>
                    <div className="pb-3">
                        <button onClick={handleLoginWithGoogle} className="btn btn-warning w-100"> <i className="fab fa-google"></i> Log In With Google</button>
                    </div>
                    <div className="py-2">
                        <p className="text-danger">{errorMessage}</p>
                    </div>
                    <div className="pt-3">
                        <Link to="/login">
                             <p className="text-danger fw-bold text-center">Already Have Account?</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;