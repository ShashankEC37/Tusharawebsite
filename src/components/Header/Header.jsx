import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/Our_Facility",
    display: "Our Facility",
  },

  {
    path: "/Products",
    display: "Products",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">


      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
       
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
          <Link to="/" style={{ textDecoration: "none" }}>
      <div className="logo">
        <h1 style={{ color: "white" }}>Tushara Insdusties</h1>
      </div>
    </Link>
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
             
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

         
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
