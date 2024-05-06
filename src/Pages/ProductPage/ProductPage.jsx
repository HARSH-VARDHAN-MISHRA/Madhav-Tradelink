import React, { useEffect, useState } from 'react'
import './ProductPage.css'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const ProductPage = () => {
  
  const {name} = useParams();
  console.log(name);

  const [product,setProduct] = useState([]);

  const handleEffect = async ()  =>{
    try {
      const res = await axios.get("http://localhost:6519/api/v1/get-all-product");
      console.log(res.data.data);
      const filterProduct = res.data.data.filter((item)=>item.productName === name);
      // console.log(filterProduct)

      setProduct(filterProduct);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
    handleEffect();

  }, [])

  // const productImages = [
  //   {
  //     img:"https://i.ibb.co/g3mTmh9/wardrobe-1-3e10f702d01bed5a6ae6.jpg"
  //   },
  //   {
  //     img:"http://localhost:3000/static/media/wardrobe-2.af5c353484823d30c2b1.jpeg"
  //   },
  //   {
  //     img:"https://i.ibb.co/wJkCt27/wardrobe-4-04c1b8ad888ce5f06dc8.jpg"
  //   },
  //   {
  //     img:"https://i.ibb.co/ydD7vd9/wardrobe-3-3bff2b4873cfd4f62745.jpg"
  //   },
  //   {
  //     img:"https://i.ibb.co/vj05JxG/wardrobe-2-af5c353484823d30c2b1.jpg"
  //   },
  //   {
  //     img:"https://i.ibb.co/g3mTmh9/wardrobe-1-3e10f702d01bed5a6ae6.jpg"
  //   },
  //   {
  //     img:"http://localhost:3000/static/media/wardrobe-2.af5c353484823d30c2b1.jpeg"
  //   },
  //   {
  //     img:"https://i.ibb.co/wJkCt27/wardrobe-4-04c1b8ad888ce5f06dc8.jpg"
  //   },
  //   {
  //     img:"https://i.ibb.co/ydD7vd9/wardrobe-3-3bff2b4873cfd4f62745.jpg"
  //   },
  //   {
  //     img:"https://i.ibb.co/vj05JxG/wardrobe-2-af5c353484823d30c2b1.jpg"
  //   },
  //   {
  //     img:"https://i.ibb.co/g3mTmh9/wardrobe-1-3e10f702d01bed5a6ae6.jpg"
  //   },
  //   {
  //     img:"http://localhost:3000/static/media/wardrobe-2.af5c353484823d30c2b1.jpeg"
  //   },
  //   {
  //     img:"https://i.ibb.co/wJkCt27/wardrobe-4-04c1b8ad888ce5f06dc8.jpg"
  //   },
  //   {
  //     img:"https://i.ibb.co/ydD7vd9/wardrobe-3-3bff2b4873cfd4f62745.jpg"
  //   },
  //   {
  //     img:"https://i.ibb.co/vj05JxG/wardrobe-2-af5c353484823d30c2b1.jpg"
  //   },

  // ]
  return (
    <>    
    {product && product.map((item,index)=>(
      <div key={index}>
        <Breadcrumb title={item.categoryName} middle={{url:'',text:''}}  last={item.productName} />
        <section className="product-page">
          <div className="container py-0 pb-4">

            <div className="row">
              <div className="col-md-8">
                <div className="underline-head">
                  <h3>{item.productName}</h3>
                  <span className="line"></span>
                </div>
                {item.productDesc.map((desc)=>(
                  <p key={index}>{desc}</p>
                ))}
                <div className="points">
                  <div className="head">{item.productPoints.heading}</div>
                  <ul>
                    {item.productPoints.points.map((point,poindex)=>(
                      <li key={poindex}> <i className="fa-solid fa-shuffle"></i> {point}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <img src={item.productImage[0]} alt={item.productName} width="100%"/>
              </div>
            </div>

            <div className="all-products">
                <div className="pro-grid">
                  {item.productImage && item.productImage.map((proimg,proindex)=>(
                    <img src={proimg} alt="product-image" width="100%" key={proindex}/>
                  ))}
                </div>
            </div>
          </div>

        </section>
      </div>
    ))}

    </>
  )
}

export default ProductPage