import React, { Component,useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox,
  } from "mdb-react-ui-kit";

import './UserAccount.css'

export default class UserAccount extends Component {
    render(){
        return (
        <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
                <br></br>
                <br/>
              <h2 classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Add User
              </h2>
              <br></br>
              <br></br>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label="Username"
                  id="form1"
                  type="text"
                  className="w-100"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput label="Email" id="form2" type="email" />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput label="Password" id="form3" type="password" />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size="lg" />
                <Form.Select aria-label="Default select example">
                    <option hidden="true">User Account Type</option>
                    <option value="1">Manager</option>
                    <option value="2">Worker</option>
                </Form.Select>
              </div>

              {/* <div className="mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Subscribe to our newsletter"
                />
              </div> */}
            <div>
              <MDBBtn className="mb-4" size="lg">
                Add User
              </MDBBtn>
              </div>
            </MDBCol>
            

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
}