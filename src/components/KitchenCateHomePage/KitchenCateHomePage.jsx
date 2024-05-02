import React from 'react'
import './KitchenCateHomePage.css'
import LineHead from '../LineHead/LineHead'
import kitchenIcon from '../Assets/kitchen-icon.png'
import { Link } from 'react-router-dom'

const KitchenCateHomePage = () => {
    const kitchenCategory = [
        {
            id:1,
            categoryName:"L-Shape",
            desc:"L-shaped kitchen design ideas for a stylish and efficient design in your home's kitchen."
        },
        {
            id:2,
            categoryName:"U-Shape",
            desc:"The U-shaped kitchen (also called the C-shaped kitchen) is the perfect expression of the work triangle we hear so much about in kitchen design."
        },
        {
            id:3,
            categoryName:"Parallel",
            desc:"Parallel Kitchen Designs for Your Dream Modular Kitchen.Get a more spacious and modern kitchen which match up to the latest Décor."
        },
        {
            id:4,
            categoryName:"Straight Kitchen",
            desc:"Selected flush doors are first calibrated according to the client's ..."
        },
        {
            id:5,
            categoryName:"Island Kitchen",
            desc:"Expressing the warmth of Indian homes our wide range of classic ..."
        },
    ]
  return (
    <>
        <section className=' kitchenCate'>
            <div className="container my-5">
                <LineHead title="Types Of Kitchens" />
                <div className="grid-4">
                    {kitchenCategory && kitchenCategory.map((item,index)=>(
                        <Link className="single-kitch" key={index}>
                            <div className="head">
                                <h4>{item.categoryName}</h4>
                                <img src={kitchenIcon} alt="kitchen-icon" />
                            </div>
                            <p className='desc'>{item.desc}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default KitchenCateHomePage