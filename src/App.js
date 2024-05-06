import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import ProductPage from './Pages/ProductPage/ProductPage';
import Wardrobes from './Pages/Wardrobes/Wardrobes';
import AboutusPage from './Pages/AboutusPage/AboutusPage'
import ContactPage from './Pages/ContactPage/ContactPage';
import { useEffect, useState } from 'react';
import AdminHeader from './admin/Header/Header';
import Login from './admin/auth/Login';
import Dashboard from './admin/Dashboard/Dashboard';

function App() {
  const getAdminStatus = sessionStorage.getItem('admin') || false
  // console.log(getAdminStatus)
  const [adminLogin, setAdminLogin] = useState(false)
  useEffect(() => {
    setAdminLogin(getAdminStatus)
  }, [getAdminStatus])

  // console.log(adminLogin)
  return (
    <>

      {getAdminStatus ? (
        <>
        <Dashboard/>

        </>
      ) : (
        <>

          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about-us' element={<AboutusPage />} />
            <Route path='/contact-us' element={<ContactPage />} />
            <Route path='/product-page' element={<ProductPage />} />
            <Route path='/wardrobes' element={<Wardrobes />} />
            <Route path='/admin' element={<Login />} />

            <Route path='/Category/:name' element={<ProductPage />} />
            <Route path='/Category/subcategory/:name' />
            <Route path='/Category/subcategory/inner/:name' />

          </Routes>
          <Footer />
        </>
      )}




    </>
  );
}

export default App;
