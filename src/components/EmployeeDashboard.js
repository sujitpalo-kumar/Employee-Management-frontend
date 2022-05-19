import React from "react";
import { Link } from "react-router-dom";
const EmployeeDashboard = () => {
  return (
    <React.Fragment>
      <div>
        <Link to="/employee-register" className="btn btn-danger rounded">
          SignUp
        </Link>
        <Link to="/employee-login" className="btn btn-info btn-rounded">
          Login
        </Link>
      </div>
    </React.Fragment>
  );
};

export default EmployeeDashboard;
