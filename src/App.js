import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import ProductPage from './Pages/ProductPage/ProductPage';
import Wardrobes from './Pages/Wardrobes/Wardrobes';
import AboutusPage from './Pages/AboutusPage/AboutusPage'
import ContactPage from './Pages/ContactPage/ContactPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about-us' element={<AboutusPage/>} />
            <Route path='/contact-us' element={<ContactPage/>} />
            <Route path='/product-page' element={<ProductPage />} />
            <Route path='/wardrobes' element={<Wardrobes />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
