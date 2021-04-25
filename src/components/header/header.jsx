import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";

import './header.css';
import logo from '../../assets/logo.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  let location = useLocation();
  useEffect(() => {
    setMenuOpen(false);
  },[location])

  return (
    <header>
      <NavLink to="/"><img className="logo" src={logo} alt=""/></NavLink>
      <nav className={menuOpen ? "" : "closed"}>
        <ul>
          <li><NavLink to="/formacion">Formación</NavLink></li>
          <li><NavLink to="/agenda">Agenda</NavLink></li>
          <li><NavLink to="/foro">Foro</NavLink></li>
          <li><NavLink to="/idea">Tu idea</NavLink></li>
          <li><NavLink to="/registro">Registro</NavLink></li>
        </ul>
      </nav>
      <button onClick={() => setMenuOpen(!menuOpen)}>X</button>
    </header>
  );
}
 
export default Header;