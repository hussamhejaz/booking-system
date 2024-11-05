import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGlobeAmericas, FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguageMenu = () => {
    setLanguageOpen(!languageOpen);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLanguageOpen(false);
  };

  const isArabic = i18n.language === 'ar';

  return (
    <nav className="bg-blue-600 text-white py-3 px-4 sm:px-6 fixed top-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-lg font-bold tracking-wide">
          {t('navbar.logo')}
        </Link>

        {/* Centered Links Section */}
        <div className="hidden lg:flex flex-1 justify-center space-x-8">
          <Link to="/" className="hover:text-gray-300 transition duration-200">{t('navbar.home')}</Link>
          <Link to="/about" className="hover:text-gray-300 transition duration-200">{t('navbar.aboutUs')}</Link>
          <Link to="/services" className="hover:text-gray-300 transition duration-200">{t('navbar.services')}</Link>
          <Link to="/contact" className="hover:text-gray-300 transition duration-200">{t('navbar.contact')}</Link>
        </div>

        {/* Language Selector and Hamburger Menu for Mobile */}
        <div className="flex items-center space-x-4 lg:hidden">
          {/* Language Selector */}
          <button
            onClick={toggleLanguageMenu}
            className="flex items-center space-x-1 bg-transparent hover:bg-blue-700 px-3 py-1 rounded-full transition duration-200"
          >
            <FaGlobeAmericas className="h-5 w-5 text-white" />
            <span className="text-base font-medium">{isArabic ? 'العربية' : 'English'}</span>
          </button>
          {languageOpen && (
            <div className="absolute top-full right-4 mt-2 w-24 bg-white text-black rounded-lg shadow-lg">
              {i18n.language !== 'en' && (
                <button
                  onClick={() => changeLanguage("en")}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-200 transition duration-200"
                >
                  English
                </button>
              )}
              {i18n.language !== 'ar' && (
                <button
                  onClick={() => changeLanguage("ar")}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-200 transition duration-200"
                >
                  العربية
                </button>
              )}
            </div>
          )}

          {/* Hamburger Icon */}
          <button onClick={toggleMenu} className="flex items-center">
            <FaBars className="w-6 h-6" />
          </button>
        </div>

        {/* Language Selector for Desktop */}
        <div className={`hidden lg:flex items-center ${isArabic ? 'flex-row-reverse space-x-reverse' : ''}`}>
          <div className="relative">
            <button
              onClick={toggleLanguageMenu}
              className={`flex items-center ${isArabic ? 'space-x-reverse' : 'space-x-1'} bg-transparent hover:bg-blue-700 px-3 py-1 rounded-full transition duration-200`}
            >
              {isArabic ? (
                <>
                  <span className="font-medium">العربية</span>
                  <FaGlobeAmericas className="h-5 w-5 text-white" />
                </>
              ) : (
                <>
                  <FaGlobeAmericas className="h-5 w-5 text-white" />
                  <span className="font-medium">English</span>
                </>
              )}
            </button>
            {languageOpen && (
              <div className="absolute top-full mt-2 w-24 bg-white text-black rounded-lg shadow-lg">
                {i18n.language !== 'en' && (
                  <button
                    onClick={() => changeLanguage("en")}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-200 transition duration-200"
                  >
                    English
                  </button>
                )}
                {i18n.language !== 'ar' && (
                  <button
                    onClick={() => changeLanguage("ar")}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-200 transition duration-200"
                  >
                    العربية
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Background Overlay */}
          <div 
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={toggleMenu} // Closes the menu when overlay is clicked
          ></div>

          {/* Side Drawer Menu */}
          <div className={`fixed inset-y-0 ${isArabic ? 'right-0' : 'left-0'} bg-blue-600 text-white w-64 z-50 p-6 space-y-4 transform transition-transform duration-300 text-center`}>
            
            {/* Close Button in the Side Drawer */}
            <button
              className="absolute top-4 right-4 text-white"
              onClick={toggleMenu}
            >
              <FaTimes className="w-6 h-6" />
            </button>

            <Link to="/" className="block text-white hover:text-gray-300" onClick={toggleMenu}>{t('navbar.home')}</Link>
            <Link to="/about" className="block text-white hover:text-gray-300" onClick={toggleMenu}>{t('navbar.aboutUs')}</Link>
            <Link to="/services" className="block text-white hover:text-gray-300" onClick={toggleMenu}>{t('navbar.services')}</Link>
            <Link to="/contact" className="block text-white hover:text-gray-300" onClick={toggleMenu}>{t('navbar.contact')}</Link>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
