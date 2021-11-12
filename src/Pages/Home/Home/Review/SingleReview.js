import React from 'react';

const singleReview = ({ review }) => {
    const { email, rate, text } = review
    return (
        <div>
            <div>
                <div className="card text-white bg-dark mb-3" style={{ 'max-width': '18rem' }}>
                    <div className="card-header">Email: {email}</div>
                    <div className="card-body">
                        <h5 className="card-title">Rating: {rate}</h5>
                        <p className="card-text">Feed{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default singleReview;