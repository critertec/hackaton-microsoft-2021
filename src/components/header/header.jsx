import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <img className="logo" src={logo} alt=""/>
      <nav className={menuOpen ? "" : "closed"}>
        <ul>
          <li>Formación</li>
          <li>Agenda</li>
          <li>Foro</li>
          <li>Tu idea</li>
          <li>Registro</li>
        </ul>
      </nav>
      <button onClick={() => setMenuOpen(!menuOpen)}>X</button>
    </header>
  );
}
 
export default Header;