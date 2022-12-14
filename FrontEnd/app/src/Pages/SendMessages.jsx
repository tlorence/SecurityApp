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
  MDBTextArea,
  MDBFile,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import fileImg from "../Img/message.webp";
import axios from "axios";
import { postReq } from "../Util/httpReq";
import { MESSAGE } from "../Util/endpoints";
import Swal from "sweetalert2";

export default class SendMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      message: "",
      messages: [],
    };
    this.onSubmit = this.onSubmit.bind(this);
    
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit() {
    let body = {
      subject: this.state.subject,
      message: this.state.message,
    };
    postReq(MESSAGE, body)
      .then((res) => {
        if (res.response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfull",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { message } = this.state;
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
                <h2 classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Send Message
                </h2>
                <br></br>
                <br></br>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  {/* <MDBIcon fas icon="user me-3" size="lg" /> */}
                  <MDBInput
                    label="Subject"
                    id="form1"
                    type="text"
                    className="w-100"
                    name="subject"
                  />
                </div>
                <div className="d-flex flex-row align-items-center mb-4 ">
                  {/* <MDBIcon fas icon="user me-3" size="lg" /> */}
                  <MDBTextArea
                    label="Message"
                    id="form2"
                    type="text"
                    className="w-100"
                    name="message"
                  />
                </div>
                <div>
                  <MDBBtn className="mb-4" size="lg" type="Submit" onClick={this.onSubmit}>
                    Send
                  </MDBBtn>
                </div>
              </MDBCol>

              <MDBCol
                md="10"
                lg="2"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <table class="table table-hover">
                  <tr className="MessageLists">
                    <th className="ps-3">Subject</th>
                    <th className="ps-3">Message</th>
                  </tr>
                  {/* {message.map((item) => {
                return (
                  <tr
                    key={message.messageNo}
                    className="InventoryListmessages text-white"
                  >
                    <td className="ps-4">{}</td>
                    <td className="ps-4">{}</td>
                  </tr>
                );
              })} */}
                </table>
              </MDBCol>
              <MDBCol
                md="10"
                lg="4"
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
