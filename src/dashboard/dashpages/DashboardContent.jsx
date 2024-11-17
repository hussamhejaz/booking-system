// src/dashboard/dashpages/DashboardContent.js
import React, { useState } from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const mockMetrics = {
  bookingsToday: 25,
  bookingsThisWeek: 150,
  pendingApprovals: 5,
  notifications: 3,
};

const mockUpcomingAppointments = [
  { id: 1, patientName: 'John Doe', department: 'Cardiology', doctor: 'Dr. Smith', time: '10:30 AM' },
  { id: 2, patientName: 'Alice Johnson', department: 'Orthopedics', doctor: 'Dr. Lee', time: '11:00 AM' },
  { id: 3, patientName: 'Bob Williams', department: 'Neurology', doctor: 'Dr. Brown', time: '11:30 AM' },
];

const mockRecentActivity = [
  { id: 1, activity: 'New booking: John Doe with Dr. Smith', timestamp: '5 mins ago' },
  { id: 2, activity: 'Appointment canceled: Alice Johnson with Dr. Lee', timestamp: '10 mins ago' },
  { id: 3, activity: 'Pending approval: Bob Williams with Dr. Brown', timestamp: '15 mins ago' },
];

const appointmentStatusData = {
  labels: ['Confirmed', 'Pending', 'Canceled'],
  datasets: [
    {
      label: 'Appointment Status',
      data: [60, 30, 10], // Example data
      backgroundColor: ['#4caf50', '#ffeb3b', '#f44336'],
      hoverOffset: 4,
    },
  ],
};

function DashboardContent() {
  const [metrics] = useState(mockMetrics);
  const [upcomingAppointments] = useState(mockUpcomingAppointments);
  const [recentActivity] = useState(mockRecentActivity);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter appointments based on search query
  const filteredUpcomingAppointments = upcomingAppointments.filter(appointment =>
    appointment.patientName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Admin Dashboard</h1>
      <p className="text-lg mb-8">This is your central hub to manage the hospital booking system.</p>

      {/* Metrics and Appointment Status Breakdown */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-blue-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Bookings Today</h2>
          <p className="text-2xl font-bold">{metrics.bookingsToday}</p>
          <p className="text-sm text-green-600">+10% from yesterday</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Bookings This Week</h2>
          <p className="text-2xl font-bold">{metrics.bookingsThisWeek}</p>
          <p className="text-sm text-red-600">-5% from last week</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Pending Approvals</h2>
          <p className="text-2xl font-bold">{metrics.pendingApprovals}</p>
        </div>
        <div className="bg-red-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Notifications</h2>
          <p className="text-2xl font-bold">{metrics.notifications}</p>
        </div>
      </div>

      <div className="grid gap-6 mb-8 md:grid-cols-1 lg:grid-cols-2">
        {/* Appointment Status Breakdown - Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Appointment Status Breakdown</h2>
          <Pie data={appointmentStatusData} />
        </div>

        {/* Recent Activity Feed */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul>
            {recentActivity.map(activity => (
              <li
                key={activity.id}
                className="flex items-center mb-4 p-3 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Icon */}
                <div className={`flex items-center justify-center w-10 h-10 rounded-full mr-4 ${
                  activity.activity.includes("New booking")
                    ? "bg-green-100 text-green-600"
                    : activity.activity.includes("canceled")
                    ? "bg-red-100 text-red-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}>
                  {/* Choose icon based on activity type */}
                  {activity.activity.includes("New booking") && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {activity.activity.includes("canceled") && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                  {activity.activity.includes("Pending approval") && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
                      />
                    </svg>
                  )}
                </div>

                {/* Activity Details */}
                <div>
                  <p className="text-sm font-medium text-gray-800">{activity.activity}</p>
                  <p className="text-xs text-gray-500">{activity.timestamp}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Search bar with icon */}
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search by patient name..."
          className="p-2 pl-10 border border-gray-300 rounded w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchIcon className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
      </div>

      {/* Upcoming Appointments Table */}
      <section className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Patient</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Department</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Doctor</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredUpcomingAppointments.length > 0 ? (
              filteredUpcomingAppointments.map(appointment => (
                <tr key={appointment.id}>
                  <td className="px-4 py-2 text-left text-sm text-gray-900">{appointment.patientName}</td>
                  <td className="px-4 py-2 text-left text-sm text-gray-900">{appointment.department}</td>
                  <td className="px-4 py-2 text-left text-sm text-gray-900">{appointment.doctor}</td>
                  <td className="px-4 py-2 text-left text-sm text-gray-900">{appointment.time}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-2 text-left text-sm text-gray-500" colSpan="4">No appointments found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default DashboardContent;
