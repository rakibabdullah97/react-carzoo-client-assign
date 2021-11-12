import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div class="mt-5 pt-5 pb-5 footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-xs-12 about-company">
                        <h2>Carzoo</h2>
                        <p class="pr-5 text-white-50">Where your dream Car Come true </p>
                    </div>
                    <div class="col-lg-3 col-xs-12 links">
                        <h4 class="mt-lg-0 mt-sm-3">Links</h4>
                        <ul class="m-0 p-0">
                            <li>- <a href="About">About us</a></li>
                            <li>- <a href="Brans">Brans</a></li>
                            <li>- <a href="Career">Career</a></li>
                            <li>- <a href="Association">Association</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-xs-12 location">
                        <h4 class="mt-lg-0 mt-sm-4">Location </h4>
                        <p>FrankFort German</p>
                        <p class="mb-0">(541) 754-3010</p>
                        <p>info@hsdf.com</p>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col copyright">
                        <p class=""><small class="text-white-50">© 2019. All Rights Reserved to Rakib Abdullah.</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;