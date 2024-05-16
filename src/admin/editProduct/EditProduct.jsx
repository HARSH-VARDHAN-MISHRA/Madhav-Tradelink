import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProduct = () => {
  const { id } = useParams()
  const [categories, setCategories] = useState([]);
  const [fillter, setFillter] = useState([]);

  const [subCategories, setSubCategories] = useState([]);
  const [innerSubCategories, setInnerSubCategories] = useState([]);
  const [formData, setFormData] = useState({
    categoryName: '',
    subCategoryName: '',
    AgainSubCategoryName: '',
    productName: '',
    productDescriptions: [],
    productPoints: {
      heading: '',
      points: [],
    },
    productImages: [],

  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleFetch = async () => {
    try {
      const res = await axios.get('https://vigaz-backend.onrender.com/api/v1/get-all-product');
      const product = res.data.data;
      const fillterProduct = product.filter((item) => item._id === id);
      setFillter(fillterProduct);
      
      const productData = fillterProduct[0];
      setFormData({
        categoryName: productData.categoryName,
        subCategoryName: productData.subCategoryName,
        AgainSubCategoryName: productData.AgainSubCategoryName,
        productName: productData.productName,
        productDescriptions: productData.productDesc || [],
        productPoints: {
          heading: productData.productPoints ? productData.productPoints.heading : '',
          points: productData.productPoints ? productData.productPoints.points : [],
        },
        productImages: Array.isArray(productData.productImage) ? productData.productImage : [],
      });
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // console.log(formData)
      const submitResponse = await axios.post(`http://localhost:6519/api/v1/update-product/${id}`, formData);
      toast.success("Product Updated Successfully")
      console.log(submitResponse)
      window.location.href = '/all-products'
    } catch (error) {
      toast.error(error.response.data.msg)
      console.log(error)
    }
  }

  const handlePointChange = (index, value) => {
    const updatedPoints = [...formData.productPoints.points];
    updatedPoints[index] = value;
    setFormData({
      ...formData,
      productPoints: {
        ...formData.productPoints,
        points: updatedPoints,
      },
    });
  };

  const handleDescriptionChange = (index, value) => {
    const updatedDescriptions = [...formData.productDescriptions];
    updatedDescriptions[index] = value;
    setFormData({
      ...formData,
      productDescriptions: updatedDescriptions,
    });
  };

  const handleAddDescription = () => {
    setFormData({
      ...formData,
      productDescriptions: [...formData.productDescriptions, '']
    });
  };

  const handleRemoveDescription = (index) => {
    const updatedDescriptions = [...formData.productDescriptions];
    updatedDescriptions.splice(index, 1);
    setFormData({
      ...formData,
      productDescriptions: updatedDescriptions,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, subCategoriesRes, innerSubCategoriesRes] = await Promise.all([
          axios.get('https://vigaz-backend.onrender.com/api/v1/get-all-category'),
          axios.get('https://vigaz-backend.onrender.com/api/v1/get-all-subcategory'),
          axios.get('https://vigaz-backend.onrender.com/api/v1/get-all-inner-subcategory')
        ]);
        setCategories(categoriesRes.data.data.map(item => item.categoryName));
        setSubCategories(subCategoriesRes.data.data.map(item => item.subCategoryName));
        setInnerSubCategories(innerSubCategoriesRes.data.data.map(item => item.AgainSubCategoryName));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    handleFetch();
  }, []);

  const points = formData.productPoints.points;
  const handleImageChange = (index, event) => {
    const newImages = [...formData.productImages];
    newImages[index] = event.target.value;
    setFormData({
      ...formData,
      productImages: newImages
    });
  };

  const handleAddInput = () => {
    setFormData({
      ...formData,
      productImages: [...formData.productImages, '']
    });
  };

  return (
    <>
      <ToastContainer />
      <section className="breadCmb">
        <div>
          <h2>Edit Products</h2>
          <ul>
            <li><Link to="/admin/dashboard">Home / </Link></li>
            <li><a href="/all-products">Our Products / </a></li>
            <li>Edit Product</li>
          </ul>
        </div>
      </section>

      <section className="forms">
        <div className="container">
          <form className="row" onSubmit={handleSubmit}>

            <div className="col-md-4">
              <label htmlFor="categoryName" className="form-label">Select Category</label>
              <select id="categoryName" onChange={handleChange} value={formData.categoryName} name='categoryName' className="form-select">
                <option value={formData.categoryName}>{formData.categoryName}</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="col-md-4">
              <label htmlFor="subCategoryName" className="form-label">Select Sub Category</label>
              <select id="subCategoryName" onChange={handleChange} value={formData.subCategoryName} name='subCategoryName' className="form-select">
                <option value={formData.subCategoryName}>{formData.subCategoryName}</option>
                {subCategories.map((subCategory, index) => (
                  <option key={index} value={subCategory}>{subCategory}</option>
                ))}
              </select>
            </div>

            <div className="col-md-4">
              <label htmlFor="AgainSubCategoryName" className="form-label">Select Inner Sub Category</label>
              <select id="AgainSubCategoryName" onChange={handleChange} value={formData.AgainSubCategoryName} name='AgainSubCategoryName' className="form-select">
                <option value={formData.AgainSubCategoryName}>{formData.AgainSubCategoryName}</option>
                {innerSubCategories.map((innerSubCategory, index) => (
                  <option key={index} value={innerSubCategory}>{innerSubCategory}</option>
                ))}
              </select>
            </div>

            <div className="col-md-12">
              <label htmlFor="productName" className="form-label">Product Name</label>
              <input type="text" className="form-control" value={formData.productName} name='productName' onChange={handleChange} id='productName' placeholder="Product Name" aria-label="Product Name" />
            </div>

            {/* Description */}
            <div className="col-md-12">
              <label htmlFor="productDescriptions" className="form-label">Product Descriptions</label>
              {formData.productDescriptions.map((description, index) => (
                <div key={index} className="row mb-2">
                  <div className="col-md-10">
                    <textarea
                      className="form-control"
                      value={description}
                      onChange={(e) => handleDescriptionChange(index, e.target.value)}
                      placeholder={`Description ${index + 1}`}
                      aria-label={`Product Description ${index + 1}`}
                    />
                  </div>
                  <div className="col-md-2">
                    <button type="button" className="btn btn-danger" onClick={() => handleRemoveDescription(index)}>Remove</button>
                  </div>
                </div>
              ))}
              <button type="button" className="btn btn-primary mb-2" onClick={handleAddDescription}>Add Description</button>
            </div>

            {/* Points Heading */}
            <div className="col-md-12">
              <label htmlFor="productPointsHeading" className="form-label">Product Points Heading</label>
              <input
                type="text"
                className="form-control"
                value={formData.productPoints.heading}
                name='heading'
                onChange={(e) => setFormData({
                  ...formData,
                  productPoints: {
                    ...formData.productPoints,
                    heading: e.target.value
                  }
                })}
                id='productPointsHeading'
                placeholder="Product Points Heading"
                aria-label="Product Points Heading"
              />
            </div>

            {/* Points */}
            <div className="col-md-12">
              <label htmlFor="productPoints" className="form-label">Product Points</label>
              {points.map((point, index) => (
                <div key={index} className="row mb-2">
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      value={point}
                      onChange={(e) => handlePointChange(index, e.target.value)}
                      placeholder={`Point ${index + 1}`}
                      aria-label={`Product Point ${index + 1}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Images */}
            <div className="col-md-12">
              <label htmlFor="productImages" className="form-label">Product Images</label>
              <div className="row">
                {formData.productImages.map((image, index) => (
                  <div key={index} className="col-md-4 mb-2">
                    <input
                      type="text"
                      className="form-control"
                      value={image}
                      onChange={(event) => handleImageChange(index, event)}
                      placeholder={`Image URL ${index + 1}`}
                      aria-label={`Product Image ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
              <button type="button" className="btn btn-primary" onClick={handleAddInput}>Add Image</button>
            </div>

            <div className="col-md-12 text-center">
              <input type="reset" className='btn btn-warning text-white' /> &nbsp;
              <input type="submit" className='btn btn-success' value="Update Product" />
            </div>

          </form>
        </div>
      </section>
    </>
  )
}

export default EditProduct
