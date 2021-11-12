import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import SingleReview from '../Review/SingleReview';
import './Review.css'


const Review = () => {
    const [reviews, setReviews] = useState([])


    //data fetched from server
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='container review-field '>
            {
                (reviews.length !== 0) ? <div className='container mb-5'>
                    <h1 className='text-center text-warning my-5 fw-bold'>Check Our Customers Feedback</h1>
                    <div className=' row row-cols-1 row-cols-md-4 '>
                        {
                            reviews.map(review=><SingleReview
                            key={review.id}
                            review={review}
                            ></SingleReview> )
                        }
                    </div>
                </div> : <div className='d-flex justify-content-center m-5 p-5'>
                    <Spinner animation='border' variant="danger" />
                </div>
            }
        </div>
    );
};

export default Review;