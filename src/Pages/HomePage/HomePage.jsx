import React, { useEffect } from 'react'
import DoorCategory from '../../components/DoorCategory/DoorCategory'
import KitchenCateHomePage from '../../components/KitchenCateHomePage/KitchenCateHomePage'
import Wardrobe from '../../components/Wardrobe/Wardrobe'
import Laminates from '../../components/Laminates/Laminates'
import Veneers from '../../components/Veneers/Veneers'
import Contact from '../../components/Contact/Contact'
import About from '../../components/About/About'
import './HomePage.css'
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
            <img src="https://img.freepik.com/free-photo/modern-kitchen-interior-white-colors_181624-58451.jpg?t=st=1714651938~exp=1714655538~hmac=6956b3bf9e01271829f0733e43bc4028aedcd1efed1a5eb7c91a059fd195dac8&w=996" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://img.freepik.com/premium-photo/modern-house-with-patio-entrance-wooden-deck-floor-3d-rendering_224530-2580.jpg?w=826" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://img.freepik.com/free-photo/modern-kitchen-interior-white-colors_181624-58451.jpg?t=st=1714651938~exp=1714655538~hmac=6956b3bf9e01271829f0733e43bc4028aedcd1efed1a5eb7c91a059fd195dac8&w=996" class="d-block w-100" alt="..." />
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