import React from 'react';
import { Link } from 'react-router-dom';
import './banner.css'
const Banner = () => {
    return (
        <div className='banner-img'>
            <h1 className='text-warning text-center'>Carzoo</h1>
            <p className='text-light text-center'>Get Your dream Car</p>
            <div className="d-grid gap-2 justify-content-center">
                <Link to='/explore'>
                    <button className='btn btn-outline-warning'>Explore</button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;