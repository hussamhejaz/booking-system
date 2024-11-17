// src/dashboard/dashpages/Settings.jsx
import React, { useState } from 'react';
import { FaUser, FaLock, FaBell, FaPalette, FaShieldAlt, FaLanguage } from 'react-icons/fa';

function Settings() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: null,
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
  });

  const [theme, setTheme] = useState('Light'); // Theme state
  const [language, setLanguage] = useState('English'); // Language state
  const [twoFactorAuth, setTwoFactorAuth] = useState(false); // Privacy setting
  const [openSection, setOpenSection] = useState(null); // For toggling sections

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile({ ...profile, profilePicture: URL.createObjectURL(file) });
    }
  };

  const handleNotificationsChange = (e) => {
    const { name, checked } = e.target;
    setNotifications({ ...notifications, [name]: checked });
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      {/* Profile Settings Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSection('profile')}
        >
          <div className="flex items-center space-x-2">
            <FaUser className="text-gray-600" />
            <h2 className="text-xl font-semibold">Profile Settings</h2>
          </div>
          <span>{openSection === 'profile' ? '-' : '+'}</span>
        </div>
        {openSection === 'profile' && (
          <div className="mt-4 space-y-4">
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              placeholder="Name"
              className="border p-2 rounded w-full"
            />
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              placeholder="Email"
              className="border p-2 rounded w-full"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="border p-2 rounded w-full"
            />
            {profile.profilePicture && (
              <img
                src={profile.profilePicture}
                alt="Profile"
                className="mt-4 w-20 h-20 object-cover rounded-full shadow"
              />
            )}
          </div>
        )}
      </div>

      {/* Account Settings Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSection('account')}
        >
          <div className="flex items-center space-x-2">
            <FaLock className="text-gray-600" />
            <h2 className="text-xl font-semibold">Account Settings</h2>
          </div>
          <span>{openSection === 'account' ? '-' : '+'}</span>
        </div>
        {openSection === 'account' && (
          <div className="mt-4 space-y-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
              Change Password
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded w-full">
              Deactivate Account
            </button>
          </div>
        )}
      </div>

      {/* Notification Preferences Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSection('notifications')}
        >
          <div className="flex items-center space-x-2">
            <FaBell className="text-gray-600" />
            <h2 className="text-xl font-semibold">Notification Preferences</h2>
          </div>
          <span>{openSection === 'notifications' ? '-' : '+'}</span>
        </div>
        {openSection === 'notifications' && (
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="email"
                checked={notifications.email}
                onChange={handleNotificationsChange}
                className="mr-2"
              />
              <label>Email Notifications</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="sms"
                checked={notifications.sms}
                onChange={handleNotificationsChange}
                className="mr-2"
              />
              <label>SMS Notifications</label>
            </div>
          </div>
        )}
      </div>

      {/* Theme Preferences Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSection('theme')}
        >
          <div className="flex items-center space-x-2">
            <FaPalette className="text-gray-600" />
            <h2 className="text-xl font-semibold">Theme Preferences</h2>
          </div>
          <span>{openSection === 'theme' ? '-' : '+'}</span>
        </div>
        {openSection === 'theme' && (
          <div className="mt-4 space-y-4">
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="border p-2 rounded w-full"
            >
              <option value="Light">Light</option>
              <option value="Dark">Dark</option>
            </select>
          </div>
        )}
      </div>

      {/* Privacy and Security Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSection('privacy')}
        >
          <div className="flex items-center space-x-2">
            <FaShieldAlt className="text-gray-600" />
            <h2 className="text-xl font-semibold">Privacy and Security</h2>
          </div>
          <span>{openSection === 'privacy' ? '-' : '+'}</span>
        </div>
        {openSection === 'privacy' && (
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={twoFactorAuth}
                onChange={(e) => setTwoFactorAuth(e.target.checked)}
                className="mr-2"
              />
              <label>Enable Two-Factor Authentication</label>
            </div>
          </div>
        )}
      </div>

      {/* Language Selection Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSection('language')}
        >
          <div className="flex items-center space-x-2">
            <FaLanguage className="text-gray-600" />
            <h2 className="text-xl font-semibold">Language Preferences</h2>
          </div>
          <span>{openSection === 'language' ? '-' : '+'}</span>
        </div>
        {openSection === 'language' && (
          <div className="mt-4 space-y-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border p-2 rounded w-full"
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
}

export default Settings;
