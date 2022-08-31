import React from 'react';
import CartWidget from '../CartWidget';
import './styles.scss';

// aca pongo props pero se le puede poner cualquier nombre

const NavBar = () => {
  
  
  
  return (
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Kitesurf</a>
        </li>
        <li>
          <a href="">Windsurf</a>
        </li>
        <li>
          <a href="">Nosotros</a>
        </li>
        
      <CartWidget/>

      </ul>
    
    
    
  )
}

export default NavBar;