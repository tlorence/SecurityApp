import React, { useContext,useState } from "react";
import {
  FaTh,
  FaBars,

  FaUser,
  FaFile,
  FaMailBulk
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const Navbar= (props) => {
  console.log(props);
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/userAccount",
      name: "Add User",
      className: "UserAccount",
      icon: <FaUser />,
    },
    {
      path: "/fileUpload",
      name: "File Upload",
      className: "FileUpload",
      icon: <FaFile />,
    },
    {
      path: "/sendMessage",
      name: "Message",
      className: "SendMessage",
      icon: <FaMailBulk />,
    },
  ];
  return (
    <div className="d-flex">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          {/* <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1> */}
          <img
            style={{ display: isOpen ? "block" : "none" }}
            className="logo"
          />
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link text-decoration-none"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        <hr
          className="sidebarBreak"
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            marginBottom: "20px",
          }}
        ></hr>
      </div>
      <main>{props.child}</main>
    </div>
  );
}
export default Navbar;