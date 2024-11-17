// src/dashboard/dashpages/DepartmentModal.jsx
import React, { useState } from 'react';

function DepartmentModal({ onClose, onAdd }) {
  const [departmentName, setDepartmentName] = useState('');
  const [description, setDescription] = useState('');

  const handleAddDepartment = () => {
    if (departmentName) {
      onAdd({ id: Date.now(), name: departmentName, description });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Add Department</h2>
        <input
          type="text"
          placeholder="Department Name"
          className="w-full p-2 border rounded"
          value={departmentName}
          onChange={(e) => setDepartmentName(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-md">Cancel</button>
          <button onClick={handleAddDepartment} className="px-4 py-2 bg-blue-500 text-white rounded-md">Add Department</button>
        </div>
      </div>
    </div>
  );
}

export default DepartmentModal;
