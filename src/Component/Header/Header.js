import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const navlink = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Shop",
    to: "/shop",
  },
  {
    title: "Order Review",
    to: "/orderReview",
  },
  {
    title: "Manage Inventory here",
    to: "/manageinventoryhere",
  },
];

const Header = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xl={12}>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </Col>
          <div className="nav">
            <Col lg={12}>
              <div className="nav-bar">
                <ul className="nav-items">
                  {navlink.map((nav) => {
                    return (
                      <li>
                        <Link to={nav.to}>{nav.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Header;
