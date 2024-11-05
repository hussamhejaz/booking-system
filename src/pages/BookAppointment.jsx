import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Import translation hook
import 'react-calendar/dist/Calendar.css';
import '../style/react-calendar.css';

function BookAppointment() {
  const { t, i18n } = useTranslation(); // Get translation function and i18n instance
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    department: '',
    doctor: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleNextStep = () => setStep(step + 1);
  const handlePreviousStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment booked:', formData);
    alert(t('loading.message')); // Use translation for the alert message
    setFormData({ department: '', doctor: '', date: '', time: '', name: '', email: '', phone: '' });
    setStep(1);
  };

  return (
    <div className={`flex justify-center items-center min-h-screen bg-gray-100 py-10 ${i18n.language === 'ar' ? 'rtl' : ''}`}>
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-xl font-bold text-teal-600 mb-4 text-center">{t('bookAppointment.title')}</h1>

          {/* Step 1: Select Department */}
          {step === 1 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">{t('bookAppointment.selectDepartment')}</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  className={`department-button ${formData.department === 'Dentistry' ? 'active' : ''}`}
                  onClick={() => setFormData({ ...formData, department: 'Dentistry' })}
                >
                  {t('bookAppointment.department.dentistry')}
                </button>
                <button
                  className={`department-button ${formData.department === 'Orthopedics' ? 'active' : ''}`}
                  onClick={() => setFormData({ ...formData, department: 'Orthopedics' })}
                >
                  {t('bookAppointment.department.orthopedics')}
                </button>
              </div>
              <button onClick={handleNextStep} className="gradient-button w-full">
                {t('bookAppointment.next')}
              </button>
            </div>
          )}

          {/* Step 2: Select Doctor */}
          {step === 2 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">{t('bookAppointment.selectDoctor')}</h2>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded mb-6"
                required
              >
                <option value="">{t('bookAppointment.selectDoctorOption')}</option>
                <option value="Dr. John Doe">{t('bookAppointment.doctor.johnDoe')}</option>
                <option value="Dr. Jane Smith">{t('bookAppointment.doctor.janeSmith')}</option>
                <option value="Dr. Emily Brown">{t('bookAppointment.doctor.emilyBrown')}</option>
              </select>
              <div className="flex justify-between">
                <button onClick={handlePreviousStep} className="gradient-button">{t('bookAppointment.back')}</button>
                <button onClick={handleNextStep} className="gradient-button">{t('bookAppointment.next')}</button>
              </div>
            </div>
          )}

          {/* Step 3: Select Date & Time */}
          {step === 3 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">{t('bookAppointment.selectDateTime')}</h2>
              <div className="flex justify-center mb-6">
                <Calendar
                  onChange={handleDateChange}
                  value={formData.date}
                  className="custom-calendar"
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'].map((time) => (
                  <button
                    key={time}
                    className={`time-slot-button ${formData.time === time ? 'active' : ''}`}
                    onClick={() => setFormData({ ...formData, time })}
                  >
                    {time}
                  </button>
                ))}
              </div>
              <div className="flex justify-between">
                <button onClick={handlePreviousStep} className="gradient-button">{t('bookAppointment.back')}</button>
                <button onClick={handleNextStep} className="gradient-button">{t('bookAppointment.next')}</button>
              </div>
            </div>
          )}

          {/* Step 4: Enter User Details */}
          {step === 4 && (
            <form onSubmit={handleSubmit}>
              <h2 className="text-lg font-semibold mb-4">{t('bookAppointment.enterDetails')}</h2>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t('bookAppointment.fullName')}
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={t('bookAppointment.email')}
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder={t('bookAppointment.phone')}
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />
              <div className="flex justify-between">
                <button onClick={handlePreviousStep} type="button" className="gradient-button">{t('bookAppointment.back')}</button>
                <button type="submit" className="gradient-button">{t('bookAppointment.confirmBooking')}</button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default BookAppointment;
