import React, { useEffect } from 'react'
import DoorCategory from '../../components/DoorCategory/DoorCategory'
import KitchenCateHomePage from '../../components/KitchenCateHomePage/KitchenCateHomePage'
import Wardrobe from '../../components/Wardrobe/Wardrobe'
import Laminates from '../../components/Laminates/Laminates'
import Veneers from '../../components/Veneers/Veneers'
import Contact from '../../components/Contact/Contact'
import About from '../../components/About/About'
import './HomePage.css'

import b1 from './banner-1.jpg'
import b2 from './banner-2.jpg'
import b3 from './banner-3.jpg'
const HomePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])
  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={b1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={b2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={b3} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <About />
      <DoorCategory />
      <KitchenCateHomePage />
      <Wardrobe />
      <Laminates />
      <Veneers />
      <Contact />
    </>
  )
}

export default HomePage