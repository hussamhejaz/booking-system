import React from 'react';
import { FaHeartbeat, FaStethoscope, FaUserMd, FaAmbulance, FaProcedures, FaBaby } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Import the translation hook

function Services() {
  const { t, i18n } = useTranslation(); // Get translation function and i18n instance

  return (
    <div className={`bg-gray-100 min-h-screen p-6 ${i18n.language === 'ar' ? 'rtl' : ''}`}>
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-blue-600 mb-6">{t('services.title')}</h1>
        <p className="text-gray-700 mb-8">
          {t('services.description')}
        </p>
        
        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Service 1 */}
          <div className="flex items-center space-x-4">
            <FaHeartbeat className="text-blue-600 w-12 h-12" />
            <div>
              <h2 className="text-xl font-semibold">{t('services.servicesList.0.title')}</h2>
              <p className="text-gray-600">
                {t('services.servicesList.0.description')}
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex items-center space-x-4">
            <FaStethoscope className="text-blue-600 w-12 h-12" />
            <div>
              <h2 className="text-xl font-semibold">{t('services.servicesList.1.title')}</h2>
              <p className="text-gray-600">
                {t('services.servicesList.1.description')}
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex items-center space-x-4">
            <FaUserMd className="text-blue-600 w-12 h-12" />
            <div>
              <h2 className="text-xl font-semibold">{t('services.servicesList.2.title')}</h2>
              <p className="text-gray-600">
                {t('services.servicesList.2.description')}
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="flex items-center space-x-4">
            <FaAmbulance className="text-blue-600 w-12 h-12" />
            <div>
              <h2 className="text-xl font-semibold">{t('services.servicesList.3.title')}</h2>
              <p className="text-gray-600">
                {t('services.servicesList.3.description')}
              </p>
            </div>
          </div>

          {/* Service 5 */}
          <div className="flex items-center space-x-4">
            <FaProcedures className="text-blue-600 w-12 h-12" />
            <div>
              <h2 className="text-xl font-semibold">{t('services.servicesList.4.title')}</h2>
              <p className="text-gray-600">
                {t('services.servicesList.4.description')}
              </p>
            </div>
          </div>

          {/* Service 6 */}
          <div className="flex items-center space-x-4">
            <FaBaby className="text-blue-600 w-12 h-12" />
            <div>
              <h2 className="text-xl font-semibold">{t('services.servicesList.5.title')}</h2>
              <p className="text-gray-600">
                {t('services.servicesList.5.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
