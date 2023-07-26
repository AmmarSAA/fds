/*************************
* File Name: Footer.jsx  *
* Author: Ammar S.A.A    *
* Output: Footer         *
*************************/

import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <ul>
                            <i className="fa fa-utensils" />
                            <span>Foodies.</span>
                        </ul>
                        <div className="map">
                            <ul>
                                <i className="fa fa-map-marker" />
                                <span>
                                    5th Floor, A-118,Sangareddy, Hyderabad, Telangana - 502001
                                </span>
                            </ul>
                        </div>
                        <div className="mail">
                            <ul>
                                <i className="fas fa-inbox" />
                                <span>support@foodies.com</span>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>Foodies</h4>
                        <ul>
                            <li>
                                <a href="#" onClick={() => openAbout()}>about us</a>
                            </li>
                            <li>
                                <a href="#">Our services</a>
                            </li>
                            <li>
                                <a href="#">Privacy policy</a>
                            </li>
                            <li>
                                <a href="#">Payment policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Get help</h4>
                        <ul>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                            <li>
                                <a href="#">Delivery</a>
                            </li>
                            <li>
                                <a href="#">My orders</a>
                            </li>
                            <li>
                                <a href="#">Order Status</a>
                            </li>
                            <li>
                                <a href="#">Payment options</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Order Now</h4>
                        <ul>
                            <li>
                                <a href="/dishes">Biryani's</a>
                            </li>
                            <li>
                                <a href="/dishes">Restaurants</a>
                            </li>
                            <li>
                                <a href="/dishes">Starters</a>
                            </li>
                            <li>
                                <a href="/dishes">Fast food</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Follow us</h4>
                        <div className="social-links">
                            <a href="https://www.facebook.com/">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="https://twitter.com/login">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="https://www.instagram.com/">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href="https://www.linkedin.com/login">
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}