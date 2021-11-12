import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { Alert } from 'react-bootstrap';
const Login = () => {
    const { logInUser, user, authError } = useAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const location = useLocation()
    const history = useHistory()
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleLogin = (e) => {
        logInUser(email, password,location,history);
        e.preventDefault()

    };
    return (
        <div className='container d-flex justify-content-center my-5 py-5'>
            <div>
                <h1 className='text-center m-3 '>Please log in to Proceed</h1>
                {user?.email && <Alert variant='success' severity="success">Log in successful</Alert>}
                {authError && <Alert variant='danger' severity="danger">{authError} </Alert>}
                <div className='row g-4  my-4'>
                    <div className='col-md-5'>

                        <img className='img-fluid' src={'https://i.ibb.co/ZNZZ1K2/depositphotos-126028014-stock-illustration-web-template-of-tablet-login.jpg'} alt='' />
                    </div>
                    <div className='col-md-5 my-4'>
                        <div className="mb-3 col-md-6">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input onChange={handleEmail} required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {/* <p> {error}</p> */}
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3 col-md-6 ">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input onChange={handlePassword} required type="password" className="form-control " id="exampleInputPassword1" />
                            {/* <p>{error}</p> */}
                        </div>
                        <button onClick={handleLogin} type="submit" className="btn btn-primary">Submit</button>
                        <p>New Here?</p><Link to='/register'>
                            <button type="submit" className="btn btn-info">Register Now</button>
                        </Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;