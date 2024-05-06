import React, { useEffect, useState } from 'react'
import './KitchenCateHomePage.css'
import LineHead from '../LineHead/LineHead'
import kitchenIcon from '../Assets/kitchen-icon.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

const KitchenCateHomePage = () => {
    const [kitchenCategory,setkitchenCategory] = useState([]);
    const handleFetch = async()=>{
        try {
            const res = await axios.get('http://localhost:6519/api/v1/get-all-subcategory')
            console.log(res.data.data)

            const filterKitchenCate = res.data.data.filter((item)=> item.categoryName === "Modular Kitchen");
            console.log(filterKitchenCate)
            setkitchenCategory(filterKitchenCate)
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
        <section className=' kitchenCate'>
            <div className="container my-5">
                <LineHead title="Types Of Kitchens" />
                <div className="grid-4">
                    {kitchenCategory && kitchenCategory.map((item,index)=>(
                        <Link className="single-kitch" key={index}>
                            <div className="head">
                                <h4>{item.subCategoryName}</h4>
                                <img src={kitchenIcon} alt="kitchen-icon" />
                            </div>
                            <p className='desc'>{item.subCategoryDesc}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default KitchenCateHomePage