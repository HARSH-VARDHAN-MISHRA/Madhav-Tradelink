import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Header = () => {
    // State to track whether each dropdown is open or closed
    const [dropdownOpen, setDropdownOpen] = useState({
        doors: false,
        // pages: false
    });

    // Function to toggle the dropdown state
    const toggleDropdown = (dropdown) => {
        setDropdownOpen(prevState => ({
            ...prevState,
            [dropdown]: !prevState[dropdown]
        }));
    };


    const [isMobModeActive, setIsMobModeActive] = useState(false)

    const activeMobMode = () => {
        setIsMobModeActive(!isMobModeActive)
    }

    const deActiveMobMode = () => {
        setIsMobModeActive(false)
    }

    const [allcate, setAllCate] = useState([]);
    const [singleCategory, setSingleCategory] = useState([]);
    const handleFetch = async () => {
        try {
            const res = await axios.get('http://localhost:6519/api/v1/get-all-product');
            console.log(res.data.data);
            setAllCate(res.data.data);

            const filterSingleCate = res.data.data.filter(item =>
                (!item.subCategoryName && !item.AgainSubCategoryName) // Check for null or undefined
            );
            console.log(filterSingleCate);
            setSingleCategory(filterSingleCate);
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        handleFetch()
    }, [])

    return (
        <>
            <header>
                <div className="top-black-line">Welcome to Vigaz</div>
                <div className="header-middle container">
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-whatsapp"></i></a>
                    </div>
                    <div className="logo">
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                    </div>
                    <Link to="/contact-us" className="contact-btn">
                        Request a Quote <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <div className="hamburger" onClick={activeMobMode}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>

                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li className="main-dropdown" onMouseEnter={() => toggleDropdown('doors')} onMouseLeave={() => toggleDropdown('doors')}>
                            <div className='dropName'>Doors</div>
                            {dropdownOpen.doors && (
                                <div className="dropdown-content">
                                    <ul>
                                        {allcate && allcate
                                            .filter((doorCate, index, self) =>
                                                doorCate.categoryName === 'Doors' &&
                                                index === self.findIndex((t) => t.subCategoryName === doorCate.subCategoryName)
                                            )
                                            .map((doorCate, index) => (
                                                <li key={index}>
                                                    <Link
                                                        to={doorCate.AgainSubCategoryName ? `/AgainSub/${doorCate.categoryName}/${doorCate.subCategoryName}` : `/product/${doorCate.categoryName}/${doorCate.subCategoryName}`}
                                                    >
                                                        {doorCate.subCategoryName}
                                                    </Link>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li className="main-dropdown" onMouseEnter={() => toggleDropdown('pages')} onMouseLeave={() => toggleDropdown('pages')}>
                            <div className='dropName'>Modular Kitchen</div>
                            {dropdownOpen.pages && (
                                <div className="dropdown-content">
                                    <ul>
                                        {allcate && allcate
                                            .filter((doorCate, index, self) =>
                                                doorCate.categoryName === 'Modular Kitchen' &&
                                                index === self.findIndex((t) => t.subCategoryName === doorCate.subCategoryName)
                                            )
                                            .map((doorCate, index) => (
                                                <li key={index}>
                                                    <Link
                                                        to={doorCate.AgainSubCategoryName ? `/AgainSub/${doorCate.categoryName}/${doorCate.subCategoryName}` : `/product/${doorCate.categoryName}/${doorCate.subCategoryName}`}
                                                    >
                                                        {doorCate.subCategoryName}
                                                    </Link>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                        {/* <li className="main-dropdown" onMouseEnter={() => toggleDropdown('pages')} onMouseLeave={() => toggleDropdown('pages')}>
                            <div className='dropName'>Decorative Surfaces</div>
                            {dropdownOpen.pages && (
                                <div className="dropdown-content">
                                    <ul>
                                        <li><Link to="/product-page/L-Shape">L-Shape</Link></li>
                                        <li><Link to="/product-page/U-Shape">U-Shape</Link></li>
                                        <li><Link to="/product-page/Parallel">Parallel</Link></li>
                                    </ul>
                                </div>
                            )}
                        </li> */}

                        {singleCategory && singleCategory.map((cate, ind) => (
                            <li key={ind}><Link to={`/Category/${cate.productName}`}>{cate.categoryName}</Link></li>
                        ))}
                        <li><Link to="/contact-us">Contact</Link></li>
                    </ul>
                </nav>

            </header>

            <div className="side-nav">
                <div className={`mob-nav p-2 ${isMobModeActive ? 'mob-active' : ''}`}>
                    <div className="menu-close">
                        <i className="fa-solid fa-xmark" onClick={deActiveMobMode}></i>
                    </div>
                    <ul className="list-unstyled">
                        <li><Link to="/" onClick={deActiveMobMode}>home</Link></li>
                        <li><Link to="/about-us" onClick={deActiveMobMode}>about us</Link></li>
                        
                        <li className="main-dropdown" onMouseEnter={() => toggleDropdown('doors')} onMouseLeave={() => toggleDropdown('doors')}>
                            <div className='dropName'>Doors</div>
                            {dropdownOpen.doors && (
                                <div className="dropdown-content">
                                    <ul>
                                        {allcate && allcate
                                            .filter((doorCate, index, self) =>
                                                doorCate.categoryName === 'Doors' &&
                                                index === self.findIndex((t) => t.subCategoryName === doorCate.subCategoryName)
                                            )
                                            .map((doorCate, index) => (
                                                <li key={index}>
                                                    <Link
                                                        onClick={deActiveMobMode}
                                                        to={doorCate.AgainSubCategoryName ? `/AgainSub/${doorCate.categoryName}/${doorCate.subCategoryName}` : `/product/${doorCate.categoryName}/${doorCate.subCategoryName}`}
                                                    >
                                                        {doorCate.subCategoryName}
                                                    </Link>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li className="main-dropdown" onMouseEnter={() => toggleDropdown('pages')} onMouseLeave={() => toggleDropdown('pages')}>
                            <div className='dropName'>Modular Kitchen</div>
                            {dropdownOpen.pages && (
                                <div className="dropdown-content">
                                    <ul>
                                        {allcate && allcate
                                            .filter((doorCate, index, self) =>
                                                doorCate.categoryName === 'Modular Kitchen' &&
                                                index === self.findIndex((t) => t.subCategoryName === doorCate.subCategoryName)
                                            )
                                            .map((doorCate, index) => (
                                                <li key={index}>
                                                    <Link
                                                        onClick={deActiveMobMode}
                                                        to={doorCate.AgainSubCategoryName ? `/AgainSub/${doorCate.categoryName}/${doorCate.subCategoryName}` : `/product/${doorCate.categoryName}/${doorCate.subCategoryName}`}
                                                    >
                                                        {doorCate.subCategoryName}
                                                    </Link>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            )}
                        </li>

                        {singleCategory && singleCategory.map((cate, ind) => (
                            <li key={ind}><Link to={`/Category/${cate.productName}`} onClick={deActiveMobMode}>{cate.categoryName}</Link></li>
                        ))}
                        <li><Link to="/contact-us" onClick={deActiveMobMode}>Contact</Link></li>
                    </ul>
                    <div className="social-icons mt-4">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="https://api.whatsapp.com/send?phone=919953091185" target="_blank"><i className="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>

            {/* <!-- ----------Whatsapp---------- --> */}
            <a href="https://api.whatsapp.com/send?phone=919953091185" target="_blank" class="whatsapp_float"><i class="fa-brands fa-whatsapp whatsapp-icon"></i></a>
        </>
    )
}

export default Header