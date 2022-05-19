import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashborad from "./components/Dashboard";
import AdminDashboard from "./components/AdminDashboard";
import EmployeeDashboard from "./components/EmployeeDashboard";
import EmployeeRegister from "./components/employee/EmployeeRegister";
import EmployeeLogin from "./components/employee/EmployeeLogin";
import AdminRegister from "./components/admin/adminRegister";
import AdminLogin from "./components/admin/adminLogin";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashborad />} />
          <Route exact path="/admin-dashboard" element={<AdminDashboard />} />
          <Route
            exact
            path="/employee-dashboard"
            element={<EmployeeDashboard />}
          />
          <Route
            exact
            path="/employee-register"
            element={<EmployeeRegister />}
          />
          <Route exact path="/employee-login" element={<EmployeeLogin />} />
          <Route exact path="/admin-register" element={<AdminRegister />} />
          <Route exact path="/admin-login" element={<AdminLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
