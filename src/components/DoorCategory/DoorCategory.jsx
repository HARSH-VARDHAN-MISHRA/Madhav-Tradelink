import React, { useEffect, useState } from 'react'
import './DoorCategory.css'
import LineHead from '../LineHead/LineHead'
import doorIcon from '../Assets/door-icon.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

const DoorCategory = () => {
    const [doorCategory,setDoorCate] = useState([]);
    const handleFetch = async()=>{
        try {
            const res = await axios.get('http://localhost:6519/api/v1/get-all-subcategory')
            // console.log(res.data.data)

            const filterDoorCate = res.data.data.filter((item)=> item.categoryName === "Doors");
            // console.log(filterDoorCate)
            setDoorCate(filterDoorCate)
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        handleFetch()
    },[])
    
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
                                <h4>{item.subCategoryName}</h4>
                            </Link>
                            <p>{item.subCategoryDesc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    </>
  )
}

export default DoorCategory