// src/dashboard/dashpages/ReportsAndAnalytics.jsx
import React from 'react';
import { Pie, Line, Bar } from 'react-chartjs-2';
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary scales and elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ReportsAndAnalytics() {
  const appointmentStats = {
    total: 120,
    confirmed: 90,
    pending: 20,
    canceled: 10,
  };

  const patientAgeData = {
    labels: ['0-18', '19-35', '36-50', '51+'],
    datasets: [{ data: [20, 50, 30, 20], backgroundColor: ['#4caf50', '#ffeb3b', '#f44336', '#2196f3'] }],
  };

  const doctorUtilizationData = {
    labels: ['Dr. Smith', 'Dr. Lee', 'Dr. Brown', 'Dr. Wilson'],
    datasets: [{ label: 'Utilization %', data: [85, 60, 70, 90], backgroundColor: '#4caf50' }],
  };

  const monthlyAppointmentsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{ label: 'Appointments', data: [30, 40, 35, 50, 60, 45], borderColor: '#2196f3', fill: false }],
  };

  // Function to download data as PDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text('Reports & Analytics', 10, 10);

    // Add data rows
    doc.text(`Total Appointments: ${appointmentStats.total}`, 10, 20);
    doc.text(`Confirmed Appointments: ${appointmentStats.confirmed}`, 10, 30);
    doc.text(`Pending Appointments: ${appointmentStats.pending}`, 10, 40);
    doc.text(`Canceled Appointments: ${appointmentStats.canceled}`, 10, 50);

    // Save as PDF
    doc.save('reports_analytics.pdf');
  };

  // Function to download data as Excel
  const downloadExcel = () => {
    const data = [
      ['Metric', 'Value'],
      ['Total Appointments', appointmentStats.total],
      ['Confirmed', appointmentStats.confirmed],
      ['Pending', appointmentStats.pending],
      ['Canceled', appointmentStats.canceled],
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Reports & Analytics');
    XLSX.writeFile(workbook, 'reports_analytics.xlsx');
  };

  return (
    <div className="p-6 space-y-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Reports & Analytics</h1>
        <div>
          <button onClick={downloadPDF} className="bg-blue-600 text-white px-4 py-2 rounded mr-4">
            Download PDF
          </button>
          <button onClick={downloadExcel} className="bg-green-600 text-white px-4 py-2 rounded">
            Download Excel
          </button>
        </div>
      </div>

      {/* Appointment Statistics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="bg-blue-100 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Total Appointments</h2>
          <p className="text-3xl font-bold">{appointmentStats.total}</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Confirmed</h2>
          <p className="text-3xl font-bold">{appointmentStats.confirmed}</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Pending</h2>
          <p className="text-3xl font-bold">{appointmentStats.pending}</p>
        </div>
        <div className="bg-red-100 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Canceled</h2>
          <p className="text-3xl font-bold">{appointmentStats.canceled}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Patient Age Distribution</h2>
          <Pie data={patientAgeData} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Doctor Utilization</h2>
          <Bar data={doctorUtilizationData} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Monthly Appointment Trends</h2>
          <Line data={monthlyAppointmentsData} />
        </div>
      </div>
    </div>
  );
}

export default ReportsAndAnalytics;
