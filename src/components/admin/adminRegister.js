import React, { useState } from "react";

const AdminRegister = () => {
  let [admin, setAdmin] = useState({
    name: "",
    email: "",
    password: "",
  });

  let [adminError, setAdminError] = useState({
    nameError: null,
    emailError: null,
    passwordError: null,
  });

  // handle username
  let handleName = (e) => {
    setAdmin({ ...admin, name: e.target.value });
    let regExp = /^[a-zA-Z]/;
    if (regExp.test(e.target.value)) {
      setAdminError({ ...adminError, nameError: "" });
    } else {
      setAdminError({ ...adminError, nameError: "Enter a proper Name" });
    }
  };

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
  let RegisterAdmin = (event) => {
    event.preventDefault();
    let dataURL = `http://localhost:8080/app/user/adminSignUp`;
    Axios.post(dataURL, admin)
      .then((response) => {
        setAdmin(true);
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
                <i className="fa fa-cloud-upload-alt" />
                Admin Register
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
              <form>
                <div className="form-group">
                  <input
                    name="name"
                    value={admin.name}
                    onChange={handleName}
                    type="text"
                    className={`form-control ${
                      adminError.nameError ? "is-invalid" : ""
                    }`}
                    placeholder="Email"
                  />
                  {adminError.nameError ? (
                    <small className="text-danger">
                      {adminError.nameError}
                    </small>
                  ) : null}
                </div>
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

export default AdminRegister;
