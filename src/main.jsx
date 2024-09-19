import React, { StrictMode,Suspense } from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Home =React.lazy(()=>import('./pages/Home.jsx'));
const Models =React.lazy(()=>import('./pages/Models.jsx'));
const Buy =React.lazy(()=>import('./pages/Buy.jsx'));
const About =React.lazy(()=>import('./pages/About.jsx'));
const Contact =React.lazy(()=>import('./pages/Contact.jsx'));
import { ImageProvider } from "./contexts/ImageContext";
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <ImageProvider>
  <Suspense fallback={<div>Loading...</div>}>
 <Router>
    
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/models" element={<Models/>} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
   
    </Router>
   
  </Suspense>
  </ImageProvider>
)
