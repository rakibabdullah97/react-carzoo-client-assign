import React from 'react';
import { Link } from 'react-router-dom';

const ExploreProduct = ({ product }) => {
    const { name, img, info, price, _id, } = product
    return (
        <div>
            <div>
                <div className="card deal-card">
                    <img style={{ height: 250 }} src={img} className="card-img-top img-fluid img-responsive" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{info}</p>
                        <h5 className='text-danger'> $ {price}</h5>
                        <Link to={`./buyproducts/${_id}`}>
                            <button type="button" className="book-btn btn btn-warning">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreProduct;