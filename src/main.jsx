import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import './styles/variables.css';
import './styles/typography.css';
import './styles/animations.css';
import './styles/reference.css';
import './styles/exact-reference.css';
import './styles/about-reference.css';
import './styles/products-reference.css';
import './styles/contact-reference.css';
import './styles/hero-linework.css';

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
