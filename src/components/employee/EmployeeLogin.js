import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";

const EmployeeLogin = () => {
  // let dispatch = useDispatch();
  // let history = useHistory();

  let [employee, setEmployee] = useState({
    email: "",
    password: "",
  });

  let [employeeError, setEmployeeError] = useState({
    emailError: null,
    passwordError: null,
  });

  let [submitted, setSubmitted] = useState(false);

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

  // Login Employee
  let LoginEmployee = (event) => {
    event.preventDefault();
    let dataURL = `http://localhost:8080/app/user/employeeSignIn`;
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
                <i className="fa fa-sign-in-alt" /> Login Here
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4 m-auto">
              <div className="card animated jello">
                <div className="card-header bg-dark text-brains">
                  <p className="h4">Login Here</p>
                </div>
                <div className="card-body bg-brains">
                  <form onSubmit={LoginEmployee}>
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
                    <input
                      type="submit"
                      className="btn btn-dark text-brains btn-sm"
                      value="Login"
                    />
                  </form>
                  <small className="font-weight-bold">
                    Don't have an account ?
                    <Link to="/users/register"> Register</Link>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default EmployeeLogin;
