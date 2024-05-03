import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import logo from '../Assets/logo.png'

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="container py-4 pb-0">
          <div className="row">
            <div className="col-md-3">
              <Link to="/"><img src={logo} alt="logo" className='mb-2' /></Link>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="col-md-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                {/* <li><Link to="">Our Category</Link></li> */}
                <li><Link to="/contact-us">Contact Us</Link></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Our Category</h5>
              <ul className="list-unstyled">
                <li><Link to="/product-page">Doors</Link></li>
                <li><Link to="/product-page">Modulor Kitchen</Link></li>
                <li><Link to="/product-page">Decorative Surfaces</Link></li>
                <li><Link to="/wardrobes">Wardrobes</Link></li>
                <li><Link to="">Laminates</Link></li>
                <li><Link to="">Veneers</Link></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>Email: <a href="mailto:vigazwood@gmail.com" target="_blank">vigazwood@gmail.com</a></li>
                <li>Phone: 
                  <a href="tel:+919953091185">+91-9953091185</a> , <br />
                  <a href="tel:+919716628415">+91-9716628415</a>
                </li>
                <li>Address: <a href="https://maps.app.goo.gl/ZKWJpaLf9GFd5SGe7" target="_blank">1/38, WHS Timber Market, Kirti Nagar, Delhi -110015</a></li>
              </ul>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col copyright">
              <p className="text-center">Copyright © Vigaz 2024. Designed by <a target="_blank" href="https://www.digiindiasolutions.com/">DIGI India Solutions</a></p>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer