import React from "react";
import { Link } from "react-router-dom";
const AdminDashboard = () => {
  return (
    <React.Fragment>
      <div>
        <Link to="/admin-register" className="btn btn-secondary rounded">
          SignUp
        </Link>
        <Link to="/admin-login" className="btn btn-warning btn-rounded">
          Login
        </Link>
      </div>
    </React.Fragment>
  );
};

export default AdminDashboard;
