// src/dashboard/dashpages/DoctorModal.jsx
import React, { useState } from 'react';

function DoctorModal({ onClose, departmentId, onAdd }) {
  const [doctorName, setDoctorName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [contact, setContact] = useState('');
  const [photo, setPhoto] = useState(null); // State for storing the uploaded photo
  const [workingDays, setWorkingDays] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setPhoto(URL.createObjectURL(file)); // Create a temporary URL for preview
  };

  const handleAddDoctor = () => {
    if (doctorName) {
      onAdd(departmentId, {
        id: Date.now(),
        name: doctorName,
        specialization,
        contact,
        photo, // Save the photo URL
        workingDays: Object.keys(workingDays).filter(day => workingDays[day]),
        workingHours: { start: startTime, end: endTime },
      });
      onClose();
    }
  };

  const handleDayChange = (day) => {
    setWorkingDays((prevDays) => ({
      ...prevDays,
      [day]: !prevDays[day],
    }));
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Add Doctor</h2>
        
        {/* Doctor Information */}
        <input
          type="text"
          placeholder="Doctor Name"
          className="w-full p-2 border rounded"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Specialization"
          className="w-full p-2 border rounded"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contact"
          className="w-full p-2 border rounded"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />

        {/* Photo Upload */}
        <div className="space-y-2">
          <p className="text-sm font-semibold">Upload Photo:</p>
          <input type="file" onChange={handlePhotoChange} />
          {photo && <img src={photo} alt="Doctor preview" className="w-16 h-16 rounded-full mt-2" />}
        </div>

        {/* Working Days Selection */}
        <div className="space-y-2">
          <p className="text-sm font-semibold">Working Days:</p>
          <div className="grid grid-cols-2 gap-2">
            {Object.keys(workingDays).map((day) => (
              <label key={day} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={workingDays[day]}
                  onChange={() => handleDayChange(day)}
                />
                <span>{day}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Working Hours */}
        <div className="space-y-2">
          <p className="text-sm font-semibold">Working Hours:</p>
          <div className="flex space-x-2">
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <span>to</span>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-md">Cancel</button>
          <button onClick={handleAddDoctor} className="px-4 py-2 bg-blue-500 text-white rounded-md">Add Doctor</button>
        </div>
      </div>
    </div>
  );
}

export default DoctorModal;
