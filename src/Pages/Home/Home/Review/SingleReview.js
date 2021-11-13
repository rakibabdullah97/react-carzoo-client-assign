import React from 'react';
import Rating from 'react-rating';

const singleReview = ({ review }) => {
    const { email, rate, text } = review
    return (
        <div>
            <div>
                <div className="card text-light bg-success mb-3" style={{ 'maxWidth': '18rem' }}>
                    <div className="card-header">Email: {email}</div>
                    <div className="card-body">
                        <Rating
                            initialRating={rate}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            readonly
                        ></Rating>
                        <p className="card-text">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default singleReview;