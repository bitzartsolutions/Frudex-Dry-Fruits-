import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { submitToWhatsApp } from './utils/whatsapp';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Contact from './pages/Contact/Contact';

function ScrollToTop() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  useEffect(() => {
    const handleEnquirySubmit = (event) => {
      if (event.target instanceof HTMLFormElement) {
        submitToWhatsApp(event);
      }
    };

    document.addEventListener('submit', handleEnquirySubmit, true);
    return () => document.removeEventListener('submit', handleEnquirySubmit, true);
  }, []);

  return <BrowserRouter><ScrollToTop /><Header /><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/products" element={<Products />} /><Route path="/products/:slug" element={<ProductDetail />} /><Route path="/contact" element={<Contact />} /></Routes><Footer /></BrowserRouter>;
}
