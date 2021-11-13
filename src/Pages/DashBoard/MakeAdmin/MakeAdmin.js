import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handleSubmit = e => {
        const user = { email }
        fetch('https://stark-plains-85592.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                    setEmail('')
                }
    
            })
        e.preventDefault()
    }
    return (
        <div >
            {success && <Alert variant='success' severity="success">Admin Added successfully</Alert>}
            <h1 className='text-center m-3 '>Add An Admin</h1>
            <div className='container d-flex justify-content-center my-5 py-5'>

                <div className='row my-4'>
                    <div className='col-md-5'>
                        <img className='img-fluid  w-100' src={'https://i.ibb.co/0D895KQ/215-2151411-back-office-admin-office-admin.png'} alt='' />
                    </div>
                    <div className='col-md-7 my-4'>
                        <div className="mb-3 col-md-6">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input onChange={handleEmail} required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;