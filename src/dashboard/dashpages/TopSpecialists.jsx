// src/dashboard/dashpages/TopSpecialists.jsx
import React, { useState, useEffect } from 'react';

// Example data for departments, doctors, and their images
const exampleDepartments = [
  {
    id: 1,
    name: 'Cardiology',
    doctors: [
      { id: 101, name: 'Dr. Alice', specialization: 'Cardiologist', isTopSpecialist: true, photo: 'https://via.placeholder.com/100' },
      { id: 102, name: 'Dr. Bob', specialization: 'Cardiologist', isTopSpecialist: false, photo: 'https://via.placeholder.com/100' },
    ],
  },
  {
    id: 2,
    name: 'Orthopedics',
    doctors: [
      { id: 201, name: 'Dr. Charlie', specialization: 'Orthopedist', isTopSpecialist: false, photo: 'https://via.placeholder.com/100' },
      { id: 202, name: 'Dr. Dana', specialization: 'Orthopedist', isTopSpecialist: false, photo: 'https://via.placeholder.com/100' },
    ],
  },
  {
    id: 3,
    name: 'Neurology',
    doctors: [
      { id: 301, name: 'Dr. Emma', specialization: 'Neurologist', isTopSpecialist: true, photo: 'https://via.placeholder.com/100' },
      { id: 302, name: 'Dr. Frank', specialization: 'Neurologist', isTopSpecialist: false, photo: 'https://via.placeholder.com/100' },
    ],
  },
];

function TopSpecialists() {
  const [departments, setDepartments] = useState(exampleDepartments); // Use example data as default
  const [topSpecialists, setTopSpecialists] = useState([]);

  useEffect(() => {
    // Extract initial top specialists based on example data
    const specialists = [];
    departments.forEach(department => {
      department.doctors.forEach(doctor => {
        if (doctor.isTopSpecialist) specialists.push(doctor);
      });
    });
    setTopSpecialists(specialists);
  }, [departments]);

  // Toggle "Top Specialist" status
  const toggleTopSpecialist = (departmentId, doctorId) => {
    const updatedDepartments = departments.map(department => {
      if (department.id === departmentId) {
        return {
          ...department,
          doctors: department.doctors.map(doctor => {
            if (doctor.id === doctorId) {
              const updatedDoctor = { ...doctor, isTopSpecialist: !doctor.isTopSpecialist };
              if (updatedDoctor.isTopSpecialist) {
                setTopSpecialists(prev => [...prev, updatedDoctor]);
              } else {
                setTopSpecialists(prev => prev.filter(d => d.id !== doctorId));
              }
              return updatedDoctor;
            }
            return doctor;
          }),
        };
      }
      return department;
    });
    setDepartments(updatedDepartments);
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-4">Top Specialists</h1>

      {/* Display Top Specialists */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Selected Top Specialists</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {topSpecialists.length > 0 ? (
            topSpecialists.map(doctor => (
              <div key={doctor.id} className="bg-green-50 p-4 rounded-lg shadow-md flex items-center">
                <img src={doctor.photo} alt={doctor.name} className="w-16 h-16 rounded-full mr-3" />
                <div>
                  <h3 className="text-lg font-medium">{doctor.name}</h3>
                  <p className="text-sm text-gray-500">{doctor.specialization}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No Top Specialists selected yet.</p>
          )}
        </div>
      </div>

      {/* Display All Doctors with Toggle Option */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">All Doctors</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {departments.map(department =>
            department.doctors.map(doctor => (
              <div key={doctor.id} className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <img src={doctor.photo} alt={doctor.name} className="w-16 h-16 rounded-full mr-3" />
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{doctor.name}</h3>
                  <p className="text-sm text-gray-500">{doctor.specialization}</p>
                </div>
                <button
                  onClick={() => toggleTopSpecialist(department.id, doctor.id)}
                  className={`mt-2 px-4 py-2 text-sm font-medium rounded ${
                    doctor.isTopSpecialist ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
                  }`}
                >
                  {doctor.isTopSpecialist ? 'Remove from Top Specialists' : 'Add to Top Specialists'}
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default TopSpecialists;
