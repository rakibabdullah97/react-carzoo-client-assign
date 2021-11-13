import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddProduct = () => {
    const [product, setProduct] = useState({})
    const [addSuccess, setAddSuccess] =useState(false)

    console.log(product)
    const handleName = e => {
        const newProduct = { ...product }
        newProduct.name = e.target.value;
        setProduct(newProduct)
    }
    const handlePrice = e => {
        const newProduct = { ...product }
        newProduct.price = e.target.value
        setProduct(newProduct)
    }
    const handleImage = e => {
        const newProduct = { ...product }
        newProduct.img = e.target.value
        setProduct(newProduct)
    }
    const handleOverview = e => {
        const newProduct = { ...product }
        newProduct.overview = e.target.value;
        setProduct(newProduct)
    }
    const handleInfo = e => {
        const newProduct = { ...product }
        newProduct.info = e.target.value;
        setProduct(newProduct)
    }

    const handleAddProduct = () => {
        console.log(product)
        fetch('https://stark-plains-85592.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setAddSuccess(true)
                    setProduct({})
                }
            })

    }
    return (
        <div>
            {addSuccess && <Alert severity="success">Product Added Successfully </Alert>}
            <h1 className='text-center'>Add A New Product</h1>
            <div>
                <div>
                    <div className="text-start shadow p-5" >
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Product Title</Form.Label>
                            <Form.Control onChange={handleName} type="text" placeholder="Product Title" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicDate">
                            <Form.Label>Price</Form.Label>
                            <Form.Control onChange={handlePrice} type="number" placeholder="Price" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicDate">
                            <Form.Label>Description</Form.Label>
                            <Form.Control onChange={handleOverview} type="text" placeholder="Description" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDate">
                            <Form.Label>Deal Info</Form.Label>
                            <Form.Control onChange={handleInfo} type="text" placeholder="Deal Info" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicDate">
                            <Form.Label>Deal Image</Form.Label>
                            <Form.Control onChange={handleImage} type="text" placeholder="Image URL" />
                        </Form.Group>
                        <button onClick={handleAddProduct} className='btn btn btn-danger'>Add Product</button>
                        <Link to='/home'>
                            <button className='btn btn btn-primary m-2'>Go Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;