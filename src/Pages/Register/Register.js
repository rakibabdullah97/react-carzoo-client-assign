import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link ,useHistory} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../Home/Home/Sheared/Navigation';

const Register = () => {
    const { user, registerUser, isLoading,authError } = useAuth()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("")
    const history = useHistory()

    //email and password handler starts
    const handleName = (e) => {
        setDisplayName(e.target.value)
    };
    const handleEmail = (e) => {
        setEmail(e.target.value)
    };
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleRegister = (e) => {
        registerUser(email, password,displayName,history)
        console.log(email,password,displayName)
        e.preventDefault()
    }


    return (
        <div>
            <Navigation></Navigation>
            {user?.email && <Alert
             variant='success' 
             severity="success">User Created successfully </Alert>}
            {authError && <Alert variant='danger' severity="danger">{authError} </Alert>}
            <div className="container p-5 d-flex justify-content-center ">
                {!isLoading && <div>
                    <h1 className='text-center'>Register Here</h1>
                    <div className="mb-3">
                        <label htmlFor="InputEmail1" className="form-label">Name</label>
                        <input onChange={handleName} style={{ width: "220px" }} type="name" className="form-control" id="InputName" aria-describedby="emailHelp" placeholder='Your Name' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputEmail1" className="form-label">Email address</label>
                        <input onChange={handleEmail} style={{ width: "220px" }} type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email' />
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="InputPassword" className="form-label">Password</label>
                        <input onChange={handlePassword} style={{ width: "220px" }} type="password" className="form-control " id="exampleInputPassword1" placeholder='Enter Your Password' />
                    </div>
                    <button onClick={handleRegister} type="submit" className="btn btn-info">Register</button>
                    <div className=''>
                        <p>Already Have An Account?</p><Link to='/login'>
                            <button type="submit" className="btn btn-primary">Log in</button>
                        </Link>
                    </div>
                </div>}
                {isLoading && <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}

            </div>
        </div>
    );
};

export default Register;