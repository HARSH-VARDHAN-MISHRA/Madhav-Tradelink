import React from 'react'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import About from '../../components/About/About'

const AboutusPage = () => {
  return (
    <>
        <Breadcrumb title="About Us" middle={{ url: '', text: '' }} last='About Us' />
        <About/>

        <section className="wardrobe">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="underline-head">
                            <h3>Why Us </h3>
                            <span className="line"></span>
                        </div>
                        <p>The things that differentiate us from any other company in the market include:</p>
                        <ul>
                            <li>Commitment to high-quality products</li>
                            <li>Standardized packaging</li>
                            <li>Years of in-depth industrial expertise</li>
                            <li>Ethical business policies</li>
                            <li>Wide distribution network</li>
                            <li>Easy payment modes</li>
                        </ul>
                        
                    </div>
                    
                </div>
            </div>    
        </section>
    </>
  )
}

export default AboutusPage