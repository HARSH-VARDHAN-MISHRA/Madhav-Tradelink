import React from 'react'
import './DoorCategory.css'
import LineHead from '../LineHead/LineHead'
import doorIcon from '../Assets/door-icon.png'
import { Link } from 'react-router-dom'


const DoorCategory = () => {

    const doorCategory = [
        {
            id:1,
            categoryName:"Solid Wood Panel Doors",
            desc:"We put white primer on moulded doors to enable them to retain paint .."
        },
        {
            id:2,
            categoryName:"Flush Doors",
            desc:"Expressing the warmth of Indian homes our wide range of classic ..."
        },
        {
            id:3,
            categoryName:"PROJECT DOORS",
            desc:"Our state of the art wood lamination department has helped customers ..."
        },
        {
            id:4,
            categoryName:"ENGINEERED WOOD",
            desc:"Selected flush doors are first calibrated according to the client's ..."
        },
        {
            id:5,
            categoryName:"WOOD LAMELLA DOORS",
            desc:"Expressing the warmth of Indian homes our wide range of classic ..."
        },
    ]
  return (
    <>
        <section className='doorCategory'>
            <div className="container">
                <LineHead title="Doors" />

                <div className="grid-4">
                    {doorCategory && doorCategory.map((item,index)=>(
                        <div className="single-door" key={index}>
                            <Link to='' className="head">
                                <img src={doorIcon} alt="door-icon" />
                                <h4>{item.categoryName}</h4>
                            </Link>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    </>
  )
}

export default DoorCategory