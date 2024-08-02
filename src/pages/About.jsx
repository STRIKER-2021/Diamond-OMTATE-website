import React from 'react'
import './About.css';
import quality_image from "../images/quality_image.jpg"
import certificate from "../images/certficate.png"

export const About = () => {
  return (
    <div className='about'>
      <div className="navbar-container"></div>
      <div className="navbar-heading-container">
        About Us
      </div>
      <div className="about-us-content-container">
        Hello 
        </div>
        <div class="carousel">
        <div class="carousel-inner">
        <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked"/>
        <div class="carousel-item">
            <img src="https://th.bing.com/th/id/OIP.9A0eLGTAiKh6v2J1ue4TrwHaC1?w=341&h=133&c=7&r=0&o=5&dpr=1.4&pid=1.7"/>
        </div>
        <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden=""/>
        <div class="carousel-item">
            <img src="https://th.bing.com/th?id=OSK.HEROQLNOS4amMK8Cu_L_ef67j4BNU40no1NAtBkBGVRdUs8&w=384&h=228&c=1&rs=2&o=6&dpr=1.4&pid=SANGAM"/>
        </div>
        <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden=""/>
        <div class="carousel-item">
            <img src="#"/>
        </div>
        <label for="carousel-3" class="carousel-control prev control-1">‹</label>
        <label for="carousel-2" class="carousel-control next control-1">›</label>
        <label for="carousel-1" class="carousel-control prev control-2">‹</label>
        <label for="carousel-3" class="carousel-control next control-2">›</label>
        <label for="carousel-2" class="carousel-control prev control-3">‹</label>
        <label for="carousel-1" class="carousel-control next control-3">›</label>
        <ol class="carousel-indicators">
            <li>
                <label for="carousel-1" class="carousel-bullet">•</label>
            </li>
            <li>
                <label for="carousel-2" class="carousel-bullet">•</label>
            </li>
            <li>
                <label for="carousel-3" class="carousel-bullet">•</label>
            </li>
        </ol>
</div>
<div class="container">
    <h1 class="heading">our certfications</h1>
    <div class="box-container">

        <div class="box">
            <img src={certificate} alt=""/>   
        </div>

        <div class="box">
            <img src={certificate} alt=""/>
        </div>

        <div class="box">
            <img src={certificate} alt=""/>
        </div>

        <div class="box">
            <img src={certificate} alt=""/> 
        </div>

        <div class="box">
            <img src={certificate} alt=""/>
        </div>

        <div class="box">
            <img src={certificate} alt=""/>
        </div>
    </div>
    </div>

</div>
</div>
 )
}