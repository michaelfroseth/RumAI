import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="grid-container">
                    <div className="column">
                        <img src="assets/logo.svg" width="261px" height="268px" alt="RüMLENDR" className="featured-img" />
                    </div>
                    <div className="column">
                        <ul className="menu-links">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">How To Get Involved</a>
                            </li>
                            <li>
                                <a href="#">Download Pitch Deck</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;