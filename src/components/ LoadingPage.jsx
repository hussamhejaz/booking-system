// src/components/LoadingPage.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaHeartbeat, FaCapsules, FaSyringe, FaPills } from 'react-icons/fa';
import '../style/LoadingPage.css';

function LoadingPage() {
  const { t } = useTranslation(); // Initialize translation

  return (
    <div className="loading-container">
      <div className="pulse-icon">
        <FaHeartbeat className="heart-icon" />
      </div>
      <div className="floating-pills">
        <FaCapsules className="pill-icon" />
        <FaSyringe className="syringe-icon" />
        <FaPills className="pills-icon" />
      </div>
      <h2 className="loading-text">{t('loading.message')}</h2> {/* Use translation key */}
    </div>
  );
}

export default LoadingPage;
