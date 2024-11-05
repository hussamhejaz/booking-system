// src/pages/About.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation(); // Use the translation hook

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="text-3xl font-bold text-blue-600 mb-4">{t('about.title')}</h1>
        
        {/* Description */}
        <p className="text-gray-700 mb-6">
          {t('about.description')}
        </p>

        {/* Mission Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">{t('about.mission')}</h2>
          <p className="text-gray-700">
            {t('about.missionText')}
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">{t('about.values')}</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {t('about.valuesList', { returnObjects: true }).map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>

        {/* Team Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">{t('about.team')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Team Member 1 */}
            <div className="flex items-center space-x-4">
              <img src="/path-to-team-member1.jpg" alt={t('about.teamMember1.name')} className="w-16 h-16 rounded-full" />
              <div>
                <h3 className="text-lg font-bold">{t('about.teamMember1.name')}</h3>
                <p className="text-gray-600">{t('about.teamMember1.role')}</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="flex items-center space-x-4">
              <img src="/path-to-team-member2.jpg" alt={t('about.teamMember2.name')} className="w-16 h-16 rounded-full" />
              <div>
                <h3 className="text-lg font-bold">{t('about.teamMember2.name')}</h3>
                <p className="text-gray-600">{t('about.teamMember2.role')}</p>
              </div>
            </div>

            {/* Add more team members as needed */}
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">{t('about.contact')}</h2>
          <p className="text-gray-700">
            {t('about.contactText')}
          </p>
          <p className="text-gray-700 mt-2">
            <strong>{t('contact.phone')}:</strong> +123-456-7890 <br />
            <strong>{t('contact.email')}:</strong> info@hospital.com <br />
            <strong>{t('contact.address')}:</strong> 123 Main Street, City, Country
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
