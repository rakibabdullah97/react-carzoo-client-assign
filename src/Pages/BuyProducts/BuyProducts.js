import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Home/Home/Sheared/Footer';
import Navigation from '../Home/Home/Sheared/Navigation';

const BuyProducts = () => {
    const { productId } = useParams()
    const { user } = useAuth()

    const [buying, setBuying] = useState({})
    const [product, setProduct] = useState({})



    const handleAddress = e => {
        const userAddress = { ...buying }
        userAddress.address = e.target.value
        setBuying(userAddress)
    }
    const handleMobile = e => {
        const userNumber = { ...buying }
        userNumber.number = e.target.value
        setBuying(userNumber)
    }
    const handleBuying = e => {
        const newBuying = buying
        newBuying.name = user.displayName
        newBuying.email = user.email
        newBuying.status = "pending..."
        setBuying(newBuying)

        fetch('http://localhost:5000/buyProduct', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(buying)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('booking Successful')
                }
            })
        e.preventDefault()
    }



    // single product search by id
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    console.log(buying)


    return (
        <div>
            <Navigation></Navigation>
            <div className='container '>
                <div className='row m-3 '>
                    <div className='col-md-5'>
                        <div className="card deal-card">
                            <img style={{ height: 250 }} src={product?.img} className="card-img-top img-fluid img-responsive" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Name: {product?.name}</h5>
                                <p className="card-text">Info: {product?.info}</p>
                                <p className="card-text">Overview: {product?.overview}</p>
                                <h5 className='text-danger'>Price: $ {product?.price}</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <Form className='container my-3'>
                          <h4>Fill up the form to Buy Now</h4>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label> Name</Form.Label>
                                    <Form.Control type="Name" placeholder="Name" value={user?.displayName || ''} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control onChange={handleAddress} type="text" placeholder="Address" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Email </Form.Label>
                                <Form.Control placeholder="Email" type="email" value={user?.email || ''} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control onChange={handleMobile} placeholder="Mobile Number" type="number" />
                            </Form.Group>
                            <button onClick={handleBuying} className="btn btn-success">Buy Now</button>
                            {/* <Link to='/mybooking'>
                            <button className='btn btn-primary m-2'>My Bookings</button>
                        </Link> */}
                        </Form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BuyProducts;