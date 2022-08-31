import React from 'react';
import CartWidget from '../CartWidget';
import './styles.scss';

// aca pongo props pero se le puede poner cualquier nombre

const NavBar = ({categories , temp = "10"}) => {
  
  
  
  return (
    <div>
      <p>Navbar</p>
      <p>{temp}°C</p>
      <CartWidget/>
    </div>
    
    
  )
}

export default NavBar;