import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
    // productImage: Array.from({ length: 4 }, () => ''),
    productImages: [],

  })

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleFetch = async () => {
    try {
      const res = await axios.get('https://vigaz-backend.onrender.com/api/v1/get-all-product');
      console.log(res.data.data)
      const product = res.data.data
      const fillterProduct = product.filter((item) => item._id === id)
      console.log(fillterProduct)

      setFillter(fillterProduct)
      setFormData({
        categoryName: fillterProduct[0].categoryName,
        subCategoryName: fillterProduct[0].subCategoryName,
        AgainSubCategoryName: fillterProduct[0].AgainSubCategoryName,
        productName: fillterProduct[0].productName,
        prodCategory: fillterProduct[0].prodCategory,
        prodImage: fillterProduct[0].prodImage,
        productName: fillterProduct[0].productName,
        productPoints: {
          heading: fillterProduct[0].productPoints ? fillterProduct[0].productPoints.heading : '',
          points: fillterProduct[0].productPoints ? fillterProduct[0].productPoints.points : [],
        },

      })
      const productImage = Array.isArray(fillterProduct[0].productImage) ? fillterProduct[0].productImage : [];
      setFormData(prevData => ({
        ...prevData,
        productImage: productImage,
      }));

    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Formdata", formData)
      const submitResponse = await axios.post(`https://vigaz-backend.onrender.com/api/v1/update-product/${id}`, formData);
      console.log(submitResponse)
      toast.success("Product Updated Successfully")
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
  useEffect(() => {
    // Fetch categories, subcategories, and inner subcategories
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

  // --- 
  const points = formData.productPoints.points;
  const handleImageChange = (index, event) => {
    const newImages = [...formData.productImage]; // Change productImages to productImage
    newImages[index] = event.target.value;
    setFormData({
      ...formData,
      productImage: newImages
    });
  };

  const handleAddInput = () => {
    setFormData({
      ...formData,
      productImage: [...formData.productImage, ''] // Change productImages to productImage
    });
  };

  const [newDescription, setNewDescription] = useState('');

  const handleDescriptionChange = (index, event) => {
    const updatedDescriptions = [...formData.productDescriptions];
    updatedDescriptions[index] = event.target.value;
    setFormData(prevData => ({
      ...prevData,
      productDescriptions: updatedDescriptions,
    }));
  };
  const handleAddDescription = () => {
    if (newDescription.trim() !== '') {
      setFormData(prevData => ({
        ...prevData,
        productDescriptions: [...prevData.productDescriptions, newDescription.trim()],
      }));
      setNewDescription(''); // Clear the new description input field after adding
    }
  };
  
  return (
    <>
      <ToastContainer />
      <section className="breadCmb">
        <div>
          <h2>Edit Products</h2>
          <ul>
            <li><a href="/">Home / </a></li>
            <li><a href="/all-products">Our Products / </a></li>
            <li>Edit Product</li>
          </ul>
        </div>
        <div className="btn1">

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
            
            <div>
              {/* Existing descriptions */}
              {formData.productDescriptions && formData.productDescriptions.map((description, index) => (
                <div key={index} className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={(event) => handleDescriptionChange(index, event)}
                    placeholder={`Description ${index + 1}`}
                    aria-label={`Product Description ${index + 1}`}
                  />
                </div>
              ))}

              {/* New description input */}
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  value={newDescription}
                  onChange={(event) => setNewDescription(event.target.value)}
                  placeholder="New Description"
                  aria-label="New Product Description"
                />
              </div>
              

              {/* Add Description button */}
              <button type="button" onClick={handleAddDescription}>Add Description</button>
            </div>


            {/* --- Points Heading ---  */}
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

            {/* Points Point -- */}
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
            <div className="col-md-12">
              <label htmlFor="productImages" className="form-label">Product Images</label>

              <div className="row">
                {/* Render existing images if formData.productImage is defined */}
                {Array.isArray(formData.productImage) && formData.productImage.map((image, index) => (
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

                {/* Render new image input fields */}
                {Array.from({ length: formData.newImageCount }, (_, newIndex) => (
                  <div key={formData.productImage.length + newIndex} className="col-md-4 mb-2">
                    <input
                      type="text"
                      className="form-control"
                      value={formData.newImages?.[newIndex] || ''}
                      onChange={(event) => handleNewImageChange(newIndex, event)}
                      placeholder={`New Image URL ${formData.productImage.length + newIndex + 1}`}
                      aria-label={`New Product Image ${formData.productImage.length + newIndex + 1}`}
                    />
                  </div>
                ))}
              </div>

              <div className="row">
                {/* Add Image button */}
                <div className="col-md-4 mb-2">
                  <button type="button" className="btn btn-primary" onClick={handleAddInput}>
                    Add Image
                  </button>
                </div>
              </div>
            </div>


            <div className="col-md-12 text-center">
              <input type="reset" className='btn btn-warning text-white' /> &nbsp;
              <input type="submit" className='btn btn-success' value="Add Product" />
            </div>

          </form>
        </div>
      </section>
    </>
  )
}

export default EditProduct