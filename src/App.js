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
import LoadingPage from './components/ LoadingPage';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const { i18n } = useTranslation(); // Get the i18n instance

  useEffect(() => {
    // Simulate a delay to show the loading page
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Display loading screen for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  // Check if the current language is Arabic
  const isArabic = i18n.language === 'ar';

  return (
    <Router>
      <div className={`App ${isArabic ? 'rtl' : ''}`}> {/* Apply RTL class conditionally */}
        {isLoading ? (
          // Show LoadingPage component while loading
          <LoadingPage />
        ) : (
          // Main content after loading completes
          <>
            <Navbar />
            <div className="main-content pt-16 pb-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/book" element={<BookAppointment />} />
              </Routes>
            </div>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
