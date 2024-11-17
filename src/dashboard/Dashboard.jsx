// src/dashboard/Dashboard.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardContent from './dashpages/DashboardContent';
import ManageAppointments from './dashpages/ManageAppointments';
import DoctorsAndDepartments from './dashpages/DoctorsDepartments';
import TopSpecialists from './dashpages/TopSpecialists';
import ReportsAndAnalytics from './dashpages/ReportsAndAnalytics';
import Advertisements from './dashpages/Advertisements';

import Settings from './dashpages/Settings'; // Import the Settings component

function Dashboard() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <DashboardSidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />

      {/* Main content with conditional margin */}
      <div className={`transition-all duration-300 ${isSidebarExpanded ? 'ml-56' : 'ml-20'} flex-1 p-6`}>
        <Routes>
          <Route path="/" element={<DashboardContent />} />
          <Route path="/appointments" element={<ManageAppointments />} />
          <Route path="/doctors-departments" element={<DoctorsAndDepartments />} />
          <Route path="/top-specialists" element={<TopSpecialists />} />
          <Route path="/reports" element={<ReportsAndAnalytics />} />
          <Route path="/advertisements" element={<Advertisements />} />
         
          <Route path="/settings" element={<Settings />} /> {/* Add the Settings route */}
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
