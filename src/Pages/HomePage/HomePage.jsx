import React from 'react'
import DoorCategory from '../../components/DoorCategory/DoorCategory'
import KitchenCateHomePage from '../../components/KitchenCateHomePage/KitchenCateHomePage'
import Wardrobe from '../../components/Wardrobe/Wardrobe'
import Laminates from '../../components/Laminates/Laminates'
import Veneers from '../../components/Veneers/Veneers'
import Contact from '../../components/Contact/Contact'
import About from '../../components/About/About'

const HomePage = () => {
  return (
    <>
        <About/>
        <DoorCategory/>
        <KitchenCateHomePage />
        <Wardrobe/>
        <Laminates/>
        <Veneers/>
        <Contact/>
    </>
  )
}

export default HomePage