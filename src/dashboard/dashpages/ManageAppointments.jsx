import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const mockAppointments = [
  { id: 1, patientName: 'John Doe', phone: '123-456-7890', email: 'john@example.com', department: 'Cardiology', doctor: 'Dr. Smith', time: '10:30 AM', date: '2024-11-10', status: 'Attended' },
  { id: 2, patientName: 'Alice Johnson', phone: '234-567-8901', email: 'alice@example.com', department: 'Orthopedics', doctor: 'Dr. Lee', time: '11:00 AM', date: '2024-11-11', status: 'Not Attended' },
  { id: 3, patientName: 'Bob Williams', phone: '345-678-9012', email: 'bob@example.com', department: 'Neurology', doctor: 'Dr. Brown', time: '11:30 AM', date: '2024-11-12', status: 'Pending' },
  { id: 4, patientName: 'Charlie Davis', phone: '456-789-0123', email: 'charlie@example.com', department: 'Cardiology', doctor: 'Dr. Smith', time: '12:00 PM', date: '2024-11-10', status: 'Rejected' },
];

function ManageAppointments() {
  const [appointments, setAppointments] = useState(mockAppointments);
  const [searchQuery, setSearchQuery] = useState('');
  const [dateQuery, setDateQuery] = useState('');

  const handleFilter = () => {
    const filteredAppointments = mockAppointments.filter(
      appointment =>
        (appointment.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
         appointment.phone.includes(searchQuery)) &&
        (!dateQuery || appointment.date === dateQuery)
    );
    setAppointments(filteredAppointments);
  };

  const handleStatusChange = (id, newStatus) => {
    setAppointments(prevAppointments =>
      prevAppointments.map(appointment =>
        appointment.id === id ? { ...appointment, status: newStatus } : appointment
      )
    );
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6', textAlign: 'center', marginBottom: '20px' }}>Manage Appointments</h1>

      {/* Search and Date Filter Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <div style={{ position: 'relative', width: '100%' }}>
          <input
            type="text"
            placeholder="Search by Name or Phone Number"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: '100%', padding: '10px 40px 10px 15px', borderRadius: '5px', border: '1px solid #ddd' }}
          />
          <FaSearch style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
        </div>
        <input
          type="date"
          value={dateQuery}
          onChange={(e) => setDateQuery(e.target.value)}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
        />
        <button
          onClick={handleFilter}
          style={{ backgroundColor: '#3b82f6', color: '#fff', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', border: 'none' }}
        >
          Search
        </button>
      </div>

      {/* Appointments Table */}
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f3f4f6' }}>
              <th style={{ textAlign: 'left', padding: '15px', fontWeight: '600', color: '#555' }}>Name</th>
              <th style={{ textAlign: 'left', padding: '15px', fontWeight: '600', color: '#555' }}>Phone</th>
              <th style={{ textAlign: 'left', padding: '15px', fontWeight: '600', color: '#555' }}>Email</th>
              <th style={{ textAlign: 'left', padding: '15px', fontWeight: '600', color: '#555' }}>Department</th>
              <th style={{ textAlign: 'left', padding: '15px', fontWeight: '600', color: '#555' }}>Doctor</th>
              <th style={{ textAlign: 'left', padding: '15px', fontWeight: '600', color: '#555' }}>Date</th>
              <th style={{ textAlign: 'left', padding: '15px', fontWeight: '600', color: '#555' }}>Time</th>
              <th style={{ textAlign: 'center', padding: '15px', fontWeight: '600', color: '#555' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length > 0 ? (
              appointments.map(appointment => (
                <tr key={appointment.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '15px' }}>{appointment.patientName}</td>
                  <td style={{ padding: '15px' }}>{appointment.phone}</td>
                  <td style={{ padding: '15px' }}>{appointment.email}</td>
                  <td style={{ padding: '15px' }}>{appointment.department}</td>
                  <td style={{ padding: '15px' }}>{appointment.doctor}</td>
                  <td style={{ padding: '15px' }}>{appointment.date}</td>
                  <td style={{ padding: '15px' }}>{appointment.time}</td>
                  <td style={{ padding: '15px', textAlign: 'center' }}>
                    <select
                      value={appointment.status}
                      onChange={(e) => handleStatusChange(appointment.id, e.target.value)}
                      style={{
                        padding: '5px 10px',
                        borderRadius: '5px',
                        backgroundColor: appointment.status === 'Attended' ? '#e8f5e9' : appointment.status === 'Rejected' ? '#fdecea' : appointment.status === 'Pending' ? '#fff3cd' : '#ffebee',
                        color: appointment.status === 'Attended' ? '#4caf50' : appointment.status === 'Rejected' ? '#f44336' : appointment.status === 'Pending' ? '#ffc107' : '#ff5722',
                        border: 'none',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="Attended">Attended</option>
                      <option value="Not Attended">Not Attended</option>
                      <option value="Pending">Pending</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" style={{ padding: '20px', textAlign: 'center', color: '#999' }}>No appointments found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageAppointments;
