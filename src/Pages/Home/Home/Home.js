import React from 'react';
import Banner from '../Banner/Banner';
import Products from './Products/Products';
import Review from './Review/Review';
import SellCar from './SellCar/SellCar';
import Footer from './Sheared/Footer';
import Navigation from './Sheared/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <SellCar></SellCar>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;