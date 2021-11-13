import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])

    //data fetched from server
    useEffect(() => {
        fetch('https://stark-plains-85592.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <>
            {
                (products.length !== 0) ? <div className='container mb-5'>
                    <h1 className='text-center text-warning my-5 fw-bold'>Browse Our Latest Cars </h1>
                    <div className=' row row-cols-1 row-cols-md-3 g-2'>
                        {
                            products.slice(0,6).map(product=><Product
                            key={product._id}
                            product={product}
                            ></Product>)
                        }
                    </div>
                </div> : <div className='d-flex justify-content-center m-5 p-5'>
                    <Spinner animation='border' variant="danger" />
                </div>
            }
        </>
        </div>
    );
};

export default Products;