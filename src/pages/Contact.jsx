import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Import the translation hook

function Contact() {
  const { t, i18n } = useTranslation(); // Get translation function and i18n instance

  return (
    <div className={`bg-gray-100 min-h-screen p-6 ${i18n.language === 'ar' ? 'rtl' : ''}`}>
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg space-y-8">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-blue-600">{t('contact.title')}</h1>
        
        {/* Map Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">{t('contact.location')}</h2>
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title={t('contact.mapTitle')}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.865399542561!2d-122.41941548468168!3d37.77492967975995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5ecf621f%3A0xb4cfdf43c73f4b99!2sHospital%20Name!5e0!3m2!1sen!2sus!4v1634062387088!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">{t('contact.faq')}</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{t('contact.faqQuestion1')}</h3>
              <p className="text-gray-700">{t('contact.faqAnswer1')}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{t('contact.faqQuestion2')}</h3>
              <p className="text-gray-700">{t('contact.faqAnswer2')}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{t('contact.faqQuestion3')}</h3>
              <p className="text-gray-700">{t('contact.faqAnswer3')}</p>
            </div>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">{t('contact.operatingHours')}</h2>
          <div className="flex items-center space-x-4">
            <FaClock className="text-blue-600 w-8 h-8" />
            <div>
              <p className="text-gray-700"><strong>{t('contact.hours.mondayFriday')}</strong></p>
              <p className="text-gray-700"><strong>{t('contact.hours.saturday')}</strong></p>
              <p className="text-gray-700"><strong>{t('contact.hours.sunday')}</strong></p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">{t('contact.getInTouch')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-blue-600 w-6 h-6" />
              <div>
                <h3 className="text-lg font-semibold">{t('contact.phoneLabel')}</h3>
                <p className="text-gray-700">{t('contact.phoneNumber')}</p>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-600 w-6 h-6" />
              <div>
                <h3 className="text-lg font-semibold">{t('contact.emailLabel')}</h3>
                <p className="text-gray-700">{t('contact.emailAddress')}</p>
              </div>
            </div>
            
            {/* Address */}
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-blue-600 w-6 h-6" />
              <div>
                <h3 className="text-lg font-semibold">{t('contact.addressLabel')}</h3>
                <p className="text-gray-700">{t('contact.addressDetails')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
