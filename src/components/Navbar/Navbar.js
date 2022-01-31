import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          PIXtagram
          <i className="fab fa-instagram"></i>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          
        <li>
            <Link
              to='/detail'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Detail
            </Link>
          </li>


          <li>
            <Link
              to='/users'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Users
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
