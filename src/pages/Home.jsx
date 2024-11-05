import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import the translation hook

function Home() {
  const { t, i18n } = useTranslation(); // Get translation function and i18n instance

  return (
    <div className={`bg-gray-100 min-h-screen p-4 overflow-x-hidden ${i18n.language === 'ar' ? 'rtl' : ''}`}>
      <div className="container mx-auto max-w-screen-md">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-8 px-4 sm:py-10 sm:px-6 rounded-lg shadow-lg text-center mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">{t('home.heroTitle')}</h1>
          <p className="text-sm sm:text-base md:text-lg mt-2 sm:mt-4 leading-relaxed">
            {t('home.heroSubtitle')}
          </p>
          <Link to="/book">
            <button className="mt-4 sm:mt-6 bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-200">
              {t('home.bookAppointment')}
            </button>
          </Link>
        </div>

        {/* Search and Specialties Section */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">{t('home.findDoctor')}</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder={t('home.searchPlaceholder')} // Add a translation key for the placeholder
              className="w-full p-2 border border-gray-300 rounded text-sm sm:text-base"
            />
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center md:justify-start">
            {/* List of Specialties */}
            {['Cardiology', 'Dermatology', 'Pediatrics', 'Orthopedics'].map((specialty) => (
              <div
                key={specialty}
                className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg cursor-pointer text-xs sm:text-sm md:text-base"
              >
                {specialty}
              </div>
            ))}
          </div>
        </div>

        {/* Featured Doctors Section */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">{t('home.topSpecialists')}</h2>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Sample Doctor Cards */}
            {[1, 2, 3].map((doctor) => (
              <div key={doctor} className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg sm:text-xl font-semibold leading-tight">Dr. John Doe</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Cardiologist</p>
                <Link to="/book">
                  <button className="mt-4 bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
                    {t('home.bookNow')} {/* Add a translation key for the button text */}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
