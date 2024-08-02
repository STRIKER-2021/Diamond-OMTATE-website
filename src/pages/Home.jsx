import React,{ useState, useEffect } from 'react'
import './Home.css';
import quality_image from '../images/quality_image.jpg';
import objectives_icon from '../images/objectives_icon.png'
import quotation from '../images/quotation.png'
import templogo from '../images/temp_logo.png'

export const Home = () => {

  const [css_quality_value, setcssqualityvalue] = useState("0")
  const [css_keypoints_value, setcsskeypointsvalue] = useState("0")

  const listenScrollEvent = (event) => {
      if (window.scrollY<=700)
        setcssqualityvalue((window.scrollY-450)/8)
      if (window.scrollY<=1300)
        setcsskeypointsvalue(window.scrollY)
  }

  useEffect(() => {
      window.addEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <div className='home'>
      <div className='landing-section'>
        {/* <div className="tagline">Our Quality, <br/> Your Trust</div> */}
        <div className='tagline'>Shine Brighter <br/> With Our <br/> Diamonds</div>
      </div>
      <div className='non-landing-background'>
        <div className='comment-section'>
          <div className='heading'>
            Our Promise
          </div>
          <div className='comment-content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, 
            quod? Nesciunt inventore placeat voluptas ipsa laudantium molestiae 
            ipsam voluptatem error, deserunt esse fugiat aperiam totam officiis 
            delectus ab cum? Deserunt.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, 
            quod? Nesciunt inventore placeat voluptas ipsa laudantium molestiae 
            ipsam voluptatem error, deserunt esse fugiat aperiam totam officiis 
            delectus ab cum? Deserunt.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, 
            quod? Nesciunt inventore placeat voluptas ipsa laudantium molestiae 
            ipsam voluptatem error, deserunt esse fugiat aperiam totam officiis 
            delectus ab cum? Deserunt.
          </div>
        </div>
        <div className='quality-section' style={{boxShadow:"0px 0px ".concat( css_quality_value, "px black")}}>
          <div className='quality-section-text'>
            <div className='quality-section-text-heading'>
              Your Trust &<br/>
                Our focus on Quality 
            </div>
            <div className='quality-section-text-content'>
              Take a look at our diamonds
            </div>
            <div className='quality-section-text-button'>
              <button>Take me there</button>
            </div>
          </div>
          <div className='quality-section-image'>
            <img src={quality_image} alt="Quality image" />
          </div>
        </div>
        <div className='keypoints-section'>
          <div className='heading' style={{paddingTop:"15px"}}>
            Our Objectives
          </div>
          <div className='keypoints-content'>
            <div className='keypoints-content-point' style={{opacity: ((css_keypoints_value-900)/80)}}>
              <div className='keypoints-content-point-icon'>
                <img src={objectives_icon} alt="Bullet Icon" />
              </div>
              <div className='keypoints-content-point-heading'>
              <strong>LOREM IPSUM DOLOR SIT AMET</strong>
              </div>
              <div className='keypoints-content-point-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, 
                quod? Nesciunt inventore placeat voluptas ipsa laudantium molestiae 
                ipsam voluptatem error, deserunt esse fugiat aperiam totam officiis 
                delectus ab cum? Deserunt.
              </div>
            </div>
            <div className='keypoints-content-point' style={{opacity: ((css_keypoints_value-925)/80)}}>
              <div className='keypoints-content-point-icon'>
                <img src={objectives_icon} alt="Bullet Icon" />
              </div>
              <div className='keypoints-content-point-heading'>
              <strong>LOREM IPSUM DOLOR SIT AMET</strong>
              </div>
              <div className='keypoints-content-point-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, 
                quod? Nesciunt inventore placeat voluptas ipsa laudantium molestiae 
                ipsam voluptatem error, deserunt esse fugiat aperiam totam officiis 
                delectus ab cum? Deserunt.
              </div>
            </div>
            <div className='keypoints-content-point' style={{opacity: ((css_keypoints_value-950)/80)}}>
              <div className='keypoints-content-point-icon'>
                <img src={objectives_icon} alt="Bullet Icon" />
              </div>
              <div className='keypoints-content-point-heading'>
              <strong>LOREM IPSUM DOLOR SIT AMET</strong>
              </div>
              <div className='keypoints-content-point-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, 
                quod? Nesciunt inventore placeat voluptas ipsa laudantium molestiae 
                ipsam voluptatem error, deserunt esse fugiat aperiam totam officiis 
                delectus ab cum? Deserunt.
              </div>
            </div>
            <div className='keypoints-content-point'  style={{opacity: ((css_keypoints_value-975)/80)}}>
              <div className='keypoints-content-point-icon'>
                <img src={objectives_icon} alt="Bullet Icon" />
              </div>
              <div className='keypoints-content-point-heading'>
              <strong>LOREM IPSUM DOLOR SIT AMET</strong>
              </div>
              <div className='keypoints-content-point-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, 
                quod? Nesciunt inventore placeat voluptas ipsa laudantium molestiae 
                ipsam voluptatem error, deserunt esse fugiat aperiam totam officiis 
                delectus ab cum? Deserunt.
              </div>
            </div>
            <div className='keypoints-content-point' style={{opacity: ((css_keypoints_value-1100)/80)}}>
              <div className='keypoints-content-point-icon'>
                <img src={objectives_icon} alt="Bullet Icon" />
              </div>
              <div className='keypoints-content-point-heading'>
              <strong>LOREM IPSUM DOLOR SIT AMET</strong>
              </div>
              <div className='keypoints-content-point-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, 
                quod? Nesciunt inventore placeat voluptas ipsa laudantium molestiae 
                ipsam voluptatem error, deserunt esse fugiat aperiam totam officiis 
                delectus ab cum? Deserunt.
              </div>
            </div>
            <div className='keypoints-content-point' style={{opacity: ((css_keypoints_value-1125)/80)}}>
              <div className='keypoints-content-point-icon'>
                <img src={objectives_icon} alt="Bullet Icon" />
              </div>
              <div className='keypoints-content-point-heading'>
              <strong>LOREM IPSUM DOLOR SIT AMET</strong>
              </div>
              <div className='keypoints-content-point-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, 
                quod? Nesciunt inventore placeat voluptas ipsa laudantium molestiae 
                ipsam voluptatem error, deserunt esse fugiat aperiam totam officiis 
                delectus ab cum? Deserunt.
              </div>
            </div>
            <div className='keypoints-content-point' style={{opacity: ((css_keypoints_value-1150)/80)}}>
              <div className='keypoints-content-point-icon'>
                <img src={objectives_icon} alt="Bullet Icon" />
              </div>
              <div className='keypoints-content-point-heading'>
              <strong>LOREM IPSUM DOLOR SIT AMET</strong>
              </div>
              <div className='keypoints-content-point-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, 
                quod? Nesciunt inventore placeat voluptas ipsa laudantium molestiae 
                ipsam voluptatem error, deserunt esse fugiat aperiam totam officiis 
                delectus ab cum? Deserunt.
              </div>
            </div>
            <div className='keypoints-content-point' style={{opacity: ((css_keypoints_value-1175)/80)}}>
              <div className='keypoints-content-point-icon'>
                <img src={objectives_icon} alt="Bullet Icon" />
              </div>
              <div className='keypoints-content-point-heading'>
              <strong>LOREM IPSUM DOLOR SIT AMET</strong>
              </div>
              <div className='keypoints-content-point-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, 
                quod? Nesciunt inventore placeat voluptas ipsa laudantium molestiae 
                ipsam voluptatem error, deserunt esse fugiat aperiam totam officiis 
                delectus ab cum? Deserunt.
              </div>
            </div>
          </div>
        </div>
        <div className='testimonials-section'>
          <div className='heading'>
            Our Testimonials
          </div>
          <div className='comment-content'>
            Here are our consumers reviews they had while working with us.
          </div>
          <div className='testimonials-section-content'>
            <div className='testimonials-section-content-point'>
              <div className='testimonials-section-content-point-header'>
                <img className='testimonials-section-content-point-header-qoutes' src={quotation} alt="Quotes" />
                <img className='testimonials-section-content-point-header-logo' src={templogo} alt="Logo" />
              </div>
              <div className='testimonials-section-content-point-content'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, 
                quod? Nesciunt inventore placeat voluptas ipsa laudantium molestiae 
                ipsam voluptatem error, deserunt esse fugiat aperiam totam officiis 
                delectus ab cum? Deserunt.
              </div>
              <div className='testimonials-section-content-point-person'>
                <strong>Name <br/>
                Position</strong>
              </div>
            </div>
            <div className='testimonials-section-content-point'>
              <div className='testimonials-section-content-point-header'>
                <img className='testimonials-section-content-point-header-qoutes' src={quotation} alt="Quotes" />
                <img className='testimonials-section-content-point-header-logo' src={templogo} alt="Logo" />
              </div>
              <div className='testimonials-section-content-point-content'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, 
                quod? Nesciunt inventore placeat voluptas ipsa laudantium molestiae 
                ipsam voluptatem error, deserunt esse fugiat aperiam totam officiis 
                delectus ab cum? Deserunt.
              </div>
              <div className='testimonials-section-content-point-person'>
                <strong>Name <br/>
                Position</strong>
              </div>
            </div>
            <div className='testimonials-section-content-point'>
              <div className='testimonials-section-content-point-header'>
                <img className='testimonials-section-content-point-header-qoutes' src={quotation} alt="Quotes" />
                <img className='testimonials-section-content-point-header-logo' src={templogo} alt="Logo" />
              </div>
              <div className='testimonials-section-content-point-content'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, 
                quod? Nesciunt inventore placeat voluptas ipsa laudantium molestiae 
                ipsam voluptatem error, deserunt esse fugiat aperiam totam officiis 
                delectus ab cum? Deserunt.
              </div>
              <div className='testimonials-section-content-point-person'>
                <strong>Name <br/>
                Position</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
