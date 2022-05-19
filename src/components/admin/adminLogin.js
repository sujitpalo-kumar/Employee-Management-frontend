import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const AdminLogin = () => {
  let [admin, setAdmin] = useState({
    email: "",
    password: "",
  });

  let [adminError, setAdminError] = useState({
    emailError: null,
    passwordError: null,
  });

  // handle Email
  let handleEmail = (e) => {
    setAdmin({ ...admin, email: e.target.value });
    let regExp = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
    if (regExp.test(e.target.value)) {
      setAdminError({ ...adminError, emailError: "" });
    } else {
      setAdminError({
        ...adminError,
        emailError: "Enter a proper Email",
      });
    }
  };

  // handle password
  let handlePassword = (e) => {
    setAdmin({ ...admin, password: e.target.value });
    let regExp = /^[A-Za-z]\w{7,14}$/;
    if (regExp.test(e.target.value)) {
      setAdminError({ ...adminError, passwordError: "" });
    } else {
      setAdminError({
        ...adminError,
        passwordError: "Enter a proper Password",
      });
    }
  };

  // Register Employee
  let LoginAdmin = (event) => {
    event.preventDefault();
    let dataURL = `http://localhost:8080/app/user/adminSignIn`;
    Axios.post(dataURL, admin)
      .then((response) => {
        setSubmitted(true);
      })
      .catch((err) => {
        setAdminError(err);
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
                  <form onSubmit={LoginAdmin}>
                    <div className="form-group">
                      <input
                        name="email"
                        value={admin.email}
                        onChange={handleEmail}
                        type="email"
                        className={`form-control ${
                          adminError.emailError ? "is-invalid" : ""
                        }`}
                        placeholder="Email"
                      />
                      {adminError.emailError ? (
                        <small className="text-danger">
                          {adminError.emailError}
                        </small>
                      ) : null}
                    </div>
                    <div className="form-group">
                      <input
                        name="password"
                        value={admin.password}
                        onChange={handlePassword}
                        type="password"
                        className={`form-control ${
                          adminError.passwordError ? "is-invalid" : ""
                        }`}
                        placeholder="Password"
                      />
                      {adminError.passwordError ? (
                        <small className="text-danger">
                          {adminError.passwordError}
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
                    <Link to="/admin/register"> Register</Link>
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

export default AdminLogin;
