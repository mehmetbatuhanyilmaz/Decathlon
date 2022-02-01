import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {


  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <footer className="footer ">
        <Link to="/" className="footer-logo" onClick={closeMobileMenu}>
          All Rights Reserved | Copyright © - PIXtagram
          <i className="fab fa-instagram" aria-hidden="true"/>
        </Link>
        <ul className={click ? "foot-menu active" : "foot-menu"}>

          <li className="foot-item">
            <Link to="/" className="foot-links" onClick={closeMobileMenu}>
              {" "}
              Privacy Policy |
            </Link>{" "}
          </li>

          <li className="foot-item">
            <Link to="/" className="foot-links" onClick={closeMobileMenu}>
              {" "}
              Use of Cookies |
            </Link>
          </li>

          <li className="foot-item">
            <Link to="/" className="foot-links" onClick={closeMobileMenu}>
              {" "}
              Sales and Refunds |
            </Link>
          </li>

          <li className="foot-item">
            <Link to="/" className="foot-links" onClick={closeMobileMenu}>
              {" "}
              Sitemap |
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
