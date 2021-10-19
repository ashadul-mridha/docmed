import React from 'react';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {

    const {loginWithGoogle , user} = useFirebase();

    console.log(user);

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="text-center">
                         <img src={'https://i.ibb.co/TKkZsvQ/download.webp'} className="img-fluid" alt="" />
                    </div>

                    <form className="mt-3">
                        <input type="text" className="form-control py-2" placeholder="Email" /> <br />
                        <input type="text" className="form-control py-2" placeholder="Password" /> <br />
                        <input type="submit" value="Log In" className="form-control btn btn-danger py-2"  />
                    </form>
                    <div className="py-3">
                        <h3 className="text-warning text-center">OR</h3>
                    </div>
                    <div className="pb-3">
                        <button onClick={loginWithGoogle} className="btn btn-warning w-100"> <i className="fab fa-google"></i> Log In With Google</button>
                    </div>
                    <div className="pt-3">
                        <p className="text-danger fw-bold text-center">Want Create Account?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;