import React from 'react';
import './SellCar.css'
const SellCar = () => {
    return (
        <div className='container carSell-field'>
            <div className='row'>
                <div className='col-md-5 col-sm-12  p-4 my-5 '>
                    <h1>Sell or Part Exchange Your Car</h1>
                    <p>Get an instant, haggle-free offer. Guaranteed for 7 days. And we'll even pick it up if you like.</p>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" /> <button className='btn btn-success mx-2 p-s'>Get Offer</button>
                    </div>
                </div>
                <div className='col-md-7 '>
                    <img className='img-fluid' src='https://i.ibb.co/5cK6PyN/sell-my-car.png' alt='' />
                </div>
            </div>
        </div>
    );
};

export default SellCar;