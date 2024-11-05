import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6'; // Replace FaTwitter with FaX for the new X icon
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <footer className="bg-blue-600 text-white py-8 px-4 sm:px-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-center">
        
        {/* Contact Information */}
        <div className={`${isArabic ? 'text-right' : ''} flex flex-col items-center`}>
          <h3 className="text-lg font-bold mb-4">{t('footer.contactUs')}</h3>
          <div className={`flex items-center mt-2 ${isArabic ? 'flex-row-reverse' : ''}`} style={{ gap: '1rem' }}>
            <FaPhoneAlt className="h-5 w-5" />
            <a href="tel:+1234567890" className="text-sm">{t('footer.phone')}</a>
          </div>
          <div className={`flex items-center mt-2 ${isArabic ? 'flex-row-reverse' : ''}`} style={{ gap: '1rem' }}>
            <FaEnvelope className="h-5 w-5" />
            <a href="mailto:info@hospital.com" className="text-sm">{t('footer.email')}</a>
          </div>
          <div className={`flex items-center mt-2 ${isArabic ? 'flex-row-reverse' : ''}`} style={{ gap: '1rem' }}>
            <FaMapMarkerAlt className="h-5 w-5" />
            <span className="text-sm">{t('footer.address')}</span>
          </div>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold mb-4">{t('footer.usefulLinks')}</h3>
          <ul className="space-y-2 text-sm text-center">
            <li><Link to="/" className="hover:underline">{t('footer.home')}</Link></li>
            <li><Link to="/book" className="hover:underline">{t('footer.bookAppointment')}</Link></li>
            <li><Link to="/about" className="hover:underline">{t('footer.aboutUs')}</Link></li>
            <li><Link to="/contact" className="hover:underline">{t('footer.contact')}</Link></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold mb-4">{t('footer.followUs')}</h3>
          <div className="flex justify-center space-x-8 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <FaX className="h-6 w-6" /> {/* New X icon */}
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} {t('footer.hospitalName')}. {t('footer.rightsReserved')}</p>
      </div>
    </footer>
  );
}

export default Footer;
