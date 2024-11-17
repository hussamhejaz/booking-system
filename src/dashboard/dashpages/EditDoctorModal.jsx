// src/dashboard/dashpages/EditDoctorModal.jsx
import React, { useState, useEffect } from 'react';

function EditDoctorModal({ doctor, onClose, onEdit }) {
  const [doctorName, setDoctorName] = useState(doctor.name);
  const [specialization, setSpecialization] = useState(doctor.specialization);
  const [contact, setContact] = useState(doctor.contact);
  const [workingDays, setWorkingDays] = useState({});
  const [startTime, setStartTime] = useState(doctor.workingHours.start);
  const [endTime, setEndTime] = useState(doctor.workingHours.end);

  // Initialize workingDays state based on doctor's current working days
  useEffect(() => {
    setWorkingDays({
      Monday: doctor.workingDays.includes("Monday"),
      Tuesday: doctor.workingDays.includes("Tuesday"),
      Wednesday: doctor.workingDays.includes("Wednesday"),
      Thursday: doctor.workingDays.includes("Thursday"),
      Friday: doctor.workingDays.includes("Friday"),
      Saturday: doctor.workingDays.includes("Saturday"),
      Sunday: doctor.workingDays.includes("Sunday"),
    });
  }, [doctor.workingDays]);

  // Toggle working day selection
  const handleDayChange = (day) => {
    setWorkingDays((prevDays) => ({
      ...prevDays,
      [day]: !prevDays[day],
    }));
  };

  // Handle save changes
  const handleEditDoctor = () => {
    onEdit({
      ...doctor,
      name: doctorName,
      specialization,
      contact,
      workingDays: Object.keys(workingDays).filter(day => workingDays[day]),
      workingHours: { start: startTime, end: endTime },
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Edit Doctor</h2>
        
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
          <button onClick={handleEditDoctor} className="px-4 py-2 bg-blue-500 text-white rounded-md">Save Changes</button>
        </div>
      </div>
    </div>
  );
}

export default EditDoctorModal;
