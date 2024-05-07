import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

const AdminInnerSubCatePage = () => {
    const [subCategory,setSubCategory] = useState([]);

    const [pageNumber, setPageNumber] = useState(0);
    const itemsPerPage = 2; // Change this value according to your preference

    const handleFetch = async ()=>{
        try {
            const res = await axios.get("https://vigaz-backend.onrender.com/api/v1/get-all-inner-subcategory");
            setSubCategory(res.data.data);
            // console.log(subCategory)
        } catch (error) {
            console.error(error)
        }
    }

    const hadndleDelete = async (id)=>{
        try {
            const res = await axios.delete(`https://vigaz-backend.onrender.com/api/v1/delete-inner-subcategory/${id}`);
            console.log(res.data)
            toast.success("SubCategory Deleted Successfully")
            handleFetch()
        } catch (error) {
            console.error(error)
            toast.error(error.response.data.message)
        }
    }

    useEffect(() => {
        handleFetch();
    }, [pageNumber]);

    const handlePageChange = ({ selected }) => {
        setPageNumber(selected);
    };
  return (
    <>
        <ToastContainer />
        <section className="breadCmb">
            <div>
                <h2> Our Inner Sub Category</h2>
                <ul>
                    <li><a href="/">Home / </a></li>
                    <li>Our Inner Sub Categories</li>
                </ul>
            </div>
            <div className="btn1">
                <Link to={'/create-inner-sub-category'} >Create Inner Sub Category </Link>
            </div>
        </section>

        <section className="tables">
            <div className="container">
                <div className="row">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Category Name</th>
                                <th scope="col">Sub Category Name</th>
                                <th scope="col">Inner Sub Category Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Desc</th>
                                <th scope="col">Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subCategory && subCategory.reverse().map((item,index)=>(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.categoryName}</td>
                                    <td>{item.subCategoryName}</td>
                                    <td>{item.AgainSubCategoryName}</td>
                                    <td><img src={item.againSubCategoryImg} alt="Category-image" /></td>
                                    <td>{item.againSubCategoryDesc}</td>
                                    <td className='upd-btns'>
                                        <Link to={`/edit-inner-sub-category/${item._id}`} className='upd-btns update'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>{hadndleDelete(item._id)}} className='upd-btns delete'><i className="fa-solid fa-trash-arrow-up"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={Math.ceil(subCategory.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            activeClassName={"active"}
        />
    </>
  )
}

export default AdminInnerSubCatePage