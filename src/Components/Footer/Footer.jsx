import React from "react";
import './Footer.css'
import Footer_logo from '../Assets/logo.png'
import instagram_logo from '../Assets/instagram_icon.png'
import pinstar_logo from '../Assets/pintester_icon.png'
import whatsapp_logo from '../Assets/whatsapp_icon.png'


const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={Footer_logo} alt="" />
                <p>EMC Shop</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contect</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icon-container">
                    <img src={instagram_logo} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={pinstar_logo} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={whatsapp_logo} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Right Reserved.</p>
            </div>
        </div>
    )
}


export default Footer