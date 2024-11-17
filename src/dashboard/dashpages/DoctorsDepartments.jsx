// src/dashboard/dashpages/DoctorsDepartments.jsx
import React, { useState } from 'react';
import DepartmentModal from './DepartmentModal';
import DoctorModal from './DoctorModal';
import EditDoctorModal from './EditDoctorModal';

function DoctorsDepartments() {
  const [departments, setDepartments] = useState([]);
  const [isDepartmentModalOpen, setDepartmentModalOpen] = useState(false);
  const [isDoctorModalOpen, setDoctorModalOpen] = useState(false);
  const [isEditDoctorModalOpen, setEditDoctorModalOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Add Department
  const handleAddDepartment = (newDepartment) => {
    setDepartments([...departments, { ...newDepartment, doctors: [] }]);
    setDepartmentModalOpen(false);
  };

  // Add Doctor
  const handleAddDoctor = (departmentId, newDoctor) => {
    setDepartments(departments.map(department =>
      department.id === departmentId
        ? { ...department, doctors: [...department.doctors, newDoctor] }
        : department
    ));
    setDoctorModalOpen(false);
  };

  // Edit Doctor
  const handleEditDoctor = (updatedDoctor) => {
    setDepartments(departments.map(department => ({
      ...department,
      doctors: department.doctors.map(doctor =>
        doctor.id === updatedDoctor.id ? updatedDoctor : doctor
      ),
    })));
    setEditDoctorModalOpen(false);
  };

  // Delete Doctor
  const handleDeleteDoctor = (departmentId, doctorId) => {
    setDepartments(departments.map(department => 
      department.id === departmentId 
        ? { ...department, doctors: department.doctors.filter(doctor => doctor.id !== doctorId) }
        : department
    ));
  };

  // Toggle Holiday Status
  const toggleHolidayStatus = (departmentId, doctorId) => {
    setDepartments(departments.map(department =>
      department.id === departmentId
        ? {
            ...department,
            doctors: department.doctors.map(doctor =>
              doctor.id === doctorId
                ? { ...doctor, isOnHoliday: !doctor.isOnHoliday }
                : doctor
            ),
          }
        : department
    ));
  };

  return (
    <div className="p-6 space-y-8">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Doctors & Departments</h1>
        <button
          onClick={() => setDepartmentModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
        >
          + Add Department
        </button>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((department) => (
          <div key={department.id} className="bg-white p-4 rounded-lg shadow-lg space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{department.name}</h2>
              <button
                onClick={() => {
                  setSelectedDepartment(department.id);
                  setDoctorModalOpen(true);
                }}
                className="text-sm text-blue-500 hover:underline"
              >
                + Add Doctor
              </button>
            </div>
            <p className="text-gray-600">{department.description}</p>
            <div className="space-y-2">
              {department.doctors.length > 0 ? (
                department.doctors.map((doctor) => (
                  <div
                    key={doctor.id}
                    className={`bg-gray-50 p-3 rounded-md shadow-sm space-y-1 flex items-center ${
                      doctor.isOnHoliday ? "opacity-50" : ""
                    }`}
                  >
                    {doctor.photo && (
                      <img src={doctor.photo} alt="Doctor" className="w-10 h-10 rounded-full mr-3" />
                    )}
                    <div className="flex-1">
                      <p className="font-medium">{doctor.name}</p>
                      <p className="text-sm text-gray-500">{doctor.specialization}</p>
                      <p className="text-xs text-gray-500">
                        Working Days: {doctor.workingDays.join(", ")}
                      </p>
                      <p className="text-xs text-gray-500">
                        Working Hours: {doctor.workingHours.start} - {doctor.workingHours.end}
                      </p>
                      {doctor.isOnHoliday && (
                        <p className="text-xs text-red-500 font-semibold">On Holiday</p>
                      )}
                    </div>
                    <button
                      onClick={() => toggleHolidayStatus(department.id, doctor.id)}
                      className={`text-xs px-2 py-1 rounded ${
                        doctor.isOnHoliday ? "bg-green-500 text-white" : "bg-red-500 text-white"
                      }`}
                    >
                      {doctor.isOnHoliday ? "Activate" : "Holiday"}
                    </button>
                    <button
                      onClick={() => {
                        setSelectedDoctor(doctor);
                        setEditDoctorModalOpen(true);
                      }}
                      className="text-blue-500 hover:underline text-sm ml-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteDoctor(department.id, doctor.id)}
                      className="text-red-500 hover:underline text-sm ml-2"
                    >
                      Delete
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No doctors assigned yet.</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}
      {isDepartmentModalOpen && (
        <DepartmentModal onClose={() => setDepartmentModalOpen(false)} onAdd={handleAddDepartment} />
      )}
      {isDoctorModalOpen && (
        <DoctorModal
          departmentId={selectedDepartment}
          onClose={() => setDoctorModalOpen(false)}
          onAdd={handleAddDoctor}
        />
      )}
      {isEditDoctorModalOpen && (
        <EditDoctorModal
          doctor={selectedDoctor}
          onClose={() => setEditDoctorModalOpen(false)}
          onEdit={handleEditDoctor}
        />
      )}
    </div>
  );
}

export default DoctorsDepartments;
