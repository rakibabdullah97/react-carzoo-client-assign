import { Alert } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const Review = () => {
    const { user } = useAuth()
    const [review, setReview] = useState({})
    const [addSuccess, setAddSuccess] = useState(false)

    const handleText = e => {
        const newReview = { ...review }
        newReview.text = e.target.value
        setReview(newReview)

    }
    const handleRate = e => {
        const newReview = { ...review }
        newReview.rate = e.target.value
        setReview(newReview)

    }
    const handleSubmit = e => {
        const newReview = review
        newReview.email = user.email
        setReview(newReview)

        fetch('https://stark-plains-85592.herokuapp.com/userReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(review)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setAddSuccess(true)
                }
            })
        e.preventDefault()
    }
    return (
        <div className='container p-5 '>
            {addSuccess && <Alert severity="success">Review Added Successfully </Alert>}
            <h1 className='text-center'>FeedBack Us</h1>
            <div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input value={user?.email || ''} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Rate Us</label>
                    <input maxLength="5" onChange={handleRate} type="number" className="form-control" id="exampleFormControlInput1" placeholder="Rate 1 to 5" />

                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Your Review</label>
                    <textarea onChange={handleText} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button onClick={handleSubmit} className='btn btn-info'>Submit</button>
            </div>
        </div>
    );
};

export default Review;