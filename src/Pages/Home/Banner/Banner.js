import React from 'react';
import { Link } from 'react-router-dom';
import './banner.css'
const Banner = () => {
    return (
        <div className='banner-img'>
            <h1 style={{fontSize:'60px'}} className='text-warning text-center'>Carzoo</h1>
            <h3 className='text-light text-center'>Get Your dream Car</h3>
            <div className="d-grid gap-2 justify-content-center">
                <Link to='/explore'>
                    <button className='btn btn-outline-warning'>Explore</button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;