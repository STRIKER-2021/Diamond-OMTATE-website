import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
import './Navbar.css';

export const Navbar = () => {

    const [css_value, setcssvalue] = useState("0.0")


    const listenScrollEvent = (event) => {
        setcssvalue(window.scrollY/125)
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
    }, []);
    

  return (
    <div className='navbar' style={{background: "linear-gradient(rgba(15, 38, 56, ".concat(css_value,'), rgba(15, 38, 56, ',css_value+0.1,'))')}}>
        <div className='logo' >
            <Link key="home" to="/">
                <img src={logo} alt="Logo" />
            </Link>
        </div>
        <div className='navigation-options'>
            <Link key="home" to="/">
                    Home
            </Link>
            <Link key="about" to="/about">
                    About Us
            </Link>
            <Link key="inventory" to="/inventory">
                    Inventory
            </Link>
            <Link key="contact" to="/contact">
                    Contact
            </Link>
        </div>
        <div className='navigation-contact-details'>
            9892888440 <br></br>
            naman2701@gmail.com
        </div>
    </div>
  )
}
