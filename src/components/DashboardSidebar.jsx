// src/components/DashboardSidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, CalendarIcon, UsersIcon, ChartBarIcon, CogIcon, MenuIcon, LogoutIcon, SpeakerphoneIcon, BriefcaseIcon, StarIcon } from '@heroicons/react/solid';

function DashboardSidebar({ isExpanded, toggleSidebar }) {
  const location = useLocation();

  const menuItems = [
    { name: 'Home', icon: <HomeIcon className="w-5 h-5" />, path: '/dashboard' },
    { name: 'Manage Appointments', icon: <CalendarIcon className="w-5 h-5" />, path: '/dashboard/appointments' },
    { name: 'Doctors & Departments', icon: <BriefcaseIcon className="w-5 h-5" />, path: '/dashboard/doctors-departments' },
    { name: 'Top Specialists', icon: <StarIcon className="w-5 h-5" />, path: '/dashboard/top-specialists' },
    { name: 'Reports & Analytics', icon: <ChartBarIcon className="w-5 h-5" />, path: '/dashboard/reports' },
    { name: 'Advertisements', icon: <SpeakerphoneIcon className="w-5 h-5" />, path: '/dashboard/advertisements' },
    { name: 'Settings', icon: <CogIcon className="w-5 h-5" />, path: '/dashboard/settings' },
  ];

  return (
    <div className={`fixed top-0 left-0 bg-gray-900 text-white ${isExpanded ? 'w-56' : 'w-20'} h-screen p-4 shadow-lg flex flex-col transition-all duration-300`}>
      {/* Toggle Button */}
      <button onClick={toggleSidebar} className="text-gray-400 hover:text-white mb-4 self-center">
        <MenuIcon className="w-6 h-6" />
      </button>

      {/* Sidebar Title - Only visible when expanded */}
      {isExpanded && (
        <h2 className="text-xl font-semibold mb-6 text-indigo-500 tracking-wide text-center">LOGO</h2>
      )}

      {/* Navigation Links */}
      <div className="flex flex-col gap-3">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center ${isExpanded ? 'gap-3' : 'justify-center'} p-2 rounded-md font-medium transition-colors text-sm duration-300 
              ${location.pathname === item.path ? 'bg-indigo-700 text-white' : 'hover:bg-gray-700 hover:text-indigo-400'}`}
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800">
              {item.icon}
            </div>
            {isExpanded && <span>{item.name}</span>}
          </Link>
        ))}
      </div>

      {/* Logout Button */}
      <button
        onClick={() => console.log("Logging out...")}
        className={`flex items-center ${isExpanded ? 'gap-3' : 'justify-center'} p-2 mt-auto rounded-md text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300`}
      >
        <LogoutIcon className="w-5 h-5" />
        {isExpanded && <span>Logout</span>}
      </button>

      {/* Footer - Only visible when expanded */}
      {isExpanded && (
        <div className="text-center text-gray-500 text-xs pt-6">
          © 2024 Your Company
        </div>
      )}
    </div>
  );
}

export default DashboardSidebar;
