import React from 'react'
import "./Hero.css"
import Header from './Header/Header'
import hero_image from "../assets/hero_image.png"
import image from "../assets/hero_image_back.png"
import Hearts from "../assets/heart.png"
import Calories from "../assets/calories.png"

const Hero = () => {
  return (
    <div className='hero'>
      <div className='left-h'>
        <Header />
        {/* the best add */}
        <div className="the-best-add">
          <div></div>
          <span>The best fitness club in the town</span>
        </div>
        {/* hero heading */}
        <div className='hero-text'>
          <div><span className='stroke-text'>Shape</span>
            <span> Your</span></div>
        </div>
        <div className='hero-text'><span>Ideal body</span>
        </div>
        <div> <span> IN HERE WE WILL HELP YOU TO SHAPE ANDBUILD YOUR IDEAL BODY ANDLIVE UP YOUR LIFETO FULLEST</span>
        </div>
        <div className="figure">
          <div>
            <span>+140</span>
            <span> expert coaches</span>
          </div>
          <div>
            <span>+900 </span>

            <span>members joind</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programe</span>
          </div>
          <div />
        </div>
        {/* <div className="figure">
          <div>
          <span>+140</span>
          <span> expert coaches</span>
          </div>
          <div>
            <span>+900 </span>
            
            <span>members joind</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programe</span>
          </div>
          <div/> */}

        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>

      </div>


      <div className='right-h'>
        <button className='btn'>Join Now</button>
        <div className="heart-rate">
          <img src={Hearts} alt="" />
          <span>Heart rate</span> 118 bpm<span></span>
        </div>
        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={image} alt="" className="hero-image-back" />
        {/* calories */}
        <div className="calories">
          <img src={Calories} alt="" />
          <div>
          <span>Calories Burned</span>
          <span>220 Kcal</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
