import React, { useState } from "react";
import Axios from "axios";

const EmployeeRegister = () => {
  let [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
  });

  let [employeeError, setEmployeeError] = useState({
    nameError: null,
    emailError: null,
    passwordError: null,
  });
  let [submitted, setSubmitted] = useState(false);

  // handle username
  let handleName = (e) => {
    setEmployee({ ...employee, name: e.target.value });
    let regExp = /^[a-zA-Z]/;
    if (regExp.test(e.target.value)) {
      setEmployeeError({ ...employeeError, nameError: "" });
    } else {
      setEmployeeError({ ...employeeError, nameError: "Enter a proper Name" });
    }
  };

  // handle Email
  let handleEmail = (e) => {
    setEmployee({ ...employee, email: e.target.value });
    let regExp = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
    if (regExp.test(e.target.value)) {
      setEmployeeError({ ...employeeError, emailError: "" });
    } else {
      setEmployeeError({
        ...employeeError,
        emailError: "Enter a proper Email",
      });
    }
  };

  // handle password
  let handlePassword = (e) => {
    setEmployee({ ...employee, password: e.target.value });
    let regExp = /^[A-Za-z]\w{7,14}$/;
    if (regExp.test(e.target.value)) {
      setEmployeeError({ ...employeeError, passwordError: "" });
    } else {
      setEmployeeError({
        ...employeeError,
        passwordError: "Enter a proper Password",
      });
    }
  };
  // Register Employee
  let RegisterEmployee = (event) => {
    event.preventDefault();
    let dataURL = `http://localhost:8080/app/user/employeeSignUp`;
    Axios.post(dataURL, employee)
      .then((response) => {
        setSubmitted(true);
      })
      .catch((err) => {
        setEmployeeError(err);
      });
  };

  return (
    <React.Fragment>
      <section className="p-3 bg-brains">
        <div className="container ">
          <div className="row animated flipInY">
            <div className="col">
              <p className="h3">
                <i className="fa fa-cloud-upload-alt" />
                Employee Register
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-3 animated zoomInLeft">
          <div className="card">
            <div className="card-header bg-dark text-brains">
              <p className="h4">Register Here</p>
            </div>
            <div className="card-body bg-brains">
              <form onSubmit={RegisterEmployee}>
                <div className="form-group">
                  <input
                    name="name"
                    value={employee.name}
                    onChange={handleName}
                    type="text"
                    className={`form-control ${
                      employeeError.nameError ? "is-invalid" : ""
                    }`}
                    placeholder="Email"
                  />
                  {employeeError.nameError ? (
                    <small className="text-danger">
                      {employeeError.nameError}
                    </small>
                  ) : null}
                </div>
                <div className="form-group">
                  <input
                    name="email"
                    value={employee.email}
                    onChange={handleEmail}
                    type="email"
                    className={`form-control ${
                      employeeError.emailError ? "is-invalid" : ""
                    }`}
                    placeholder="Email"
                  />
                  {employeeError.emailError ? (
                    <small className="text-danger">
                      {employeeError.emailError}
                    </small>
                  ) : null}
                </div>
                <div className="form-group">
                  <input
                    name="password"
                    value={employee.password}
                    onChange={handlePassword}
                    type="password"
                    className={`form-control ${
                      employeeError.passwordError ? "is-invalid" : ""
                    }`}
                    placeholder="Password"
                  />
                  {employeeError.passwordError ? (
                    <small className="text-danger">
                      {employeeError.passwordError}
                    </small>
                  ) : null}
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-dark text-brains btn-sm"
                    value="Register"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default EmployeeRegister;
