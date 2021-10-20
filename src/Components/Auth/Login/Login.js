import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { signInWithEmailAndPassword } from "firebase/auth";
import firebaseAuthInit from '../../../Firebase/firebase.init';
import { Link , useHistory , useLocation } from 'react-router-dom';
firebaseAuthInit();

const Login = () => {

    

    const {loginWithGoogle , setUser , auth, setIsLoading } = useAuth();

    //set email and password
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    //redirect url found
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.form || '/';

    //login USing google and redirect 

    const handleLoginWithGoogle = () => {

        loginWithGoogle()
        .then(result => {
            setUser(result.user);
            history.push(redirect_url);
            console.log(result.user);
        }).finally(
            () => {
                setIsLoading(false);
            }
        )
    }


    //get form email
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    //get form password
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    //login with email and password
    const handleLoginWithEmail = (e) => {

        e.preventDefault();

        console.log(email , password);

        signInWithEmailAndPassword(auth , email , password)
        .then( result => {
            console.log(result.user);
            setUser(result.user);
        })

    }

    

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="text-center">
                         <img src={'https://i.ibb.co/TKkZsvQ/download.webp'} className="img-fluid" alt="" />
                    </div>

                    <form onSubmit={handleLoginWithEmail} className="mt-3">
                        <input onBlur={handleEmail} type="text" className="form-control py-2" placeholder="Email" /> <br />
                        <input onBlur={handlePassword} type="text" className="form-control py-2" placeholder="Password" /> <br />
                        <input type="submit" value="Log In" className="form-control btn btn-danger py-2"  />
                    </form>
                    <div className="py-3">
                        <h3 className="text-warning text-center">OR</h3>
                    </div>
                    <div className="pb-3">
                        <button onClick={handleLoginWithGoogle} className="btn btn-warning w-100"> <i className="fab fa-google"></i> Log In With Google</button>
                    </div>
                    <div className="pt-3">
                        <Link to="/register">
                            <p className="text-danger fw-bold text-center">Want Create Account?</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;