import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
const Dashborad = () => {
  return (
    <React.Fragment>
      <div>
        <Link to="/admin-dashboard" className="btn btn-primary rounded">
          Admin DashBoard
        </Link>
        <Link to="/employee-dashboard" className="btn btn-success btn-rounded">
          Employee DashBoard
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Dashborad;
