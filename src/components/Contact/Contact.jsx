import React from 'react'
import LineHead from '../LineHead/LineHead'
import './Contact.css'

const Contact = () => {
    return (
        <>
            <section id="contact" className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-info">
                                <LineHead title="Contact Us" />
                                <p>Have questions or feedback? Feel free to reach out to us.</p>
                                <ul className="list-unstyled">
                                    <li> Email: <a href="mailto:abc@gmail.com" target="_blank">abc@gmail.com</a></li>
                                    <li> Phone: <a href="tel:+919953091185">+91-9953091185</a> , <a href="tel:+919716628415">+91-9716628415</a></li>
                                    <li> Address: <a href="https://maps.app.goo.gl/ZKWJpaLf9GFd5SGe7" target="_blank">1/38, WHS Timber Market, Kirti Nagar, Delhi -110015</a></li>
                                </ul>
                                <div className="social-icons">
                                    <a href="#" ><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" ><i className="fab fa-twitter"></i></a>
                                    <a href="#" ><i className="fab fa-instagram"></i></a>
                                    <a href="https://api.whatsapp.com/send?phone=919953091185" target="_blank" ><i className="fab fa-whatsapp"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-form">
                                <form>
                                    <div className="form-group">
                                        <input type="text"  id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email"  id="email" placeholder="Your Email" required />
                                    </div>
                                    <div className="form-group">
                                        <textarea  id="message" rows="5" placeholder="Your Message" required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-12 mt-5">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.7596364818637!2d77.1295738749569!3d28.636965183880445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d033df49cd0c1%3A0x41feaa690bdeeba9!2sMadhav%20Tradelink!5e0!3m2!1sen!2sin!4v1714646482841!5m2!1sen!2sin" width="100%" height="450" style={{border:"none"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Contact