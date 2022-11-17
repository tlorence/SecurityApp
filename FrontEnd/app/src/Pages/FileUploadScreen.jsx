import React, { Component } from "react";
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
import { postReq } from "../Util/httpReq";
import { FILEUPLOAD } from "../Util/endpoints";
import Swal from "sweetalert2";

export default class FileUpload extends Component {
  constructor() {
    super();
    this.state = {
      selectedFile: "",
    };
    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onFileChange(e) {
    let files = e.target.files;

    let fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);
    fileReader.onload = (event) => {
      this.setState({
        selectedFile: event.target.result,
      });
    };
  }
  onSubmit() {
    console.log();
    const formData = { file: this.state.selectedFile };
    postReq(FILEUPLOAD, formData)
      .then((res) => {
        if (res.response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "File Upload Successfull",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
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
                <br />
                <h2 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  File Upload
                </h2>
                <br></br>
                <br></br>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="file me-3" size="lg" />
                  <MDBFile
                    label=""
                    id="customFile"
                    onChange={this.onFileChange}
                  />
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
                  <MDBBtn
                    className="mb-4"
                    size="lg"
                    type="Submit"
                    onClick={this.onSubmit}
                  >
                    Upload
                  </MDBBtn>
                </div>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage src={fileImg} fluid />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    );
  }
}
