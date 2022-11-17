import React, { Component } from 'react';
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
  MDBFile,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import fileImg from "../Img/fileUpload.jpeg";

export default class FileUpload extends Component {
    render(){
      return (
        <MDBContainer fluid>
        {/* <Navbar/> */}
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
            File Upload
          </h2>
          <br></br>
          <br></br>

          <div className="d-flex flex-row align-items-center mb-4 ">
            <MDBIcon fas icon="file me-3" size="lg" />
            <MDBFile label='' id='customFile' />
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
          <MDBBtn className="mb-4" size="lg" type='Submit'>
            Upload
          </MDBBtn>
          </div>
        </MDBCol>
        

        <MDBCol
          md="10"
          lg="6"
          className="order-1 order-lg-2 d-flex align-items-center"
        >
          <MDBCardImage
            src={fileImg}
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