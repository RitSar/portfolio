import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Rittik_Sarkar
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact me
              </Link>
            </li>

            <li>
              <a
                href="https://docs.google.com/document/d/1Y9MOuSEEcdmue51whG7lymOZHy1GqrM3pLPvTg5C9qE/edit?usp=sharing"
                className="nav-links-mobile"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
              >
                Résumé
              </a>
            </li>
          </ul>
          {button && (
            <Button
              buttonStyle="btn--outline"
              link="https://docs.google.com/document/d/1Y9MOuSEEcdmue51whG7lymOZHy1GqrM3pLPvTg5C9qE/edit?usp=sharing"
            >
              Résumé
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
