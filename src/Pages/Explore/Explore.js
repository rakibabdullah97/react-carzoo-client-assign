import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ExploreProduct from '../ExploreProducts/ExploreProduct';
import Footer from '../Home/Home/Sheared/Footer';
import Navigation from '../Home/Home/Sheared/Navigation';
import './Explore.css'

const Explore = () => {
    const [products, setProducts] = useState([])

    //data fetched from server
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <div>
                <img className='img-fluid' src='https://i.ibb.co/XLM7LRP/dom.jpg' alt='' />
            </div>

            {
                (products.length !== 0) ? <div className='container mb-5 cart'>
                    <h1 className='text-center text-warning my-5 fw-bold'>Browse Our Latest Cars </h1>
                    <div className=' row row-cols-1 row-cols-md-3 g-4'>
                        {
                            products.map(product => <ExploreProduct
                                key={product.id}
                                product={product}
                            ></ExploreProduct>)
                        }
                    </div>
                </div> : <div className='d-flex justify-content-center m-5 p-5'>
                    <Spinner animation='border' variant="danger" />
                </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default Explore;