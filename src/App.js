// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import BookAppointment from './pages/BookAppointment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingPage from './components/ LoadingPage'
import Dashboard from './dashboard/Dashboard';


import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const isArabic = i18n.language === 'ar';

  return (
    <Router>
      <div className={`App ${isArabic ? 'rtl' : ''}`}>
        {isLoading ? (
          <LoadingPage />
        ) : (
          <>
            <Routes>
              {/* Main Site Routes */}
              <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
              <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
              <Route path="/services" element={<><Navbar /><Services /><Footer /></>} />
              <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
              <Route path="/book" element={<><Navbar /><BookAppointment /><Footer /></>} />

              {/* Dashboard Routes */}
              <Route path="/dashboard/*" element={<Dashboard />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
