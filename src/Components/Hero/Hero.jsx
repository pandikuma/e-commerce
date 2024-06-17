import React from "react";
import './Hero.css'
import hand from '../Assets/hand_icon.png'
import hero_img from '../Assets/hero_image.png'
import arrow_right from '../Assets/arrow.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>New Arrivels Only</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={hand} alt="" />
                    </div>
                    <p>Collection</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_right} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_img} alt="" />
            </div>
        </div>
    )
}



export default Hero