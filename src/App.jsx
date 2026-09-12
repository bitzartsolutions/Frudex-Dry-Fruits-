import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { submitToWhatsApp } from './utils/whatsapp';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';

export default function App() {
  useEffect(() => {
    const address = 'Koduvally Kattangal Mavoor Road, Koduvally 673601, Kerala, India';
    const phone = '+91 81295 55591';
    document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
      link.href = 'tel:+918129555591';
      link.textContent = phone;
    });
    document.querySelectorAll('.desk-title p').forEach((block) => {
      block.textContent = 'Koduvally, Kerala, India';
    });
    document.querySelectorAll('.desks article small').forEach((block) => {
      if (/\+44|800|7946|442-3782/i.test(block.textContent)) {
        block.innerHTML = '<span class="material-symbols-outlined">call</span> ' + phone;
      }
    });
    document.querySelectorAll('input[placeholder^="+44"]').forEach((input) => {
      input.placeholder = phone;
    });
    document.querySelectorAll('.exact-contact-copy p, .contact-copy p, .footer-address, .desks article > p').forEach((block) => {
      if (/Head Office|Reserve Center|Regent Pavilion|London SW1Y|Global Agri-Ventures/i.test(block.textContent)) {
        const heading = block.querySelector('strong');
        block.replaceChildren(...(heading ? [heading, document.createElement('br')] : []), document.createTextNode(address), document.createElement('br'), document.createTextNode(phone));
      }
      if (/Trade Desk/i.test(block.textContent)) {
        const heading = block.querySelector('strong');
        block.replaceChildren(...(heading ? [heading, document.createElement('br')] : []), document.createTextNode(phone));
      }
    });

    const handleEnquirySubmit = (event) => {
      if (event.target instanceof HTMLFormElement) {
        submitToWhatsApp(event);
      }
    };

    document.addEventListener('submit', handleEnquirySubmit, true);
    return () => document.removeEventListener('submit', handleEnquirySubmit, true);
  }, []);

  return <BrowserRouter><Header /><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/products" element={<Products />} /><Route path="/contact" element={<Contact />} /></Routes><Footer /></BrowserRouter>;
}
