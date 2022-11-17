import React, { Component } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "./Login.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { postReq } from "../Util/httpReq";
import { LOGIN } from "../Util/endpoints";
import { setUserAuthToken } from "../Util/localStorage";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    postReq(LOGIN, data)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setUserAuthToken(res.data.token);
        }
      })
      .catch((res) => {
        if (res.response.status === 401) {
          Swal.fire({
            icon: "error",
            title: "Login failed try again!",
          });
        }
      });
  };

  render() {
    return (
      <MDBContainer fluid className="p-3 my-5">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid"
              alt="Phone image"
            />
          </MDBCol>
          <MDBCol col="4" md="4">
            <h3
              className="fw-normal mb-3 ps-1 pb-3"
              style={{ letterSpacing: "1px" }}
            >
              Log in
            </h3>

            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              type="email"
              size="lg"
              placeholder="Email"
              required
              value={this.state.username}
              name="username"
              onChange={this.handleChange}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              type="password"
              size="lg"
              placeholder="Password"
              required
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div>

            <MDBBtn
              className="mb-3 w-100"
              size="lg"
              onClick={this.handleSubmit}
            >
              Sign in
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default Login;
