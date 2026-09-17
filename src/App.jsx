import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Form from './pages/Form';
import DailyReports from './pages/DailyReports';
import './index.css';

function App() {
  const [reports, setReports] = useState([]);

  const addReport = (report) => {
    const newReport = {
      ...report,
      id: Date.now().toString(),
      submittedAt: new Date().toISOString(),
      status: '提出済み' // Submitted
    };
    setReports(prev => [newReport, ...prev]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/daily_report_app/home" replace />} />
        <Route path="/daily_report_app/home" element={<Home />} />
        <Route path="/daily_report_app/form" element={<Form onAddReport={addReport} />} />
        <Route path="/daily_report_app/daily-reports" element={<DailyReports reports={reports} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
